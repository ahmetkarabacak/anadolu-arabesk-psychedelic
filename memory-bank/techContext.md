# Tech Context: Anadolu Arabesk Psychedelic Website

## Teknoloji Stack

### Frontend
- **Next.js 14+** (React framework) - SEO ve performans için
- **TypeScript** - Tip güvenliği için
- **Tailwind CSS** - Modern ve hızlı styling
- **Framer Motion** (opsiyonel) - Animasyonlar için

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Database**: 
  - **SQLite** (geliştirme için basit)
  - veya **PostgreSQL** (production için)
  - veya **Supabase** (hızlı başlangıç için)

### Forum Sistemi
- Backend API ile istek kaydetme
- Veritabanında anonim isteklerin saklanması
- Frontend'de isteklerin listelenmesi

## Geliştirme Ortamı
- Node.js 18+
- npm veya yarn
- Modern tarayıcılar (Chrome, Firefox, Safari, Edge)

## Bağımlılıklar
- next
- react
- react-dom
- typescript
- tailwindcss
- @types/node
- @types/react
- @types/react-dom

## Deployment
- Vercel (Next.js için ideal)
- veya Netlify
- veya kendi sunucu

## Teknik Kısıtlamalar
- Anonim forum - kullanıcı kaydı gerektirmiyor
- Sosyal medya linkleri - yönetilebilir olmalı (config dosyası veya admin paneli)

