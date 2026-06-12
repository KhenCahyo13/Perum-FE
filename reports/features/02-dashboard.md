# Dashboard

Halaman utama yang menampilkan ringkasan data seluruh modul secara sekilas.

## Ringkasan Statistik

Empat kartu di bagian atas menampilkan total rumah, penghuni, tagihan, dan pengeluaran.

> **Screenshot:**
> ![Summary stats](./screenshots/dashboard-summary.png)

## Grafik Keuangan Bulanan

Bar chart yang menampilkan pemasukan (dari pembayaran tagihan) dan pengeluaran dalam 12 bulan terakhir.

> **Screenshot:**
> ![Monthly chart](./screenshots/dashboard-chart.png)

## Detail Per Modul

Tiga kartu di bagian bawah menampilkan rincian status rumah (terisi/kosong), status tagihan (terbayar/belum), dan pengeluaran (rutin/non-rutin).

> **Screenshot:**
> ![Detail cards](./screenshots/dashboard-detail.png)

## API Endpoints

| Method | Endpoint             | Keterangan                           |
| ------ | -------------------- | ------------------------------------ |
| GET    | `/reports/dashboard` | Statistik semua modul + data bulanan |
