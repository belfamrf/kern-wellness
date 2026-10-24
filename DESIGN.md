---
name: KERN
description: Strength, measured. A quiet Copenhagen strength studio, set like a clinical editorial.
colors:
  bone: "#f3f0e8"
  paper: "#fbf9f4"
  ink: "#1b1d19"
  ink-soft: "#555b50"
  moss: "#4a5545"
  line: "#d8d2c4"
  signal: "#d8f36b"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.5rem, 8vw, 6.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.625rem"
    fontWeight: 500
    lineHeight: 1.15
  lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.08em"
  data:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter: "20px"
  gutter-wide: "40px"
  section: "88px"
  section-wide: "128px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.none}"
    padding: "12px"
  program-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderTop: "1px solid {colors.line}"
    padding: "28px 0"
  screen-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.none}"
    padding: "16px"
  screen-option-selected:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
  photo-frame:
    rounded: "{rounded.none}"
    border: "1px solid {colors.line}"
---

# Design System: KERN

## Overview

**Creative North Star: "The Measured Studio"**

Halaman ini adalah ruang latihan yang tenang: dinding bone, teks ink, bidang moss, dan satu potong lime yang menandai tindakan berikutnya. Ketenangannya dipinjam dari klinik fisioterapi; ketelitiannya dipinjam dari jurnal latihan editorial. Konten disusun di grid 12 kolom dengan garis rambut dan margin lebar. Angka diperlakukan sebagai hasil pengukuran, bukan hiasan.

Foto memakai cahaya alami dan tubuh nyata: orang yang bergerak, bukan orang yang berpose di depan cermin. Tidak ada neon, tidak ada teriakan, tidak ada before/after. Satu-satunya objek yang "berbicara" adalah **Movement screen**: empat pertanyaan tenang yang berakhir dengan rekomendasi tertulis, seperti resep latihan.

**Key Characteristics:**
- Bone sebagai tanah halaman, ink sebagai teks, moss untuk bidang gelap, lime hanya sebagai penanda tindakan.
- Fraunces untuk judul kalimat; Manrope untuk body, label, harga, dan form.
- Permukaan datar: garis 1px, tanpa shadow, tanpa glass, tanpa gradient.
- Penomoran editorial 01–04, margin lebar, label kecil, dan catatan kaki.
- Satu momen interaktif; sisanya sengaja dibiarkan tenang.

## Colors

| Token | Hex | Peran |
|---|---|---|
| **Bone** | `#f3f0e8` | Latar halaman |
| **Paper** | `#fbf9f4` | Permukaan form, kartu screen, bidang terangkat tipis |
| **Ink** | `#1b1d19` | Teks utama, tombol outline, wordmark |
| **Ink Soft** | `#555b50` | Teks sekunder, caption, metadata |
| **Moss** | `#4a5545` | Bidang gelap (Studio, footer), teks bone di atasnya |
| **Line** | `#d8d2c4` | Garis 1px, batas field, pemisah |
| **Signal** | `#d8f36b` | Tombol utama, opsi screen terpilih, satu highlight |

**Kontras:** ink di bone ±14.8:1 · ink-soft di bone ±6.4:1 · moss di bone ±7.2:1 · lime di ink ±12.9:1. **Lime tidak pernah dipakai sebagai teks di bone** (±1.4:1).

### Named Rules

**The One Marker Rule.** Lime adalah spidol, bukan suasana. Ia hanya muncul sebagai isi tombol utama, latar opsi screen terpilih, dan satu highlight per bagian. Maksimal sekitar 10% dari satu viewport. Tidak pernah menjadi latar satu section penuh, tidak pernah menjadi teks di bone.

**The Ink On Bone Rule.** Teks isi selalu ink di bone/paper. Di atas moss, teks menjadi bone. Tidak ada teks abu-abu di atas foto.

**The Hairline Rule.** Pemisahan memakai garis 1px `line`, bukan shadow. Garis tidak pernah lebih gelap dari 20% ink.

**The No Pure Black Rule.** Gunakan ink `#1b1d19`, bukan `#000`; gunakan moss `#4a5545`, bukan hitam pekat.

## Typography

**Display Font:** Fraunces (variable, weight 400–600)
**Body Font:** Manrope (400–700)

**Character:** Fraunces memberi rasa peduli dan ketenangan editorial; Manrope menjaga form, harga, dan label tetap lugas dan mudah dibaca. Dua wajah, dua tugas.

### Hierarchy

- **Display** (Fraunces 500, `clamp(3.5rem, 8vw, 6.5rem)`, 0.98, -0.02em): hanya hero, sentence case.
- **Headline** (Fraunces 500, `clamp(2.25rem, 5vw, 3.75rem)`, 1.02): judul bagian.
- **Title** (Fraunces 500, 1.625rem, 1.15): nama program, judul kartu hasil.
- **Lead** (Manrope 400, 1.1875rem, 1.6, maks 34ch): paragraf di bawah judul.
- **Body** (Manrope 400, 1rem, 1.65, maks 62ch): isi, FAQ, catatan.
- **Label** (Manrope 600, 0.75rem, uppercase, 0.08em): label bagian, metadata foto, status.
- **Data** (Manrope 600, 0.875rem, tabular): harga, minggu, jumlah sesi, nomor progres.

### Named Rules

**The Serif Speaks, Sans Measures Rule.** Fraunces hanya untuk judul dan kutipan. Semua UI, label, harga, angka, dan isi form memakai Manrope.

**The Sentence Case Rule.** Judul selalu sentence case. Huruf kapital penuh hanya untuk label pendek (maksimal empat kata).

**The Numbers Are Data Rule.** Harga, durasi, dan jumlah sesi memakai Manrope dengan angka tabular. Nomor bagian (01–08) juga Manrope, bukan Fraunces.

**No Third Face.** Tidak ada jenis huruf ketiga, termasuk font aksen untuk tanda tangan.

## Layout

Grid 12 kolom, lebar maksimum **1200px**, gutter 20px di ponsel dan 40px dari 1024px. Jarak antar-section 88px, 128px di layar lebar.

- **Hero:** 7 kolom teks, 5 kolom foto. Di ponsel: teks dulu, foto kedua. Tinggi minimal 80svh, tetapi tidak dipaksa memenuhi layar.
- **Section index:** nomor kecil dan label bagian berada di margin kiri (2 kolom), judul dan isi di 8–9 kolom. Di ponsel, index menjadi label di atas judul.
- **Programs:** baris, bukan kartu. Setiap baris: nomor · nama + deskripsi · yang termasuk · harga · panah. Garis 1px di atas dan bawah. Di ponsel menjadi blok bertumpuk.
- **Method:** empat fase dalam satu garis horizontal dengan titik; di ponsel menjadi timeline vertikal.
- **Studio:** bidang moss penuh, dua foto, tiga prinsip singkat.
- **Header:** 72px, solid bone, garis bawah 1px, tanpa blur. Wordmark kiri, navigasi tengah, tombol kanan.
- **Lebar teks:** lead maks 34ch, body maks 62ch. Tidak ada paragraf selebar layar.

## Elevation & Depth

**The Flat Room Rule.** Tidak ada box-shadow, glass, blur panel, atau gradient. Kedalaman datang dari perbedaan bone/paper/moss, crop foto, dan label kecil yang menumpuk di tepi foto. Satu-satunya "bayangan" adalah garis 1px.

## Shapes

Sudut **0px** untuk foto, tombol, input, kartu screen, dan panel. Garis 1px. Lingkaran hanya untuk titik progres, radio, dan titik ukur pada logo. Highlight lime berbentuk persegi panjang di belakang satu kata, seperti sapuan spidol, bukan pil.

## Components

### Header

Tinggi 72px di desktop dan 64px di bawah 480px. Wordmark SVG di kiri; tautan Programs, Screen, Method, Studio, FAQ; tombol **Book intro** di kanan. Di bawah 801px nav diganti tombol **Menu** 44px di samping CTA. Panel menu selebar layar dengan latar bone dan tautan 56px; ini disclosure, bukan modal — scroll dan fokus tidak dikunci. Menu menutup lewat Escape (fokus kembali ke tombol), klik di luar, pemilihan tautan, atau saat layar melebar; setelah memilih tautan, fokus pindah ke heading tujuan. Tidak ada tautan sosial di header.

### Buttons

- **Primary:** lime fill, ink text, 48px, sudut 0, padding 22px. Hover: ink fill, bone text. Active: turun 1px.
- **Outline:** transparan, border 1px ink, ink text. Hover: ink fill, bone text.
- **Text link:** ink, underline 1px dengan offset 4px. Hover: garis bawah menjadi lime setebal 4px (marker), teks tetap ink.
- **Focus:** outline 2px ink, offset 4px; di atas moss memakai lime. Selalu terlihat, tidak pernah `outline: none`.

### Movement Screen (signature)

Bagian **"Find your starting point"**. Satu kartu paper dengan border 1px, lebar maks 720px.

- Empat pertanyaan, satu per layar: (1) berapa lama duduk, (2) bagian yang membatasi, (3) pengalaman latihan, (4) tujuan 12 minggu.
- Progres berbentuk empat bar tipis berwarna ink (bukan lime, supaya kontras bar tetap ≥3:1); label "01 / 04" dalam Manrope tabular.
- Opsi berupa tombol penuh selebar kartu, border 1px, teks kiri. Opsi terpilih menjadi lime dengan ink; bisa diganti sebelum menekan **Continue**.
- Ada **Back**; jawaban tersimpan selama sesi. Tidak ada email gate, tidak ada hitungan mundur.
- Hasil: judul rekomendasi (Foundation 1-on-1 / Small Group / Start with an intro), dua kalimat alasan, tiga poin "what happens next", lalu CTA **Book this intro** yang menggulir ke form dan memilih format terkait. Ada **Start over**.
- Catatan kaki: *"A training preference guide, not a medical assessment."*
- Fokus otomatis pindah ke judul hasil; hasil diumumkan lewat `aria-live="polite"`. Transisi 200ms; reduced motion langsung.

### Program Row

Garis 1px atas; isi: nomor `01`, nama program (Fraunces), satu kalimat, daftar singkat, harga "from €960" (Manrope tabular), panah. Hover: nomor mendapat sapuan lime di belakangnya. Seluruh baris bisa diklik, tetapi hanya satu tautan utama yang fokus-able; panah adalah ikon dekoratif.

### Method Timeline

Empat fase: **01 Assess** (minggu 1–2), **02 Build** (3–6), **03 Load** (7–10), **04 Review** (11–12). Garis 1px dengan titik. Statis, tanpa animasi masuk dan tidak bisa digeser. Ini pinjaman disiplin struktur dari arah B, bukan interaksi kedua.

### Studio

Bidang moss penuh, teks bone. Tiga prinsip singkat: *Small groups. Clear plans. No noise.* Foto natural light belum dipasang; sampai itu selesai bagian ini tetap tipografis. Lokasi ditulis **Nørrebro, Copenhagen**; tidak ada alamat atau jam buka yang dikarang.

### FAQ

`<details>`/`<summary>` native, garis 1px, ikon plus/minus SVG inline. Lima pertanyaan: pemula, pakaian, ukuran grup, sesi terlewat, dan apakah ini rehab (jawab: bukan; untuk nyeri atau cedera, temui klinisi).

### Booking Form

Form di atas bone, field paper dengan border 1px. Dua kolom di desktop: nama/email; lalu goal (select), format (radio: Foundation / Small group / Not sure), pesan. Label di atas, error di bawah field dengan `aria-describedby`, status sukses di `aria-live`. Tombol submit lime. Catatan: *"Free 30-minute intro. No obligation."* dan *"Concept project — demo form."* Tidak ada checkbox marketing.

### Footer

Latar ink, teks bone. Simbol KERN, baris kejujuran **"KERN is a concept project. Not a real business."**, kredit **"Design & build by Belfa Muhammad"** dengan tautan ke `https://www.belfamuhammad.com`, dan tautan kembali ke atas. Tidak ada ikon sosial sampai ada URL asli.

## Motion

- Ease tunggal: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Durasi: 180–200ms untuk perubahan state UI (hover, menu, status). Tidak ada durasi 500/600ms di v1.
- Tidak ada scroll reveal; seluruh konten langsung terlihat saat halaman dimuat.
- Tidak ada parallax, scroll hijacking, Lenis, cursor effect, atau animasi loop.
- Hover hanya mengubah warna/garis; tidak ada scale pada foto.
- `prefers-reduced-motion`: semua transisi menjadi instan, tanpa translasi.
- Ikon menu berubah garis → X; hanya transform 180ms, tanpa animasi panel.

## Accessibility

- Target WCAG 2.2 AA.
- Satu `h1`, urutan heading benar, landmark `header/nav/main/footer`, skip link.
- Fokus selalu terlihat: 2px ink offset 4px; lime di atas moss.
- Menu mobile: tombol `aria-expanded`/`aria-controls`, target 44px, tautan 56px, Escape mengembalikan fokus ke tombol, Tab masuk ke panel, klik di luar dan pelebaran layar menutup panel.
- Movement screen memakai `button`, `fieldset/legend`, progres yang diumumkan, dan hasil `aria-live`.
- Form: label eksplisit, error tekstual, bukan warna saja, target ≥44px.
- Alt text deskriptif; foto dekoratif `alt=""`; simbol hero memakai `role="img"` dan label.
- Tidak ada teks lime di bone; kontras dicek sebelum build.
- Hormati `prefers-reduced-motion` dan zoom 200%.

## Performance

- Target Lighthouse mobile ≥95 (Performance, Accessibility, Best Practices, SEO).
- LCP <2.5s, CLS <0.1, INP <200ms.
- Font via `next/font`, subset latin; hanya weight yang dipakai.
- `next/image` dengan `sizes`; maksimal dua foto besar per layar.
- Server component sebagai default. Client component hanya untuk menu, movement screen, dan form.
- Tanpa Motion/Lenis di v1; CSS transition + state React sudah cukup. Tambah library hanya jika interaksi tidak bisa rapi tanpa itu.
- Ikon memakai SVG inline; tidak menambah paket ikon.

## Publication

- URL produksi: `https://kern.belfamuhammad.com`, subdomain dari `belfamuhammad.com`, aktif dan terverifikasi 24 Oktober 2026. DNS tetap di Domainesia: CNAME `kern` → `3620ed26aa017997.vercel-dns-017.com`; jangan ubah nameserver.
- Project Vercel `kern-wellness` terhubung ke repo GitHub. URL `kern-wellness.vercel.app` memakai Vercel Authentication (hanya preview); proteksi memakai `all_except_custom_domains`, jadi domain kustom publik setelah DNS aktif.
- `metadataBase` dan canonical memakai URL itu; `sitemap.xml` dan `robots.txt` dibuat dari konstanta di `src/lib/site.ts`. Satu halaman, satu URL di sitemap.
- OG image 1200×630 di `/brand/kern-og.png`: latar ink, wordmark bone, headline Fraunces, titik lime. Dibuat oleh `npm run og` (`scripts/build-og.mjs`) memakai font brand dari `logo-kit/fonts/`; jalankan ulang bila teks atau URL di kartu berubah. Twitter memakai `summary_large_image`.
- Data terstruktur hanya `WebSite` + kreator. Tidak ada `LocalBusiness`, alamat, telepon, atau harga di schema karena KERN adalah concept project.
- Bila URL berubah, cukup ubah `siteUrl` di `src/lib/site.ts` lalu `npm run og`; canonical, sitemap, robots, dan og:url ikut menyesuaikan.

## Content Rules

- Suara: tenang, lugas, spesifik. Kalimat pendek. Tanpa "transform", "unlock", "journey", "best version".
- Gunakan "training", "strength", "movement". Hindari "treatment", "rehab", "cure".
- Tidak ada testimoni, logo klien, angka pencapaian, nama coach, atau kredensial karangan.
- Harga diberi label ilustratif; gerbang kepercayaan tetap jujur.
- Jelaskan sesi intro: 30 menit, movement screen, tanpa kewajiban.
- Selalu tampilkan disclaimer concept project di footer.

## References

Resep arah **The Quiet Clinic** (maksimal tiga pengaruh):

- **MATE the Label — 50%.** Cahaya alami, foto tubuh yang netral dan tidak intimidasikan, tempo yang tenang. Tidak diambil: styling fashion dan kesan lifestyle-only.
- **Parloa — 30%.** Bahasa penawaran yang lugas, hierarki jelas, CTA yang tidak ambigu. Tidak diambil: kepadatan SaaS dan gradient.
- **Lando Norris — 20%.** Sentuhan personal dan anotasi manusiawi. Tidak diambil: persona selebriti dan nuansa balap.
- **Pinjaman struktur dari arah B (Iron Index).** Penomoran editorial dan fase 12 minggu. Tidak diambil: gelap, neon, atau agresi gym.

Aturan: ambil prinsip, bukan aset; jangan menyalin layout 1:1; catat sumber foto di `CREDITS.md`.

## Logo Brief

- **Wordmark:** "KERN" uppercase, digambar khusus, tracking agak lebar, tegas tetapi tenang. Kesan: klinis-editorial, bukan sporty.
- **Monogram:** huruf K dari satu batang vertikal dan dua garis yang bertemu di sudut terukur; satu titik lime 6px di titik temu sebagai "measure point". Harus terbaca di 16px.
- **Varian:** ink di bone, bone di ink, satu warna hitam, monogram, lockup horizontal, favicon 32/16.
- **Berkas:** SVG final, clear space, ukuran minimum, dan contoh penerapan.
- **Hindari:** dumbbell, kettlebell, heksagon, petir, daun, garis pulse, perisai, gradient, dan efek 3D.
- Jika memakai skill/repo logo: hasil akhir wajib vektor; periksa artefacts dan keterbacaan di ukuran kecil.

## Do's and Don'ts

### Do

- **Do** biarkan bone dan ruang kosong bekerja; garis 1px sudah cukup memisahkan.
- **Do** pakai Fraunces untuk judul dan Manrope untuk data/UI.
- **Do** pakai lime hanya untuk aksi, opsi terpilih, dan satu highlight.
- **Do** pakai foto cahaya alami dengan tubuh yang bergerak.
- **Do** tandai concept project dan harga ilustratif.
- **Do** jaga satu interaksi utama: Movement screen, dan buat dapat diakses keyboard.

### Don't

- **Don't** memakai estetika gym gelap, neon, gradient, glass, atau shadow.
- **Don't** memakai judul huruf kapital penuh atau font ketiga.
- **Don't** menambah testimoni, statistik, bio coach, atau klaim medis.
- **Don't** memasang tautan Instagram mati atau CTA palsu.
- **Don't** menambah scroll hijacking atau library animasi berat.
- **Don't** menaruh teks di atas foto yang ramai.
