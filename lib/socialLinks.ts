export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@anadoluarabekspsychedelic',
    icon: '▶️',
    color: 'from-red-500 to-red-700'
  },
  {
    name: 'Instagram',
    url: '#', // Buraya Instagram linkinizi ekleyin
    icon: '📷',
    color: 'from-pink-500 to-purple-600'
  },
  {
    name: 'TikTok',
    url: '#', // Buraya TikTok linkinizi ekleyin
    icon: '🎵',
    color: 'from-black to-gray-800'
  },
  {
    name: 'Spotify',
    url: '#', // Buraya Spotify linkinizi ekleyin
    icon: '🎧',
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Apple Music',
    url: '#', // Buraya Apple Music linkinizi ekleyin
    icon: '🍎',
    color: 'from-pink-500 to-red-500'
  },
  {
    name: 'YouTube Music',
    url: '#', // Buraya YouTube Music linkinizi ekleyin
    icon: '🎶',
    color: 'from-red-500 to-pink-600'
  },
]

