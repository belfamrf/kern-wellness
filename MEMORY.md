# MEMORY: progres portofolio

Diperbarui: 24 Oktober 2026. Isinya keadaan folder ini saat ini, supaya sesi berikutnya tidak mengulang pekerjaan.

## Status penutupan — 24 Oktober 2026

Situs **live di https://kern.belfamuhammad.com**. Yang selesai hari ini:

- **Fondasi & desain:** font final, kit logo + presentasi, hero foto, tiga foto berlisensi, halaman `/credits`, `CREDITS.md`, grid Studio, dan detail tipografi.
- **Fitur:** movement screen 4 pertanyaan, form booking demo dengan validasi, menu mobile aksesibel, penomoran section 01–07.
- **Motion berbasis waktu:** `IntersectionObserver` (28px/650ms, stagger 70ms), foto clip-path 850ms, hero line mask/K draw/photo settle, bar progres header, garis Method desktop + mobile, transisi step screen. Reduced motion dan no-JS aman.
- **Publikasi:** metadata + canonical + OG 1200×630, sitemap (`/`, `/credits`), robots, `WebSite` JSON-LD, domain + HTTPS, Vercel terhubung GitHub.
- **Kualitas:** Lighthouse mobile **95 / 100 / 100 / 100**, CLS **0**; 320/375/768/1440 tanpa overflow; 720px (zoom 200%) aman; `/credits` canonical benar.
- **Kebersihan repo:** delapan file `kern-concept-*` dan folder `logo-renders/` dipindahkan ke `logo-kit/archive/` (dengan README arsip). Akar proyek bersih; aset produksi tetap di `logo-kit/exports/` dan `public/brand/`.
- **Commit:** `1af8add` (motion berbasis waktu) dan `77ec88a` (catatan live) sudah di-push; commit arsip menyusul pada penutupan ini.

**Besok:** copy review bahasa Inggris, review motion di HP pengguna (video di `Downloads\kern-motion`), endpoint Formspree bila penerima sudah disetujui, lalu studi kasus + tautan dari website pribadi.

## Pembaruan terakhir — 24 Oktober 2026 (motion terlihat)

- **Masalah:** pengguna merasa situs statis. Penyebab: reveal lama memakai CSS `animation-timeline: view()` yang tidak berjalan di iOS Safari dan “scrub” mengikuti scroll di Chrome; amplitudo 16px terlalu halus; hover tidak ada di HP; animasi hero selesai sebelum dilihat.
- **Perbaikan:** `src/components/page-motion.tsx` memakai IntersectionObserver berbasis waktu. Reveal 28px/650ms, stagger 70ms (maks 280ms); foto clip-path 8% + scale 1,05/850ms. Hero: dua baris headline dari mask (900ms), simbol K digambar (`clip-path`, 1000ms), foto settle 1400ms. Bar progres 2px ink di header. Garis Method tumbuh di desktop dan mobile.
- **Aman:** kelas reveal hanya ditambahkan JS; tanpa JS konten terlihat. Reduced motion tidak menambahkan kelas dan mematikan animasi. `scroll-progress` dekoratif, tidak mengubah layout.
- **QA:** opacity row 0,32 @80ms → 0,96 @340ms → 1 @940ms (benar-benar bergerak); progres 0,24 → 1; garis Method mencapai scale 1; 320/375/1440 tanpa overflow; reduced motion `rowPending=false`, hero animation none; Lighthouse **95 / 100 / 100 / 100**, CLS 0.
- **Video review:** `C:\Users\USER\Downloads\kern-motion\motion-1440.mp4` (10 s) dan `motion-375.mp4` (12 s), direkam dari build lokal via CDP + ffmpeg.
- **Deploy & live:** commit `1af8add` di-push; deployment Vercel READY. Dicek di domain asli pada 375px: `hero-line`, `scroll-progress`, dan `data-reveal` ada; reveal live bergerak 0,22 → 0,97 → 1; `/credits` 200.
- **Belum:** copy review (besok), review motion live oleh pengguna, endpoint Formspree, studi kasus.

## Pembaruan terakhir — 24 Oktober 2026 (foto, motion, credits)

- **Kritik pengguna:** halaman terasa basic, hanya teks dengan logo dan palet. Respons: tiga foto, motion CSS, dan detail visual yang masih sesuai arah “quiet clinic”.
- **Foto:** tiga foto Wikimedia Commons. Rings di hero; benches dan dumbbells di Studio. Lisensi CC BY-SA 3.0/4.0. File di-resize dan di-re-encode lewat `scripts/optimize-photos.mjs` (sharp) ke 1400–1800 px, q82 (282/219/298 KB). Perlakuan grayscale + `mix-blend-mode: luminosity` di atas moss, caption kecil, alt deskriptif.
- **Halaman `/credits`:** daftar tiga foto dengan fotografer, tautan Commons, lisensi, dan catatan modifikasi; canonical `/credits`; masuk sitemap; ditautkan dari footer dan bagian Studio. `CREDITS.md` juga dibuat.
- **Motion:** hero load stagger 40–340ms; scroll reveal CSS `animation-timeline: view()` (entry 0–55%); garis Method tumbuh; transisi step/result movement screen; panah program bergeser; foto Studio zoom 1.025 saat hover. Semua dimatikan pada `prefers-reduced-motion`.
- **Detail visual:** foto hero dengan overlay moss/ink dan skala tick di tepi, grid Studio asimetris, `text-wrap: balance/pretty`, link footer.
- **QA:** 320/375/768/1440 px tanpa overflow, semua foto termuat, header/menu tetap; reveal terdeteksi (`view()`, opacity 1 setelah scroll); 720 px setara zoom 200% tanpa overflow; reduced motion → animation `none`, scroll auto; `/credits` 375/1440 tanpa overflow dan canonical benar. Lighthouse mobile **95–96 / 100 / 100 / 100**; kontras kredit Studio sempat 4,49 dan diperbaiki. LCP simulasi 2,8–2,9 s, observed LCP 128 ms.
- **Deploy batch ini:** commit `6f60be4` (foto, motion, credits) dan `8d3709d` (animasi step screen) sudah di-push; dua deployment Vercel READY. Live dicek: homepage 200, tiga foto termuat, `/credits` 200 + canonical benar, sitemap berisi `/` dan `/credits`. Lighthouse live **96 / 100 / 100 / 100** (LCP 2,7 s, CLS 0).
- **Belum:** review visual pengguna terhadap foto/crop dan motion, copy review, pembersihan file sisa.

## Pembaruan terakhir — 24 Oktober 2026 (menu mobile & audit)

- **Menu mobile selesai** di `src/components/mobile-menu.tsx`: breakpoint 801px, panel bone selebar layar, 6 tautan 56px (termasuk Book intro), CTA header tetap terlihat. Ini disclosure, bukan modal: scroll tidak dikunci dan fokus tidak diperangkap. Tutup lewat Escape (fokus kembali ke tombol), klik di luar, pemilihan tautan, atau saat layar melebar. Setelah memilih tautan, fokus pindah ke heading tujuan.
- **Perbaikan aksesibilitas:** simbol hero kini `role="img"` (sebelumnya `aria-label` pada `div` tanpa role sehingga bisa diabaikan), dan `.button` memakai `white-space: nowrap` agar header 320px tidak pecah.
- **Metadata dirapikan:** `twitter:image:alt` + ukuran, `og:image:type`, author/creator menjadi **Belfa Muhammad** (bukan KERN, karena KERN fiktif), manifest mendapat `id`/`start_url`/`scope` dan em dash pada nama.
- **Kesalahan yang ditemukan dan diperbaiki:** `scripts/build-og.mjs` sempat rusak karena edit PowerShell `Get-Content`/`Set-Content` tanpa UTF-8; teks "Nørrebro" menjadi "NA,rrebro" dan "·" menjadi karakter rusak di kartu OG. Skrip ditulis ulang UTF-8, kartu dirender ulang, dan teks diverifikasi lewat DOM (`ø` dan `·` ada, tanpa U+FFFD).
- **Verifikasi:** lint/build lolos. CDP menguji 320/375/414/768/800/801/1440 px: tanpa overflow horizontal, header tidak tumpang tindih. Menu diuji buka/tutup, Escape, Tab ke tautan pertama, klik tautan (fokus ke H2), klik luar, dan resize; tanpa exception console. Screenshot di `%TEMP%/opencode/kern-menu/{375-closed,375-open,768-open,1440-closed}.png`.
- **Docs drift diperbaiki:** `DESIGN.md` sebelumnya menyebut breakpoint 768px, focus trap, reveal 500/600ms, dua foto studio, dan nav footer yang tidak ada. Sekarang disesuaikan dengan implementasi. README default create-next-app diganti README proyek.
- **Repo & commit:** commit `541ad4e` (“feat: build KERN concept site”, 117 file) sudah di-push ke repo publik **https://github.com/belfamrf/kern-wellness**, branch `main` sinkron. Delapan file konsep di akar dan `logo-renders/` saat itu tidak di-commit; pada penutupan 24 Oktober keduanya dipindahkan ke `logo-kit/archive/`.
- **Deploy produksi selesai:** percobaan `--temporary` ternyata membuat project `01-wellness` dan dua deployment; project itu saya rename menjadi `kern-wellness` (scope `belfas-projects-e2cecb6e`). Deployment terbaru `dpl_8veNffg6jmbhd9Tc5usixMNcrBUJ` READY. `https://kern-wellness.vercel.app` aktif tetapi terlindungi Vercel Authentication (hanya untuk preview); alias lama `01-wellness.vercel.app` sudah dihapus. Repo GitHub sudah terhubung untuk auto-deploy.
- **Domain menunggu DNS:** `kern.belfamuhammad.com` sudah ditambahkan ke project. Record wajib: **CNAME `kern` → `3620ed26aa017997.vercel-dns-017.com`**. `vercel domains verify` masih `invalid-configuration`. Proteksi SSO memakai `all_except_custom_domains`, jadi domain kustom akan publik tanpa login setelah record aktif.
- **Domain aktif dan terverifikasi:** record CNAME sudah ditambahkan; `vercel domains verify --strict` → `configured_correctly`. HTTP 308 → HTTPS, homepage 200 tanpa login. Chrome headless di domain asli: 375/1440 px tanpa overflow, font termuat, tanpa gambar/anchor rusak, menu buka/Escape normal, tanpa exception. Lighthouse mobile **95 / 100 / 100 / 100**; catatan: Speed Index 5,0 s dan unused JS 53 KiB, bukan kegagalan target.
- **Resolver lokal:** `Resolve-DnsName` default masih NXDOMAIN karena cache router 192.168.18.1, tetapi `curl` dan Chrome ke domain berhasil. Bila browser pengguna gagal, flush DNS atau pakai 1.1.1.1.
- **Belum:** foto + `CREDITS.md`, QA zoom 200%/reduced motion/kontras manual, review visual pengguna, pembersihan file sisa.

## Pembaruan terakhir — 24 Oktober 2026 (metadata publikasi)

- **Domain publikasi diputuskan:** `https://kern.belfamuhammad.com` (subdomain dari `belfamuhammad.com`; DNS tetap di Domainesia). URL disimpan satu kali di `src/lib/site.ts`; `metadataBase`, canonical, `og:url`, sitemap, dan robots memakainya.
- **Metadata publikasi terpasang:** canonical `/`, kartu OG `summary_large_image`, dan data terstruktur `WebSite` + kreator. Tidak ada `LocalBusiness`, alamat, telepon, atau angka karangan.
- **OG image dibuat:** `public/brand/kern-og.png`, 1200×630, 50 KB, latar ink + wordmark bone + headline Fraunces + titik lime. Generator `scripts/build-og.mjs` (`npm run og`) memakai Chrome headless dan font brand dari `logo-kit/fonts/`.
- **Sitemap/robots:** `src/app/sitemap.ts` (satu URL, monthly, priority 1) dan `src/app/robots.ts` (allow all + sitemap). `host` sengaja tidak dipakai karena formatnya non-standar.
- **Verifikasi:** `npm run lint` dan `npm run build` lolos (route `/`, `/robots.txt`, `/sitemap.xml` statis). Dari server produksi lokal: canonical/og/twitter memakai URL absolut; robots dan sitemap keluar benar; OG 200 `image/png`; probe layout 1200×630 tanpa scroll, kedua font termuat, 213 warna sampel (bukan gambar kosong).
- **Belum:** review visual kartu OG, deploy Vercel + CNAME, endpoint Formspree, menu mobile, foto + `CREDITS.md`, QA final. Saat sesi itu belum ada commit; sekarang sudah di-commit dan di-push (lihat catatan terbaru).

## Pembaruan terakhir — 24 Oktober 2026 (sesi lanjutan)

- **Font final terpasang.** `src/app/fonts.ts` memakai `next/font/google`: Fraunces variable (axes `opsz`) dan Manrope variable, subset latin, dengan variabel CSS `--font-fraunces` dan `--font-manrope`. `layout.tsx` memasang kedua variabel di `<html>`; `globals.css` memakainya dengan fallback Georgia/Arial. `npm run lint` dan `npm run build` lolos; kedua family benar-benar termuat di browser (dicek lewat `document.fonts`, bukan diasumsikan).
- **Logo kit dibuat ulang secara terukur** lewat `logo-kit/build-logos.mjs` (SVG, PNG, ICO, manifest). Lockup stacked baru 520 × 442: simbol dan wordmark sekarang berbagi garis pusat; versi lama meleset 20 unit. Varian warna: `-black` = ink + titik lime, `-white` = bone + titik lime (bukan putih murni), `-mono-4a5545` = satu warna. Ikon/favicon memakai tile ink + simbol small bone + titik lime; ikon all-lime yang membuat titik menyatu sudah dihapus dari produksi.
- **Presentasi logo ditulis ulang**: `logo-kit/kern-presentation.html` (7 slide) dan `logo-kit/kern-preview.html` (lembar uji). Nama orang, jabatan, email, dan handle karangan template sudah tidak ada. Slide PNG baru ada di `logo-kit/presentation-slides/slide-01..07.png`; lembar uji di `logo-kit/kern-preview.png`. Deck memakai ekspor SVG asli dan font brand dari `logo-kit/fonts/`.
- **Movement screen dan form booking demo selesai.** Screen 4 pertanyaan dengan Back, progres, rekomendasi, Start over, fokus pindah ke legend/judul hasil, `aria-live` pada hasil, dan CTA yang memilih format di form. Form punya validasi, error per field, status yang jujur sebagai demo, dan jalur Formspree lewat `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (belum diisi).
- **Verifikasi sesi ini**: 375/768/900/1024/1280/1440 px tanpa overflow horizontal, tanpa anchor mati, tanpa gambar gagal; alur screen → hasil → booking → submit demo diuji lewat Chrome CDP dan lolos. Screenshot situs sementara di `%TEMP%/opencode/kern-site-{375,768,1440}.png`.
- **Koreksi setelah review pengguna:** mockup app icon di slide 6 memakai simbol ink di atas bidang ink, sehingga hanya titik lime yang terlihat. Mockup sekarang memakai `exports/kern-symbol-app-icon.svg` asli (tile ink + K bone + titik lime); slide 06 sudah dirender ulang. File ikon/favicon sendiri tidak pernah bermasalah.
- **Batasan penting:** model sesi ini **text-only dan tidak bisa melihat gambar**. Semua pemeriksaan bersifat struktural (ukuran, overflow, aset termuat, alur DOM), bukan penilaian visual. Review visual deck, 16 px favicon, dan halaman situs tetap harus dilakukan pengguna atau model vision sebelum dinyatakan final.
- Belum ada commit atau push untuk seluruh pekerjaan font, logo, screen, dan form ini.

### Rincian keputusan baru

- Clear space logo sekarang **4 × diameter titik = 56 unit**; panduan lama hanya 1 × diameter (terlalu sempit) dan sudah diganti.
- Titik lime adalah detail, bukan alat pengenal: jelas di ink/moss, tenang di bone, hilang di bawah 24 px. Jangan dibesarkan atau ditambah cincin untuk menutupinya.
- Ukuran minimum: horizontal 120 px, stacked 72 px, simbol 24 px (small file 16 px).
- Bar progres movement screen memakai ink, bukan lime, supaya kontras bar tipis tetap ≥3:1; `DESIGN.md` sudah disinkronkan.
- Rekomendasi screen: `people` → small group; `new`/`returning`/tujuan `ease` → Foundation 1-on-1; `regular` lainnya → small group; sisanya → intro. Ini panduan preferensi, bukan diagnosis.
- Format pilihan screen dan form dibagi lewat `src/lib/training-format.ts` (store `useSyncExternalStore`), tanpa email gate.
- Nomor bagian situs kini 01 Principles, 02 Programs, 03 Screen, 04 Method, 05 Studio, 06 FAQ, 07 Booking. Nav desktop bertambah “Screen”.

### Tugas berikutnya — urutan rekomendasi

- [ ] **Review visual** deck 7 slide, favicon 16/32 px, kartu OG, dan situs (375/768/1440) dengan model vision atau mata sendiri; perbaiki hanya bila terlihat masalah. Jangan mengulang pemilihan konsep A.
- [x] **Tambahkan menu mobile** — selesai; lihat catatan sesi terbaru.
- [x] **Foto final** — tiga foto Commons terpasang, `CREDITS.md` dan `/credits` dibuat, lisensi serta modifikasi dicatat.
- [x] **Metadata publikasi**: URL `https://kern.belfamuhammad.com`, canonical, OG image 1200×630, sitemap/robots, dan `WebSite` JSON-LD sudah terpasang dan diverifikasi build.
- [x] **Lighthouse mobile** 24 Okt: **95–96** Performance, 100 Accessibility, 100 Best Practices, 100 SEO. Speed Index turun ke 0,8 s setelah foto; LCP simulasi 2,8–2,9 s, observed 128 ms.
- [x] **QA manual** — 720 px (zoom 200%), reduced motion, menu, form, dan `/credits` diuji.
- [x] **Motion terlihat** — IO time-based, hero mask/K draw, progres header, timeline dua breakpoint; video review tersedia.
- [ ] **Copy review** bahasa Inggris dan konsistensi klaim — dijadwalkan besok.
- [x] **Bersihkan file sisa** — delapan `kern-concept-*` dan `logo-renders/` dipindahkan ke `logo-kit/archive/` (24 Oktober), akar bersih.
- [x] **Review visual pengguna** — tampilan, foto, dan palet dinyatakan aman; review motion live masih menyusul.
- [x] **Commit, repo GitHub** — commit terbaru `1af8add` (motion) + `77ec88a`, repo publik `belfamrf/kern-wellness`, `main` sinkron.
- [x] **Deploy Vercel** — project `kern-wellness`, deployment `dpl_8veNffg6jmbhd9Tc5usixMNcrBUJ` READY, repo GitHub terhubung.
- [x] **CNAME `kern`** di Domainesia → `3620ed26aa017997.vercel-dns-017.com`; `vercel domains verify --strict` sudah `configured_correctly` dan HTTPS aktif.
- [ ] **Setelah situs siap**: studi kasus, hubungkan dari website pribadi, periksa situs live.

**Titik mulai berikutnya:** copy review bahasa Inggris (besok), review motion live oleh pengguna, endpoint Formspree bila penerima disetujui, lalu studi kasus dan tautan dari website pribadi.


Bagian proyek lain di bawah adalah catatan sesi sebelumnya, bukan hasil pemeriksaan ulang hari ini.

## Status per folder

| Folder | Isi | Status |
|---|---|---|
| `00-website-pribadi` | Website portofolio Belfa (Next.js) | **Selesai dan online** |
| `01-wellness` | Proyek demo 1 (personal training, dengan logo) | **Live di https://kern.belfamuhammad.com** — foto, motion, dan `/credits` terpasang; Lighthouse 95–96/100/100/100; sisa copy review dan studi kasus |
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

- **Status:** fondasi halaman Next.js **16.4.3** (App Router, folder `src/`), React **19.3**, Tailwind **4**, TypeScript, ESLint. Git lokal branch `main`, commit awal `2b41897`; commit terbaru `1af8add` (motion) dan `77ec88a` (catatan live), repo publik terhubung ke Vercel.
- **Brief dikunci 23 Oktober 2026:** brand **KERN**, studio strength & mobility di **Copenhagen**; target pekerja sibuk **30–50**; layanan 1-on-1 + small group (maks 4) dan program fondasi **12 minggu**; website **bahasa Inggris**; tujuan utama **booking sesi intro gratis**; harga ilustratif ditampilkan sebagai "from"; kontak lewat form Formspree (Instagram ditunda sampai ada URL asli); foto stok berlisensi dicatat di `CREDITS.md`; semua demo berlabel **concept project**, tanpa testimoni/angka karangan.
- **Arah desain dikunci:** **The Quiet Clinic** (arah A) dengan disiplin struktur dari arah B. Palet bone `#f3f0e8` / ink `#1b1d19` / moss `#4a5545` + aksen lime `#d8f36b`; huruf **Fraunces + Manrope**; elemen khas **Movement screen** 4 pertanyaan.
- **Logo:** konsep A — Calibrated K disetujui; master dan ekspor dibuat ulang lewat `logo-kit/build-logos.mjs`. Stacked baru sudah sejajar pusat; ikon/favicon tidak lagi all-lime; presentasi 7 slide dan lembar uji sudah bersih dari data karangan template. Review visual tetap terbuka.
- **Referensi:** `C:\Users\USER\Documents\portofolio\_referensi\ANALISIS-REFERENSI.md` (lokasinya di folder `portofolio`, bukan di `Proyek_Klien`). Untuk wellness: **MATE the Label, Parloa, landonorris.com** — dipakai sebagai pecahan prinsip (foto, kejelasan bisnis, sentuhan personal), bukan ditiru.
- **Sudah terpasang:** font final (next/font), kit logo + presentasi, movement screen 4 pertanyaan, form booking demo dengan validasi dan status demo, penomoran section 01–07, nav “Screen”, metadata publikasi (URL `kern.belfamuhammad.com`, canonical, OG image, sitemap, robots, `WebSite` JSON-LD), menu mobile, tiga foto + halaman `/credits`, dan motion berbasis waktu (`page-motion.tsx`).
- **Belum selesai:** copy review, review motion live oleh pengguna, endpoint Formspree, studi kasus.
- **Langkah berikutnya:** copy pass besok, konfirmasi motion di HP, lalu hubungkan dari website pribadi.

## Alat & skills (opencode)

- **Skill global opencode** (`C:\Users\USER\.config\opencode\skills`), disalin 23 Oktober 2026 dari `Documents\portofolio\.claude\skills`: `no-ai-slop`, `web-design-guidelines`, `writing-guidelines`, `vercel-react-best-practices`. **Perlu restart opencode** agar aktif.
- **Ditunda:** `impeccable` (21 MB, hooknya khusus Claude Code; dipakai manual dari folder lama saat review), `playwright-cli` (CLI sudah global; skill menyusul saat QA visual), `vercel-optimize`/`deploy-to-vercel`/`vercel-cli-with-tokens` (tahap deploy), `vercel-composition-patterns` (opsional).
- **Tidak dipakai:** `vercel-react-native-skills`, `vercel-react-view-transitions`.
- **Skill/repo logo:** `logo-design` dari **kaankiziltug/logo-design-skill** (MIT; library SVG-nya trademark, hanya untuk referensi) sudah dipasang global di `C:\Users\USER\.config\opencode\skills\logo-design` pada 23 Oktober 2026. Isi 10,3 MB / 1.464 file, termasuk 1.400+ logo referensi. Python 3.14 dan renderer Chrome tersedia. **Perlu restart opencode** agar muncul sebagai skill.
- **Catatan model:** `glm-5.2` yang dipakai sekarang **text-only**, sedangkan skill logo merender PNG dan perlu dilihat. Untuk tahap logo, sebaiknya ganti ke model vision (`glm-5.3-flash` atau `gpt-5.6`) lewat `/model`.
- **Sumber inventaris:** `C:\Users\USER\Documents\portofolio\skills-lock.json` dan `.claude\skills`. Folder lama jangan dihapus; masih menyimpan referensi, skills, dan riwayat.

## _referensi

- `ANALISIS-REFERENSI.md`: pola desain dari ~20 website referensi (gelap, premium, satu aksen berani, satu elemen interaktif yang diingat).
- `UPWORK-PROFIL.md`: judul, overview, 15 skill, rate **$30/jam**, dan 3 item portfolio siap tempel. Belum diterapkan ke profil Upwork.

## Yang belum selesai

1. **Tiga proyek demo belum selesai.** KERN sudah memiliki fondasi halaman; dua demo lainnya belum dibangun. Kartu di website pribadi belum dihubungkan ke studi kasus.
2. **Profil Upwork belum dioptimalkan** (judul, overview, skill, rate, foto, verifikasi identitas masih tugas Belfa).
3. **Form kontak belum diuji kirim sungguhan** setelah live; perlu satu pesan uji untuk memastikan masuk ke email.
4. **Halaman studi kasus** untuk tiap demo belum ada (direncanakan di `BRIEF.md`: satu halaman per proyek).
5. **`inject.py` di akar folder** bukan bagian portofolio: skrip installer OpenAgentic yang mengubah settings Claude Code di luar folder ini. Jangan dijalankan; sebaiknya dipindah atau dihapus setelah minta izin.

## Langkah berikutnya (urutan rekomendasi)

1. Uji form kontak sekali, cek Google Analytics realtime.
2. Rapikan profil Upwork pakai `_referensi/UPWORK-PROFIL.md`, lalu pasang link Upwork di website.
3. Lanjut **01-wellness** dari checklist penutupan sesi: font, koreksi kit logo, movement screen, form demo, lalu kelengkapan situs dan publikasi. Brief dan arah logo sudah dipilih.
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
