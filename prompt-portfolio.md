<context>
Folder kerja: C:\KULIAHH\web-pribadi-hafizhramadhan
Tujuan: website portofolio pribadi statis Hafizh Ramadhan untuk rekruter. HTML + CSS + JS vanilla, engine scroll-craft (salin engine/scrollcraft.js dan engine/scrollcraft.css ke project, jangan diedit; tema lewat token CSS).

Fakta sudah terverifikasi (jangan cek ulang):
- assets/referensi/ TIDAK ADA. Ikuti deskripsi tata letak di prompt ini saja.
- Nama file di assets/ (ada spasi, URL-encode): "FOTO ALMET UPN APIS.jpg" (1535x2126, latar merah), "logo upn.jpg", "dashboard web.jpg" (842x472), "html logo.jpg", "logo css.jpg", "JavaScript-logo.jpg", "node js logo.jpg", "react logo.jpg", "posgresql logo.jpg", "laragon logo.jpg", "laravel.jpg", "php logo.jpg", "tailwind css.jpg", "logo instagram.jpg", "github logo.jpg", "linkedin logo.jpg", "sertif 1.jpg" sampai "sertif 11.jpg" (semua kira-kira 1050x745). "git logo .jpg" tidak dipakai.
- "linkedin logo.jpg" dan "node js logo.jpg" sebenarnya WebP (lossless, ber-alpha) berekstensi .jpg. Browser tetap bisa menampilkannya. Jangan rename file asli.
- Repo MONY (github.com/patrichmoratti/website-koperasi-cempaka): Laravel 10, PHP ^8.1, Tailwind CSS 3, Vite 5, Composer, Node.js (npm). Database: MySQL (DB_CONNECTION=mysql di .env.example). barryvdh/laravel-dompdf dan maatwebsite/excel ada di repo. Migrations membuat 16 tabel, pemilik menyebut 17. Tampilkan "17 tabel" sesuai data pemilik dan catat selisih ini di TODO.
- Judul sertifikat (semua Dicoding, urut nomor file):
  1 Memulai Dasar Pemrograman untuk Menjadi Pengembang Software
  2 Pengenalan ke Logika Pemrograman (Programming Logic 101)
  3 Belajar Dasar Git dengan GitHub
  4 Belajar Dasar AI
  5 Belajar Dasar Pemrograman Web
  6 Belajar Dasar Pemrograman JavaScript
  7 Belajar Membuat Front-End Web untuk Pemula
  8 Belajar Membuat Aplikasi Web dengan React
  9 Belajar Fundamental Aplikasi Web dengan React
  10 Belajar Back-End Pemula dengan JavaScript
  11 Belajar Fundamental Back-End dengan JavaScript
- Playwright: browser sudah ada di %LOCALAPPDATA%\ms-playwright. playwright-core tersedia di $(npm root -g)/@playwright/cli/node_modules. Jangan install apa pun di project.
</context>

<constraints>
- MUST NOT menyentuh .claude/, .playwright/, skills-lock.json, prompt-portfolio.md. MUST NOT mengubah, me-rename, atau menghapus file di assets/.
- Tanpa framework, backend, build tool, atau dependensi npm di project. Stop dan tanya sebelum menambah salah satunya.
- Lewati wawancara skill dan registry FINGERPRINTS; brief ini lengkap dan didelegasikan. Jangan generate aset lewat kie.ai.
- Kerjakan hanya yang diminta di file ini. Jangan pakai subagent kecuali untuk verifikasi yang benar-benar terpisah.
- Setiap klaim progres harus berdasar hasil tool yang nyata.
- JANGAN MENGARANG: tidak ada fakta, angka, tanggal, atau nama di luar file ini. Data kosong tampil sebagai "TODO: ..." dan dicatat.
- Referensi = portofolio orang lain; tiru hanya tata letak. Tidak dipakai: toggle suara, kartu ID 3D Three.js, form pesan, komentar, tab Achievements, efek glitch.
- Jangan salin nama atau email yang terlihat di screenshot dashboard ke teks website.
</constraints>

<design>
- Latar navy gelap, satu aksen biru. Glass tipis hanya di navbar pill (maksimal satu elemen lain).
- Satu pasangan font berkarakter via Google Fonts dengan fallback (bukan Inter/Roboto/Arial sebagai satu-satunya). Skala tipe dan spacing lewat token.
- Hierarki ukuran tegas, grid jelas, sedikit asimetri. Radius dan bayangan bervariasi per jenis kartu.
- Anti-slop: tanpa gradien ungu-biru, glow neon, blob/orb, partikel, emoji-ikon, wave divider, skill bar persen, lorem ipsum. Tanpa em dash di teks tampil. Copy konkret, tanpa "passionate/cutting-edge/seamless/innovative/leveraging/crafting digital experiences/Welcome to my portfolio/I turn ideas into reality", tanpa pola tiga serangkai di setiap kalimat.
- Logo JPG berlatar putih ditaruh di ubin terang berujung membulat.
</design>

<content>
NAVBAR: pill melayang: Home, About, Portfolio, Contact + tombol bahasa ID/EN (satu-satunya toggle). Skip link.
BAHASA: default ID, toggle EN, simpan di localStorage, update <html lang>. Semua teks UI dan konten project lewat satu objek I18N. Terjemahan setia.

1 HERO: h1 "Hafizh Ramadhan". Headline "AI Full-Stack Developer Cohort · Asah 2026 (Dicoding x GoTo)". Subjudul EN "Information Systems Student at UPN “Veteran” Jawa Timur | React · Node.js · PostgreSQL" (versi ID setia). 1-2 kalimat dari teks About. Tombol "Lihat Projek" (#portfolio) dan "Hubungi Saya" (#contact), ikon Find Me. Kanan: kartu foto gaya ID dari FOTO ALMET (object-fit crop rapi, tanpa filter warna).
Meta description dan OG: "AI Full-Stack Developer Cohort at Asah 2026 (Dicoding x GoTo) | Information Systems Student at UPN “Veteran” Jawa Timur | React · Node.js · PostgreSQL". og:url dan og:image absolut = TODO.

2 ABOUT: judul "Hi, I'm Hafizh Ramadhan" (ID setia) + foto. Teks sumber fakta (boleh dirapikan, tanpa klaim baru):
"Mahasiswa Sistem Informasi UPN “Veteran” Jawa Timur yang sedang mengikuti Asah 2026 (Dicoding x GoTo) sebagai AI Full-Stack Developer. Saya suka membangun aplikasi web dari ujung ke ujung: antarmuka, API, hingga database. Saat ini, saya bekerja dalam tim lintas peran (Full-Stack, Data Science, GenAI) untuk membangun produk MVP, dengan SQL Server sebagai database proyek akhir. Perjalanan teknis saya: Java → .NET → PHP, JavaScript & Tailwind CSS; Asah 2026: React, Node.js, PostgreSQL. Karena terbiasa berpindah antar bahasa dan framework, saya cepat beradaptasi dan memahami aplikasi dari sisi frontend, backend, dan database. Terbuka untuk magang, posisi junior, dan kolaborasi proyek."
Education (logo upn.jpg): UPN “Veteran” Jawa Timur, Sistem Informasi, 2024 – sekarang (Semester 5).
Experience (ikon SVG sederhana): Asah 2026 (Dicoding x GoTo), AI Full-Stack Developer Cohort, 18 Agustus 2026 – 31 Januari 2027 (sedang berjalan); tim lintas peran Full-Stack / Data Science / GenAI, produk MVP.
Statistik: Projects (= panjang array project) dan Certificates (11). Tanpa Awards.

3 PORTFOLIO: tab accessible (role=tablist/tab/tabpanel, roving tabindex, panah kiri/kanan, Home/End): Projects | Certificates | Tech Stack.
a Projects: data dalam satu array. Kartu: gambar, judul, deskripsi singkat, tombol Details. Detail (hash #project/<slug>, tombol Back browser jalan, fokus ke judul saat buka, kembali ke tombol Details saat tutup, main di-inert): Back, breadcrumb, judul, label, deskripsi, kontribusi, "Technologies Used" (chip ikon + nama; tanpa logo = ikon SVG generik), gambar, link.
 MONY – Website Koperasi Simpan Pinjam Cempaka
 - Label: Project kelompok (3 orang), final project mata kuliah Pemrograman Web, semester genap 2025/2026. Tanpa NIM atau nama anggota lain.
 - Deskripsi: sistem informasi manajemen gadai berbasis web untuk KSP Cempaka yang mendigitalkan alur gadai (pengajuan, penilaian barang, pencairan, pembayaran cicilan/tebus, lelang barang tidak ditebus), manajemen simpanan, laporan keuangan PDF dan Excel, audit trail transaksi berbasis prinsip ACID, pesan internal anggota–pengurus. Tiga role: Admin, Pengurus, Anggota. Database relasional 17 tabel.
 - Kontribusi saya (bagian role Anggota): Dashboard Anggota; Pengajuan Gadai (wizard bertahap, upload foto, video, dokumen); Simulasi Gadai (kalkulator estimasi pinjaman, bunga, cicilan); Detail & Pembayaran Gadai (cicilan bulanan/pelunasan + unggah bukti transfer); Batal Pengajuan Gadai; Riwayat Transaksi; Notifikasi. Tanpa label "frontend/backend developer".
 - Technologies Used: Laravel, PHP, Tailwind CSS, Vite, Composer, Node.js, MySQL.
 - Link (tab baru, rel="noopener noreferrer"): Repo https://github.com/patrichmoratti/website-koperasi-cempaka, Demo video https://youtu.be/DansUCELal0
 - Gambar: HANYA "dashboard web.jpg" di bingkai jendela browser buatan CSS, alt "Tampilan Dashboard Anggota pada aplikasi MONY".
b Certificates: grid 11 thumbnail (lazy, width/height eksplisit, caption = judul di atas). Lightbox: role=dialog aria-modal, Esc tutup, panah kiri/kanan, fokus terkunci, fokus kembali ke kartu asal.
c Tech Stack: 10 ubin logo + nama, urutan HTML, CSS, JavaScript, Node.js, React, PostgreSQL, Laragon, Laravel, PHP, Tailwind CSS.

4 CONTACT: kalimat terbuka untuk magang, posisi junior, kolaborasi proyek. Tombol "Kirim Email" mailto:hafizh.ramadhan@live.com. Tanpa form. Find Me (tab baru, rel="noopener noreferrer"): Instagram https://www.instagram.com/hafizhdhn/, GitHub https://github.com/hafizhdhn, LinkedIn https://www.linkedin.com/in/hafizh-ramadhan-910026302/. Ikon sama dipakai di hero.
Footer sederhana.
</content>

<motion>
Satu set token: durasi 160/240/400 ms, satu easing cubic-bezier(0.23,1,0.32,1). Override transisi 620 ms bawaan engine ke token ini lewat CSS project.
- Hero intro: stagger teks pendek, kartu foto masuk halus, lalu tilt (data-sc-tilt pada elemen dalam; animasi masuk pada wrapper luar agar transform tidak bentrok). Hanya perangkat hover.
- Scroll: reveal berbeda per jenis isi (judul, teks, kartu) via data-sc-in + data-sc-stagger; transform hover di elemen dalam agar transition-delay stagger tidak menunda hover. Parallax sangat ringan di latar hero (data-sc-act="flow" + data-sc-parallax kecil).
- Navbar: saat scroll pill mengecil/menebal (transform + opacity layer latar); indikator link aktif meluncur (translateX + scaleX), section aktif via IntersectionObserver.
- About: count-up statistik via data-sc-count DI LUAR elemen data-sc-act (agar tick sekali saat terlihat); garis timeline digambar dengan scaleY dari --sc-p pada wrapper timeline data-sc-act="flow".
- Tab: indikator meluncur, isi panel fade + geser pendek.
- Detail project: FLIP gambar dari posisi kartu ke detail; Back membalik. Tanpa posisi kartu (buka langsung via hash) = fade.
- Lightbox: buka dari posisi thumbnail, tutup kembali ke sana, ganti gambar dengan slide halus.
- Hover: kartu terangkat tipis, ikon tech bergerak halus, tombol :active tertekan.
- Hanya animasikan transform dan opacity. Tanpa layout thrash, will-change seperlunya, tidak ada animasi yang memblokir konten.
- prefers-reduced-motion: fade singkat atau tampil langsung; tanpa parallax, tilt, count-up bergerak, atau FLIP.
- <noscript> menampilkan semua elemen data-sc-in.
</motion>

<a11y>
Semantic HTML (header, nav, main, section, footer), heading berurutan, kontras minimal 4.5:1, focus ring jelas, semua kontrol bisa keyboard, alt bermakna, tanpa scroll horizontal di 375px dan 1440px.
</a11y>

<output_format>
Struktur: index.html, css/scrollcraft.css, css/style.css, js/scrollcraft.js, js/i18n.js, js/main.js, BRIEF.md (rencana: section, palet, font, motion plan, TODO). Tulis BRIEF.md dulu, lalu langsung bangun tanpa menunggu persetujuan.
</output_format>

<verification>
Jalankan server statis (scripts/serve.mjs dari skill, --root project). Screenshot Playwright di 375x812 dan 1440x900, normal dan reduced-motion, simpan di folder temp sistem (BUKAN di project, .claude/, atau .playwright/). Periksa: tidak ada overflow horizontal, tab + keyboard jalan, detail project buka/tutup + Back browser, lightbox Esc/panah/fokus kembali, toggle bahasa tersimpan setelah reload, tidak ada error console. Perbaiki lalu ulangi maksimal 3 putaran; kalau masih gagal, berhenti dan laporkan.
</verification>

<done>
Selesai jika semua cek di atas lulus dan audit anti-slop sudah dijalankan pada hasil. Laporan akhir singkat: struktur file, cara membuka (index.html atau server statis), hasil audit anti-slop beserta perbaikannya, daftar semua TODO (termasuk selisih 16/17 tabel, og:url, og:image absolut), dan hal yang tidak bisa diverifikasi (misalnya perangkat HP asli).
</done>
