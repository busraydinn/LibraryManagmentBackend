 
# 📚 LibraryProjectBackend

Node.js ve Express.js kullanılarak geliştirilmiş basit bir **REST API** projesidir. Uygulama, kitap verilerini `data` klasöründe bulunan JSON dosyalarından okuyarak istemcilere sunmaktadır.

## 🚀 Özellikler

- Node.js ve Express.js kullanılarak geliştirilmiştir.
- REST API yapısına sahiptir.
- Veriler JSON dosyalarından okunmaktadır.
- Basit ve anlaşılır klasör yapısı.
- Genişletilebilir proje mimarisi.

## 🛠️ Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript (ES6)

## 📁 Proje Yapısı

<img width="292" height="272" alt="image" src="https://github.com/user-attachments/assets/d318b595-cb3f-4ab5-b92a-c142e4ffa22d" />


## ⚙️ Kurulum

Proje klasörüne geçin:

```bash
cd LibraryProjectBackend
```

Gerekli paketleri yükleyin:

```bash
npm install
```

## ▶️ Projeyi Çalıştırma

Sunucuyu başlatmak için:

```bash
node server.js
```

veya `package.json` içerisinde `start` script'i tanımlıysa:

```bash
npm start
```

Uygulama varsayılan olarak aşağıdaki adreste çalışacaktır:

```text
http://localhost:3000
```

## 📌 API Endpointleri

### Tüm kitapları getir

```http
GET /books
```

### ID'ye göre kitap getir

```http
GET /books/:id
```

## 📄 Örnek Yanıt

```json
[
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert C. Martin"
  },
  {
    "id": 2,
    "title": "The Pragmatic Programmer",
    "author": "Andrew Hunt"
  }
]
```

## 📂 Veri Kaynağı

Bu projede herhangi bir veritabanı kullanılmamaktadır. Veriler, `data` klasöründe bulunan JSON dosyalarından okunmaktadır.

## 👨‍💻 Geliştirici

Bu proje, **Node.js** ve **Express.js** teknolojilerini kullanarak backend geliştirme pratiği yapmak amacıyla hazırlanmıştır.
 
