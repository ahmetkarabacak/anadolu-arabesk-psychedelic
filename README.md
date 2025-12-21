# Anadolu Arabesk Psychedelic Website

Yapay zeka ile üretilen anadolu arabesk psychedelic müzik için modern web sitesi.

## Özellikler

- 🎵 Sosyal medya linkleri (Instagram, TikTok, YouTube, Spotify, Apple Music, YouTube Music)
- 💬 Anonim forum sistemi
- 🎨 Modern ve psychedelic temalı tasarım
- 📱 Responsive (mobil uyumlu)
- ⚡ Next.js 14 ile yüksek performans

## Kurulum

1. Repository'yi klonlayın:
```bash
git clone https://github.com/YOUR_USERNAME/anadolu-arabesk-psychedelic.git
cd anadolu-arabesk-psychedelic
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yapı

- `app/` - Next.js App Router sayfaları
- `components/` - React bileşenleri
- `lib/` - Yardımcı fonksiyonlar ve veritabanı
- `public/` - Statik dosyalar

## Sosyal Medya Linklerini Güncelleme

Sosyal medya linklerini güncellemek için `lib/socialLinks.ts` dosyasını düzenleyin.

## Forum

Forum sistemi tamamen anonimdir. Kullanıcılar kayıt olmadan istek gönderebilir. Veriler `data/forum.json` dosyasında saklanır.

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Pull request göndermekten çekinmeyin.

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## Deployment

Vercel'e deploy etmek için:

```bash
npm run build
```

Veya Vercel CLI kullanarak:

```bash
vercel
```

## Teknolojiler

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

