# Kurulum Talimatları

## Hızlı Başlangıç

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcıda açın:**
```
http://localhost:3000
```

## Sosyal Medya Linklerini Güncelleme

Sosyal medya linklerinizi güncellemek için `lib/socialLinks.ts` dosyasını düzenleyin:

```typescript
{
  name: 'Instagram',
  url: 'https://instagram.com/kullaniciadi', // Buraya linkinizi ekleyin
  icon: '📷',
  color: 'from-pink-500 to-purple-600'
}
```

## Forum Sistemi

Forum sistemi tamamen anonimdir. Veriler `data/forum.json` dosyasında saklanır. Bu dosya otomatik olarak oluşturulur.

## Production Build

Production için build almak:

```bash
npm run build
npm start
```

## Deployment

### Vercel (Önerilen)

1. GitHub'a projeyi push edin
2. [Vercel](https://vercel.com) hesabı oluşturun
3. GitHub repo'nuzu import edin
4. Otomatik deploy olacak!

### Manuel Deployment

```bash
npm run build
```

Build çıktısı `.next` klasöründe olacak.

## Önemli Notlar

- Forum verileri `data/forum.json` dosyasında saklanır
- Sosyal medya linkleri `lib/socialLinks.ts` dosyasından yönetilir
- YouTube linki varsayılan olarak eklenmiştir
- Diğer platform linklerini eklemek için `#` işaretini gerçek linklerle değiştirin

