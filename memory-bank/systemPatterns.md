# System Patterns: Anadolu Arabesk Psychedelic Website

## Mimari Yapı

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Ana sayfa
│   ├── forum/             # Forum sayfası
│   │   └── page.tsx
│   └── api/               # API routes
│       └── forum/
│           └── route.ts    # Forum API endpoints
├── components/             # React bileşenleri
│   ├── SocialLinks.tsx    # Sosyal medya linkleri
│   ├── ForumForm.tsx      # İstek gönderme formu
│   ├── ForumList.tsx      # İstek listesi
│   └── Layout.tsx         # Ana layout
├── lib/                    # Yardımcı fonksiyonlar
│   └── db.ts              # Veritabanı bağlantısı
└── public/                 # Statik dosyalar
    └── images/
```

## Tasarım Desenleri

### Component Yapısı
- **Atomic Design**: Küçük, yeniden kullanılabilir bileşenler
- **Server Components**: Next.js 14 App Router kullanımı
- **Client Components**: İnteraktif öğeler için

### Veri Yönetimi
- **API Routes**: Next.js API routes ile backend işlemleri
- **Server Actions**: Form işlemleri için (Next.js 14+)
- **Database**: Forum istekleri için basit veritabanı

### Styling Yaklaşımı
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first yaklaşım
- **Dark/Light Mode**: (opsiyonel) Tema desteği

## Ana Bileşenler

### 1. SocialLinks Component
- Sosyal medya platformlarını görsel olarak gösterir
- Her platform için icon ve link
- Hover efektleri ve animasyonlar

### 2. ForumForm Component
- Anonim istek gönderme formu
- Validasyon
- Başarı/hata mesajları

### 3. ForumList Component
- Gönderilen isteklerin listesi
- Tarih ve içerik gösterimi
- Sayfalama (opsiyonel)

### 4. Layout Component
- Header/Navigation
- Footer
- Ana layout yapısı

## API Endpoints

### POST /api/forum
- Yeni istek gönderme
- Request body: { message: string }
- Response: { success: boolean, id?: string }

### GET /api/forum
- Tüm istekleri getirme
- Response: { requests: Array<{id, message, createdAt}> }

## Güvenlik
- Rate limiting (spam önleme)
- Input validation
- XSS koruması
- CORS ayarları

