# BRIEF: Portofolio Hafizh Ramadhan

Self-authored under explicit creative delegation. Sumber: `prompt-portfolio.md`. Wawancara skill dan registry FINGERPRINTS dilewati atas permintaan pemilik. Tidak ada aset yang di-generate.

## Tujuan

Website portofolio statis satu halaman untuk rekruter. HTML, CSS, dan JavaScript vanilla. Engine scroll-craft disalin apa adanya ke `css/scrollcraft.css` dan `js/scrollcraft.js`; tema lewat token CSS di `css/style.css`.

## Section

1. **Navbar**: pill melayang (Beranda, Tentang, Portofolio, Kontak) dan satu tombol bahasa ID/EN. Skip link.
2. **Hero**: nama, headline cohort, subjudul kampus dan stack, dua kalimat dari teks About, dua tombol, ikon Find Me. Kanan: kartu foto gaya ID.
3. **About**: judul sapaan, foto, tiga paragraf, urutan perjalanan teknis, statistik (Projek, Sertifikat), timeline Pendidikan dan Pengalaman.
4. **Portfolio**: tab Projek, Sertifikat, Tech Stack. Detail projek lewat hash `#project/<slug>`. Lightbox sertifikat.
5. **Contact**: satu kalimat, tombol email, Find Me. Footer sederhana.

## Palet

| Token | Nilai | Peran |
|---|---|---|
| `--sc-canvas` | `#0a1222` | latar navy |
| `--sc-surface` | `#111c33` | kartu |
| `--surface-2` | `#18264a` | permukaan terangkat |
| `--sc-ink` | `#eef2f8` | teks utama |
| `--sc-ink-soft` | `#a9b6cc` | teks sekunder |
| `--sc-accent` | `#5b9dff` | satu aksen biru |
| `--sc-accent-ink` | `#06101f` | teks di atas aksen |
| `--tile` | `#f3f6fb` | ubin terang untuk logo JPG |

Glass (backdrop-filter) hanya di navbar pill.

## Font

Google Fonts dengan fallback sistem: **Bricolage Grotesque** (display) dan **Instrument Sans** (teks). Skala tipe dan spacing memakai token engine (`--sc-t-*`, `--sc-1..11`).

## Motion plan

Token: `--d-fast 160ms`, `--d-base 240ms`, `--d-slow 400ms`, easing `cubic-bezier(0.23, 1, 0.32, 1)`. Transisi 620 ms bawaan engine ditimpa ke `--d-slow` di CSS project.

| Bagian | Gerak |
|---|---|
| Hero | stagger teks (`data-sc-in` + `data-sc-stagger`), kartu foto masuk di wrapper luar, tilt di elemen dalam (`data-sc-tilt`), parallax ringan di latar grid (`data-sc-act="flow"` + `data-sc-parallax`) |
| Scroll | reveal berbeda untuk judul, teks, dan kartu lewat nilai `data-sc-in` |
| Navbar | pill mengecil (transform) dan lapisan latar padat menebal (opacity); indikator link aktif meluncur (translateX + scaleX); section aktif lewat IntersectionObserver |
| About | count-up `data-sc-count` di luar act; garis timeline `scaleY` dari `--sc-p` |
| Tab | indikator meluncur; panel fade dan geser pendek |
| Detail projek | FLIP bingkai gambar dari kartu ke detail dan sebaliknya; buka langsung lewat hash memakai fade |
| Lightbox | buka dari posisi thumbnail, tutup kembali ke sana, ganti gambar dengan slide |
| Hover | kartu terangkat tipis, logo tech bergeser, tombol tertekan saat `:active` |
| Reduced motion | fade singkat atau tampil langsung; tanpa parallax, tilt, count-up bergerak, FLIP |

Hanya `transform` dan `opacity` yang dianimasikan.

## TODO

- TODO: `og:url` absolut (domain belum ada).
- TODO: `og:image` absolut (butuh domain dan gambar pratinjau).
- TODO: selisih jumlah tabel MONY. Migrations di repo membuat 16 tabel, pemilik menyebut 17. Website menampilkan "17 tabel" sesuai data pemilik; perlu dikonfirmasi.
- TODO: uji di perangkat HP asli (tidak bisa diverifikasi dari headless Chrome).
