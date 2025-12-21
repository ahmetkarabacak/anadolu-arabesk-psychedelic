'use client'

import { useState, useEffect } from 'react'

interface ForumRequest {
  id: string
  message: string
  createdAt: string
}

export default function ForumList() {
  const [requests, setRequests] = useState<ForumRequest[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchRequests()
  }, [])

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/forum')
      if (response.ok) {
        const data = await response.json()
        setRequests(data.requests || [])
      } else {
        setError('İstekler yüklenirken bir hata oluştu')
      }
    } catch (err) {
      setError('Bağlantı hatası')
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        <p className="mt-4 text-gray-400">Yükleniyor...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-300">
        {error}
      </div>
    )
  }

  if (requests.length === 0) {
    return (
      <div className="text-center py-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
        <p className="text-gray-400 text-lg">Henüz istek gönderilmemiş</p>
        <p className="text-gray-500 text-sm mt-2">İlk isteği siz gönderin!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div
          key={request.id}
          className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
        >
          <p className="text-white mb-3 leading-relaxed">{request.message}</p>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Anonim
            </span>
            <span>{formatDate(request.createdAt)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

