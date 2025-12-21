'use client'

import { socialLinks as defaultSocialLinks, type SocialLink } from '@/lib/socialLinks'

export default function SocialLinks() {
  const socialLinks = defaultSocialLinks

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-300">
        Bizi Takip Edin
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {socialLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => handleLinkClick(link.url)}
            className={`group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${link.color} transform transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              link.url === '#' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={link.url === '#'}
          >
            <div className="text-4xl mb-2">{link.icon}</div>
            <div className="text-white font-semibold text-sm">{link.name}</div>
            {link.url === '#' && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-xs text-white">Yakında</span>
              </div>
            )}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>Sosyal medya linklerini güncellemek için <code className="bg-black/40 px-2 py-1 rounded">lib/socialLinks.ts</code> dosyasını düzenleyin</p>
      </div>
    </div>
  )
}

