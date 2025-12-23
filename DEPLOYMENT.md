# Deployment Rehberi

## Vercel ile Deploy (Önerilen - Ücretsiz)

Vercel, Next.js için en iyi hosting seçeneğidir ve GitHub ile otomatik entegre çalışır.

### Adımlar:

1. **Vercel'e Git:**
   - https://vercel.com adresine gidin
   - GitHub hesabınızla giriş yapın

2. **Projeyi İmport Et:**
   - "Add New Project" butonuna tıklayın
   - GitHub repository'nizi seçin: `ahmetkarabacak/anadolu-arabesk-psychedelic`
   - "Import" butonuna tıklayın

3. **Ayarları Yapın:**
   - Framework Preset: Next.js (otomatik algılanır)
   - Root Directory: `./` (varsayılan)
   - Build Command: `npm run build` (otomatik)
   - Output Directory: `.next` (otomatik)
   - Install Command: `npm install` (otomatik)

4. **Deploy Et:**
   - "Deploy" butonuna tıklayın
   - Birkaç dakika içinde siteniz hazır olacak!

5. **Domain:**
   - Vercel size otomatik bir domain verir: `anadolu-arabesk-psychedelic.vercel.app`
   - Özel domain eklemek için Settings > Domains bölümünden ekleyebilirsiniz

### Otomatik Deploy:
- GitHub'a her push yaptığınızda otomatik olarak deploy olur
- Production ve Preview deploy'ları otomatik oluşturulur

## GitHub Pages ile Deploy (Alternatif)

GitHub Pages statik siteler için uygundur. Next.js için export gerekir.

### Adımlar:

1. **next.config.js'i güncelleyin:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

2. **Build ve Export:**
```bash
npm run build
```

3. **GitHub Pages'i Aktifleştir:**
   - GitHub repository'nizde Settings > Pages
   - Source: `gh-pages` branch veya `/docs` folder
   - Save

4. **gh-pages branch oluştur:**
```bash
npm install -g gh-pages
gh-pages -d out
```

**Not:** GitHub Pages Next.js API routes'ları desteklemez, bu yüzden forum API'si çalışmayabilir. Vercel önerilir.

## Netlify ile Deploy (Alternatif)

1. https://netlify.com adresine gidin
2. GitHub ile giriş yapın
3. "Add new site" > "Import an existing project"
4. Repository'nizi seçin
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

## Domain Ayarları

### Vercel'de Özel Domain:
1. Settings > Domains
2. Domain ekleyin
3. DNS ayarlarını yapın (Vercel talimatları verir)

### Ücretsiz Domain Önerileri:
- Freenom (.tk, .ml, .ga)
- Namecheap (ücretli ama ucuz)
- Google Domains

## Önemli Notlar

- Forum verileri (`data/forum.json`) her deployment'ta sıfırlanır (Vercel serverless)
- Production'da veritabanı için Supabase veya başka bir servis kullanmanız önerilir
- Environment variables için Vercel Settings > Environment Variables kullanın


