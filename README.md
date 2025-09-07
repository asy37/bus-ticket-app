# 🚌 Bus Ticket App

Modern ve kullanıcı dostu bir otobüs bileti rezervasyon uygulaması. Next.js 15, React 19 ve TypeScript ile geliştirilmiştir.

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Çalıştırma](#çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Kullanılabilir Seferler](#kullanılabilir-seferler)
- [API Endpoints](#api-endpoints)
- [Geliştirme](#geliştirme)

## ✨ Özellikler

- 🔍 **Sefer Sorgulama**: Kalkış ve varış şehri, tarih seçimi ile sefer arama
- 🎫 **Bilet Rezervasyonu**: Koltuk seçimi ve cinsiyet belirleme
- 💳 **Ödeme Sistemi**: Kredi kartı ile güvenli ödeme
- 👤 **Kullanıcı Yönetimi**: Kayıt olma ve giriş yapma
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu arayüz
- 🎨 **Modern UI**: Tailwind CSS ve Radix UI bileşenleri

## 🛠 Teknolojiler

### Frontend
- **Next.js** 15.5.2 - React framework
- **React** 19.1.0 - UI kütüphanesi
- **TypeScript** 5.x - Tip güvenliği
- **Tailwind CSS** 4.x - Styling
- **Radix UI** - Erişilebilir UI bileşenleri

### State Management & Data Fetching
- **Zustand** 5.0.8 - State yönetimi
- **TanStack Query** 5.85.9 - Server state yönetimi
- **React Hook Form** 7.62.0 - Form yönetimi
- **Zod** 4.1.5 - Schema validasyonu

### Diğer Kütüphaneler
- **Axios** 1.11.0 - HTTP istekleri
- **Date-fns** 4.1.0 - Tarih işlemleri
- **Lucide React** 0.542.0 - İkonlar
- **React Toastify** 11.0.5 - Bildirimler

### Geliştirme Araçları
- **ESLint** 9.34.0 - Kod kalitesi
- **Prettier** 3.6.2 - Kod formatlama
- **TypeScript** 5.x - Tip kontrolü

## 🚀 Kurulum

### Gereksinimler
- Node.js 18.x veya üzeri
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd bus-ticket-app
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 🏃‍♂️ Çalıştırma

### Geliştirme Modu
```bash
npm run dev
```
Turbopack ile hızlı geliştirme deneyimi sağlar.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth sayfaları
│   ├── api/               # API routes
│   ├── payment/           # Ödeme sayfası
│   └── trips-details/     # Sefer detayları
├── components/            # Paylaşılan bileşenler
│   ├── ui/               # UI bileşenleri
│   ├── header/           # Header bileşeni
│   └── background/       # Arka plan bileşeni
├── features/             # Özellik bazlı klasörler
│   ├── auth/            # Kimlik doğrulama
│   ├── home/            # Ana sayfa
│   ├── payment/         # Ödeme
│   └── trip-details/    # Sefer detayları
├── lib/                 # Yardımcı kütüphaneler
│   ├── api/            # API servisleri
│   ├── types/          # TypeScript tipleri
│   └── utils.ts        # Yardımcı fonksiyonlar
└── store/              # Zustand store
```

## 🚌 Kullanılabilir Seferler

Uygulama şu şehirler arasında seferler sunmaktadır:

- **İstanbul** ↔ **Ankara**
- **İstanbul** ↔ **İzmir**
- **İstanbul** ↔ **Bursa**
- **İstanbul** ↔ **Antalya**
- **Ankara** ↔ **İzmir**
- **Ankara** ↔ **Bursa**
- **Ankara** ↔ **Antalya**
- **İzmir** ↔ **Bursa**
- **İzmir** ↔ **Antalya**
- **Bursa** ↔ **Antalya**

### Sefer Özellikleri
- **Koltuk Sayısı**: 30 koltuk
- **Fiyat Aralığı**: 50-250 TL (rastgele)
- **Kalkış Saatleri**: 00:00 - 23:45 (15 dakika aralıklarla)
- **Tarih Aralığı**: Bugünden itibaren 7 gün
- **Cinsiyet Seçimi**: Erkek/Kadın koltuk ayrımı

## 🔌 API Endpoints

### Kimlik Doğrulama
- `POST /api/auth/login` - Kullanıcı girişi
- `POST /api/auth/register` - Kullanıcı kaydı

### Sefer İşlemleri
- `GET /api/cities` - Şehir listesi
- `POST /api/inquiry` - Sefer sorgulama
- `POST /api/buy-trip` - Bilet satın alma
- `POST /api/pay-trip` - Ödeme işlemi

## 🛠 Geliştirme

### Kod Standartları
- ESLint ve Prettier konfigürasyonu mevcuttur
- TypeScript strict mode aktif
- Import sıralama otomatik düzenlenir

### Mock Data
Uygulama geliştirme aşamasında mock data kullanmaktadır:
- `src/lib/api/mock-data/cities.ts` - Şehir verileri
- `src/lib/api/mock-data/trips.ts` - Sefer verileri

### State Management
- **Zustand** ile global state yönetimi
- **TanStack Query** ile server state yönetimi
- **React Hook Form** ile form state yönetimi

## 📝 Notlar

- Uygulama şu anda mock data kullanmaktadır
- Gerçek API entegrasyonu için `src/lib/api/services/` klasöründeki servisleri güncelleyin
- Ödeme sistemi demo amaçlıdır, gerçek ödeme işlemi yapmaz
- Responsive tasarım tüm cihazlarda test edilmiştir

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Geliştirici**: Ahmet Sefa Yılmaz 
**Versiyon**: 0.1.0  
**Son Güncelleme**: 2025
