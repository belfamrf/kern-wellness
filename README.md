# KERN

Situs konsep untuk studio strength & mobility fiktif di Nørrebro, Copenhagen. Bahasa situs Inggris; dokumen proyek Indonesia. KERN **bukan bisnis nyata** dan formulirnya tidak mengirim booking sungguhan.

## Stack

Next.js 16 (App Router, folder `src/`), React 19, Tailwind 4, TypeScript, ESLint. Font Fraunces + Manrope lewat `next/font`.

## Perintah

```bash
npm run dev      # pengembangan di http://localhost:3000
npm run lint     # aturan kode
npm run build    # build produksi
npm run start    # jalankan hasil build
npm run og       # render ulang kartu OG 1200x630
```

## Struktur singkat

- `src/app/page.tsx` — seluruh halaman (section 01–07).
- `src/components/movement-screen.tsx` — movement screen 4 pertanyaan.
- `src/components/booking-form.tsx` — form booking demo + validasi.
- `src/components/mobile-menu.tsx` — menu di bawah 801px.
- `src/lib/site.ts` — URL produksi dan metadata yang dipakai bersama.
- `src/app/sitemap.ts`, `src/app/robots.ts` — SEO.
- `logo-kit/` — master logo, ekspor, presentasi, dan generator aset.
- `public/brand/` — aset yang dipakai situs (favicon, ikon, OG, wordmark).

## Form booking

Form berjalan dalam mode demo tanpa konfigurasi tambahan. Untuk mengaktifkan pengiriman sungguhan, isi `NEXT_PUBLIC_FORMSPREE_ENDPOINT` di `.env.local` dengan endpoint Formspree. Variabel ini publik dan tidak boleh berisi rahasia. Jangan mengisi endpoint sebelum ada penerima yang disetujui.

## Deploy

Repo: <https://github.com/belfamrf/kern-wellness>. Project Vercel: `kern-wellness` (scope `belfas-projects-e2cecb6e`), sudah terhubung ke repo sehingga push ke `main` memicu deploy produksi.

Deploy ulang dari folder ini:

```bash
npx vercel --prod
```

`https://kern-wellness.vercel.app` memakai Vercel Authentication (hanya untuk preview). Domain kustom tidak terkena proteksi itu.

## Domain

Domain `https://kern.belfamuhammad.com` sudah ditambahkan ke project dan menunggu DNS. Di Domainesia, tambahkan:

| Type | Name | Value |
|---|---|---|
| CNAME | `kern` | `3620ed26aa017997.vercel-dns-017.com` |

Jangan ubah nameserver. Setelah record aktif, jalankan `npx vercel domains verify kern.belfamuhammad.com --strict`. Ubah URL hanya di `src/lib/site.ts`, lalu `npm run og` bila teks kartu berubah.

## Aset logo

Semua SVG/PNG/ICO/manifest dibuat oleh `node logo-kit/build-logos.mjs`. Jangan mengedit hasil ekspor secara manual. Panduan ada di `logo-kit/README.md` dan `logo-kit/brand-guidelines.md`.

## Dokumen

- `BRIEF.md` — brief dan batasan proyek.
- `DESIGN.md` — sistem desain dan aturan implementasi.
- `MEMORY.md` — status pekerjaan dan langkah berikutnya.
- `CREDITS.md` — belum ada; wajib dibuat saat foto berlisensi dipasang.

## Batasan

Tanpa testimoni, angka pencapaian, nama coach, alamat, telepon, atau jam buka karangan. Harga di situs adalah ilustrasi. Semua label concept project harus tetap terlihat.
