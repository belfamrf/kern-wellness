# MEMORY: progres portofolio

Diperbarui: 23 Oktober 2026. Isinya keadaan folder ini saat ini, supaya sesi berikutnya tidak mengulang pekerjaan.

## Status per folder

| Folder | Isi | Status |
|---|---|---|
| `00-website-pribadi` | Website portofolio Belfa (Next.js) | **Selesai dan online** |
| `01-wellness` | Proyek demo 1 (personal training, dengan logo) | **Brief + design system selesai**: Next.js 16 + Tailwind 4, git lokal, commit `2b41897`; belum ada repo GitHub, menunggu logo |
| `02-jasa-lokal` | Proyek demo 2 (kontraktor/klinik) | **Kosong**, belum ada git |
| `03-hospitality` | Proyek demo 3 (villa/restoran) | **Kosong**, belum ada git |
| `_referensi` | Analisis referensi desain + teks profil Upwork | Selesai, siap dipakai |

## 00-website-pribadi (website utama)

- **Live:** https://www.belfamuhammad.com (HTTPS, domain sendiri)
- **Repo:** https://github.com/belfamrf/belfamuhammad-website (public, branch `main`, commit terakhir `b9b9614`, sinkron dengan GitHub, working tree bersih)
- **Stack:** Next.js 16 (App Router) + Tailwind 4, Motion, Lenis, Lucide, font Archivo.
- **Isi halaman (satu halaman):** hero "Premium websites, designed by a marketer." + meja kartu proyek, Process, Pricing, About, Contact, Footer.
- **Elemen khas:** meja kerja gelap dengan kartu proyek kertas yang bisa dibalik (sisi belakang = brief marketing) dan bisa digeser di layar lebar.
- **Gaya:** charcoal `#1c1b19`, kertas `#f2f0eb`, satu aksen oranye `#ff5b1f`; judul Archivo kondensasi kapital. Panduan lengkap di `DESIGN.md`.
- **Lighthouse (live):** mobile **98 / 100 / 100 / 100**, desktop **100 / 100 / 100 / 100** (Performance, Accessibility, Best Practices, SEO).
- **Kontak:** form ke Formspree (endpoint ada di `.env.local`, tidak masuk git), email tujuan belfamrf39@gmail.com. Tombol LinkedIn aktif.
- **Google Analytics:** sudah aktif di live dengan ID `G-3FGCCYW7LE` (dipasang lewat environment variable Vercel, bukan di kode).
- **SEO:** metadata, gambar share (OG), `sitemap.xml`, `robots.txt`, schema.org (Person + ProfessionalService), ikon BM.
- **Foto:** `public/belfa.jpg` (foto studio Belfa, hitam-putih). Sumber dicatat di `CREDITS.md`.
- **Dokumen proyek:** `PRODUCT.md` (fakta & batasan), `BRIEF.md` (brief awal), `DESIGN.md` (sistem desain), `CASE-STUDY.md` (studi kasus), `CREDITS.md`.
- **Skor review Impeccable:** 24/32, verdict ship. Semua temuan P0/P1 sudah diperbaiki.

### Keputusan yang sudah dikunci

- Nama tampil **Belfa Muhammad**; posisi "web designer yang paham brand & marketing", netral industri.
- Kalimat posisi: "Based in Indonesia, working with clients worldwide."
- Harga: website mulai **$900**, brand identity mulai **$600**; paket gabungan lewat email.
- Ketentuan: 2–3 minggu, dua kali revisi per tahap, bayar 50/50, file jadi milik klien setelah lunas, balasan maksimal dua hari kerja.
- Tidak boleh ada testimoni, logo klien, angka, nama perusahaan, atau jabatan yang dikarang. Tiga demo berlabel **concept project**.
- AI ditawarkan sebagai tambahan di dalam proyek website (bukan layanan ketiga).
- Link Upwork **belum** dipasang di website sampai profil Upwork dirapikan.

## 01-wellness (proyek aktif)

- **Status:** scaffold Next.js **16.4.3** (App Router, folder `src/`), React **19.3**, Tailwind **4**, TypeScript, ESLint. Git lokal branch `main`, commit awal `2b41897`. Dokumen `BRIEF.md` + `DESIGN.md` sudah ada.
- **Brief dikunci 23 Oktober 2026:** brand **KERN**, studio strength & mobility di **Copenhagen**; target pekerja sibuk **30–50**; layanan 1-on-1 + small group (maks 4) dan program fondasi **12 minggu**; website **bahasa Inggris**; tujuan utama **booking sesi intro gratis**; harga ilustratif ditampilkan sebagai "from"; kontak lewat form Formspree (Instagram ditunda sampai ada URL asli); foto stok berlisensi dicatat di `CREDITS.md`; semua demo berlabel **concept project**, tanpa testimoni/angka karangan.
- **Arah desain dikunci:** **The Quiet Clinic** (arah A) dengan disiplin struktur dari arah B. Palet bone `#f3f0e8` / ink `#1b1d19` / moss `#4a5545` + aksen lime `#d8f36b`; huruf **Fraunces + Manrope**; elemen khas **Movement screen** 4 pertanyaan.
- **Logo:** wordmark + monogram; **sekarang waktunya**, menunggu link skill/repo logo dari Belfa. Hasil akhir harus SVG.
- **Referensi:** `C:\Users\USER\Documents\portofolio\_referensi\ANALISIS-REFERENSI.md` (lokasinya di folder `portofolio`, bukan di `Proyek_Klien`). Untuk wellness: **MATE the Label, Parloa, landonorris.com** — dipakai sebagai pecahan prinsip (foto, kejelasan bisnis, sentuhan personal), bukan ditiru.
- **Belum ada:** logo, konten final, foto, repo GitHub.
- **Langkah berikutnya:** pasang skill/repo logo, buat logo SVG, lalu bangun halaman.

## _referensi

- `ANALISIS-REFERENSI.md`: pola desain dari ~20 website referensi (gelap, premium, satu aksen berani, satu elemen interaktif yang diingat).
- `UPWORK-PROFIL.md`: judul, overview, 15 skill, rate **$30/jam**, dan 3 item portfolio siap tempel. Belum diterapkan ke profil Upwork.

## Yang belum selesai

1. **Tiga proyek demo belum dibangun.** Kartu di website pribadi saat ini hanya kartu, belum bisa diklik ke halaman studi kasus.
2. **Profil Upwork belum dioptimalkan** (judul, overview, skill, rate, foto, verifikasi identitas masih tugas Belfa).
3. **Form kontak belum diuji kirim sungguhan** setelah live; perlu satu pesan uji untuk memastikan masuk ke email.
4. **Halaman studi kasus** untuk tiap demo belum ada (direncanakan di `BRIEF.md`: satu halaman per proyek).
5. **`inject.py` di akar folder** bukan bagian portofolio: skrip installer OpenAgentic yang mengubah settings Claude Code di luar folder ini. Jangan dijalankan; sebaiknya dipindah atau dihapus setelah minta izin.

## Langkah berikutnya (urutan rekomendasi)

1. Uji form kontak sekali, cek Google Analytics realtime.
2. Rapikan profil Upwork pakai `_referensi/UPWORK-PROFIL.md`, lalu pasang link Upwork di website.
3. Mulai **01-wellness**: kumpulkan brief + brand brief sekaligus, tawarkan 3 arah desain, pilih satu, lalu bangun logo + website (repo git + GitHub sendiri).
4. Lanjut **02-jasa-lokal**, lalu **03-hospitality**.
5. Setelah demo jadi: buat halaman studi kasus di website pribadi, hubungkan kartu ke halaman itu, perbarui `CASE-STUDY.md`, ulang Lighthouse dan review.
6. Ganti foto/teks mana pun yang berubah, lalu commit dan push tiap bagian besar.

## Perintah harian

```powershell
cd 00-website-pribadi
npm run dev     # lihat website di http://localhost:3000
npm run lint    # cek aturan kode
npm run build   # cek versi siap online
```
