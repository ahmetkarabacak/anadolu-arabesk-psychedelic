import ForumForm from '@/components/ForumForm'
import ForumList from '@/components/ForumList'

export const metadata = {
  title: 'Forum - Anadolu Arabesk Psychedelic',
  description: 'Anonim olarak müzik isteklerinizi paylaşın',
}

export default function ForumPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          İstek Forumu
        </h1>
        <p className="text-gray-300 text-lg">
          Anonim olarak müzik isteklerinizi ve görüşlerinizi paylaşın
        </p>
      </div>
      
      <div className="mb-12">
        <ForumForm />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-purple-300">
          Gönderilen İstekler
        </h2>
        <ForumList />
      </div>
    </div>
  )
}

