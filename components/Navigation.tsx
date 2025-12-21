'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-purple-900/50 bg-arabesk-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Anadolu Arabesk Psychedelic
          </Link>
          
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`transition-colors hover:text-purple-400 ${
                pathname === '/' ? 'text-purple-400' : 'text-gray-300'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/forum" 
              className={`transition-colors hover:text-purple-400 ${
                pathname === '/forum' ? 'text-purple-400' : 'text-gray-300'
              }`}
            >
              Forum
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

