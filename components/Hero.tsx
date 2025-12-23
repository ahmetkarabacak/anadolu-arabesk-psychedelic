import Image from 'next/image'

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Görsel */}
        <div className="flex-shrink-0 w-full md:w-1/2 max-w-md">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-orange-900/20">
            <Image
              src="/images/anadolu.arabesk.jpeg"
              alt="Anadolu Arabesk Psychedelic"
              width={500}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-arabesk-dark/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Metin İçeriği */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Anadolu Arabesk Psychedelic
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto md:mx-0">
            Yapay zeka ile üretilen müzik deneyimi
          </p>
          <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Anadolu arabesk müziğin psychedelic yorumu ile benzersiz bir müzik yolculuğuna çıkın
          </p>
        </div>
      </div>
    </div>
  )
}

