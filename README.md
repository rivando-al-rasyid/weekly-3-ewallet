# 💳 VanWallet

<div align="center">

[![🇮🇩 Bahasa Indonesia](https://img.shields.io/badge/🇮🇩-Bahasa_Indonesia-blue?style=for-the-badge)](#-versi-bahasa-indonesia)
[![🇬🇧 English](https://img.shields.io/badge/🇬🇧-English-lightgrey?style=for-the-badge)](#-english-version)

</div>

---

## 🇮🇩 Versi Bahasa Indonesia

### Tentang Project

**VanWallet** adalah sistem pembayaran berbasis e-wallet yang dirancang untuk penggunaan **desktop dan mobile**. Dibangun menggunakan teknologi web standar, VanWallet bertujuan memberikan pengalaman transaksi digital yang mudah, cepat, dan responsif.

> ⚠️ **Status:** Project ini masih dalam tahap pengembangan aktif (*Work in Progress*). Fitur dan tampilan dapat berubah sewaktu-waktu.

---

### 🛠️ Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|

| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Struktur halaman |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Responsivitas |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Logika & Interaktivitas |

---

### 🎯 Fitur (Planned & In Progress)

- [x] 🔐 Login & Registrasi pengguna
- [x] 🔑 Verifikasi PIN & Reset Password
- [ ] 💰 Cek saldo e-wallet
- [x] 📤 Transfer antar pengguna
- [x] 📥 Top-up saldo
- [x] 🧾 Riwayat transaksi
- [x] 👤 Edit profil, ganti password & PIN
- [x] 📱 Tampilan responsif (mobile & desktop)

---

### 🚀 Cara Menjalankan

#### Prasyarat
- Browser modern (Chrome, Firefox, Edge, Safari)
- Tidak diperlukan instalasi tambahan untuk versi awal

#### Langkah-langkah

```bash
# 1. Clone repositori ini
git clone https://github.com/rivando-al-rasyid/vanwallet.git

# 2. Masuk ke direktori project
cd vanwallet

# 3. Buka file index.html di browser
# Bisa langsung double-click file index.html
# Atau gunakan Live Server jika menggunakan VS Code
```

---

### 📸 Demo / Preview

> 🚧 Screenshot dan demo akan ditambahkan seiring perkembangan project.

```
[Screenshot akan ditambahkan di sini]
```

---

### 📁 Struktur Folder

```
vanwallet/
├── index.html                   # Halaman utama (landing/redirect)
├── assets/                      # Aset statis (gambar, ikon, dll)
├── css/
│   ├── color.css                # Variabel warna global
│   ├── dashboard.css            # Styling halaman dashboard
│   └── style.css                # Styling umum
├── pages/
│   ├── auth/
│   │   ├── login.html           # Halaman login
│   │   ├── pin.html             # Halaman verifikasi PIN
│   │   ├── registrasi.html      # Halaman registrasi
│   │   └── reset.html           # Halaman reset password
│   └── dashboards/
│       ├── modal/               # Komponen modal
│       ├── index.html           # Dashboard utama
│       ├── history.html         # Riwayat transaksi
│       ├── topup.html           # Top-up saldo
│       ├── transfer.html        # Transfer dana
│       ├── tranfer-detail.html  # Detail transfer
│       ├── change-password.html # Ganti password
│       ├── change-pin.html      # Ganti PIN
│       └── edit-profile.html    # Edit profil
├── .gitignore
├── eslint.config.mjs
├── package.json
└── package-lock.json
```

---

### 🤝 Kontribusi

Project ini masih dalam pengembangan. Kontribusi, saran, dan masukan sangat disambut!

1. Fork repositori ini
2. Buat branch fitur baru (`git checkout -b fitur/nama-fitur`)
3. Commit perubahan kamu (`git commit -m 'Menambahkan fitur X'`)
4. Push ke branch (`git push origin fitur/nama-fitur`)
5. Buat Pull Request

---

### 📄 Lisensi

Project ini belum memiliki lisensi resmi. Akan diperbarui seiring perkembangan project.

---
---

## 🇬🇧 English Version

### About the Project
**VanWallet** is an e-wallet payment system designed for both **desktop and mobile** use. Built with standard web technologies, VanWallet aims to deliver a seamless, fast, and responsive digital transaction experience.

> ⚠️ **Status:** This project is currently under active development (*Work in Progress*). Features and UI may change at any time.

---

### 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Page structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Responsiveness |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Logic & Interactivity |

---

### 🎯 Features (Planned & In Progress)

- [x] 🔐 User login & registration
- [x] 🔑 PIN verification & password reset
- [ ] 💰 Wallet balance overview
- [x] 📤 Peer-to-peer transfer
- [x] 📥 Top-up balance
- [x] 🧾 Transaction history
- [x] 👤 Edit profile, change password & PIN
- [x] 📱 Fully responsive layout (mobile & desktop)

---

### 🚀 Getting Started

#### Prerequisites
- A modern browser (Chrome, Firefox, Edge, Safari)
- No additional installations required for the initial version

#### Steps

```bash
# 1. Clone this repository
git clone https://github.com/rivando-al-rasyid/vanwallet.git

# 2. Navigate to the project directory
cd vanwallet

# 3. Open index.html in your browser
# You can double-click index.html directly
# Or use Live Server extension in VS Code
```

---

### 📸 Demo / Preview

> 🚧 Screenshots and live demo will be added as the project progresses.

```
[Screenshots will be added here]
```

---

### 📁 Project Structure

```
vanwallet/
├── index.html                   # Main entry point
├── assets/                      # Static assets (images, icons, etc.)
├── css/
│   ├── color.css                # Global color variables
│   ├── dashboard.css            # Dashboard page styles
│   └── style.css                # General styles
├── pages/
│   ├── auth/
│   │   ├── login.html           # Login page
│   │   ├── pin.html             # PIN verification page
│   │   ├── registrasi.html      # Registration page
│   │   └── reset.html           # Password reset page
│   └── dashboards/
│       ├── modal/               # Modal components
│       ├── index.html           # Main dashboard
│       ├── history.html         # Transaction history
│       ├── topup.html           # Balance top-up
│       ├── transfer.html        # Fund transfer
│       ├── tranfer-detail.html  # Transfer detail
│       ├── change-password.html # Change password
│       ├── change-pin.html      # Change PIN
│       └── edit-profile.html    # Edit profile
├── .gitignore
├── eslint.config.mjs
├── package.json
└── package-lock.json
```

---

### 🤝 Contributing

This project is open to contributions, suggestions, and feedback!

1. Fork this repository
2. Create a new feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add feature X'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a Pull Request

---

### 📄 License

This project does not yet have an official license. Will be updated as the project matures.

---

*Made with ❤️ — VanWallet is a work in progress. Stay tuned!*
