# Brief: KERN — concept project 01-wellness

Disusun: 23 Oktober 2026. Dokumen ini mengunci strategi sebelum desain dan kode.

## Ringkasan

| Hal | Keputusan |
|---|---|
| Proyek | Demo portofolio **01-wellness** |
| Status | **Concept project**, bukan bisnis nyata |
| Nama | **KERN** |
| Kategori | Studio strength & mobility |
| Lokasi | Nørrebro, Copenhagen (fiktif) |
| Bahasa | English |
| Target | Pekerja sibuk usia 30–50, pemula atau yang kembali berlatih |
| Janji | **"Strength, measured."** |
| Layanan | 1-on-1, small group maksimal 4 orang, program fondasi 12 minggu |
| Tindakan utama | **Book a free intro** lewat form |
| Harga | Ilustratif: Foundation €1,920 · Small Group €960 · Single session €95 |
| Label kejujuran | "Concept project" di footer dan catatan form |

## Brand brief

| Hal | Isi |
|---|---|
| Target tamu | Profesional 30–50 yang duduk lama, ingin kuat dan bergerak tanpa nyeri, tapi tidak cocok dengan gym ramai |
| Pesan utama | Latihan dimulai dari pengukuran, bukan tebakan |
| Gaya bahasa | Tenang, lugas, hangat, tanpa hype dan tanpa klaim medis |
| Alasan memilih | Sesi pertama adalah assessment · kelompok maksimal 4 · program 12 minggu dengan review tiap 4 minggu · ruang latihan yang tenang |
| Diferensiasi | Bukan gym, bukan klinik. Tempat latihan yang terukur dan manusiawi |
| Nada | "Quiet confidence" — percaya diri tanpa berteriak |

## Bentuk website

Satu halaman panjang, navigasi anchor:

1. Header + hero
2. Prinsip: Assess / Build / Sustain
3. Programs: Foundation, Small Group, Maintenance
4. **Movement screen** (elemen khas)
5. Method: 4 fase dalam 12 minggu
6. Studio
7. FAQ
8. Booking
9. Footer

## Aturan konten

- Tidak ada testimoni, logo klien, angka pencapaian, nama coach, atau kredensial yang dikarang.
- Tidak ada klaim medis. Movement screen adalah panduan preferensi latihan, bukan diagnosis.
- Tidak ada scarcity palsu ("hanya 2 slot tersisa") atau before/after.
- Harga diberi label ilustratif di halaman, bukan ditulis sebagai penawaran nyata.
- Foto memakai stok berlisensi; sumber dicatat di `CREDITS.md`.
- Seluruh situs ditandai **concept project** di footer.

## Kontak

- Form booking: nama, email, tujuan, format yang diminati, pesan.
- Pengiriman lewat **Formspree** (endpoint disimpan di environment variable, tidak masuk git).
- Sampai endpoint tersedia, form berjalan dalam mode demo yang jujur (tidak berpura-pura terkirim).
- Instagram **belum** dipasang sampai ada URL/handle yang benar; jangan membuat tautan mati.

## Batasan teknis

- Next.js 16 App Router, TypeScript, Tailwind 4, `src/`.
- Target Lighthouse mobile minimal **95** untuk Performance, Accessibility, Best Practices, SEO.
- WCAG 2.2 AA; hormati `prefers-reduced-motion`.
- Mobile-first; tanpa scroll hijacking.

## Keputusan yang sudah dikunci

- Arah desain: **The Quiet Clinic** (A), dengan disiplin struktur dan penomoran dari arah B.
- Warna: bone, ink, moss, satu aksen lime.
- Huruf: **Fraunces** (display) + **Manrope** (body/UI).
- Elemen khas: **Movement screen** 4 pertanyaan.
- Logo: wordmark + monogram, dibuat setelah `DESIGN.md`, memakai skill/repo logo dari Belfa.
- Repo GitHub terpisah; nama menunggu logo/brand final.

## Terbuka

- Endpoint Formspree untuk demo.
- Pilihan foto stok final saat build.
- Nama repo GitHub.
