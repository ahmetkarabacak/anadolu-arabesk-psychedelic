'use client'

import { useState } from 'react'

export default function ForumForm() {
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim()) {
      setStatus({ type: 'error', message: 'Lütfen bir mesaj yazın' })
      return
    }

    if (message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Mesaj en az 10 karakter olmalıdır' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/forum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'İsteğiniz başarıyla gönderildi!' })
        setMessage('')
        // Sayfayı yenile (isteği listede görmek için)
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } else {
        setStatus({ type: 'error', message: data.error || 'Bir hata oluştu' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Bağlantı hatası. Lütfen tekrar deneyin.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
      <h3 className="text-2xl font-semibold mb-4 text-purple-300">
        Yeni İstek Gönder
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            İsteğiniz (Anonim)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Müzik isteğinizi veya görüşlerinizi buraya yazın..."
            disabled={isSubmitting}
          />
          <p className="text-xs text-gray-400 mt-1">
            {message.length} / 500 karakter
          </p>
        </div>

        {status.type && (
          <div
            className={`p-3 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </form>
    </div>
  )
}

