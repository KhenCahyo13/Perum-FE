# Tagihan

Manajemen tagihan bulanan penghuni perumahan.

## List Tagihan

Menampilkan tabel semua tagihan dengan kolom nomor rumah, penghuni, tipe biaya, bulan tagihan, nominal, jatuh tempo, dan status. Dilengkapi filter status dan bulan tagihan.

> **Screenshot:**
> ![Bill list](./screenshots/bill-list.png)

## Statistik Tagihan

Panel samping menampilkan total tagihan, jumlah belum dibayar, terlambat, lunas, serta total nominal belum dibayar dan sudah dibayar.

> **Screenshot:**
> ![Bill stats](./screenshots/bill-stats.png)

## Tambah Tagihan

Form untuk membuat tagihan baru. Rumah dan penghuni dipilih dari dropdown searchable, tipe biaya dari master data fee type, bulan tagihan dan jatuh tempo menggunakan date picker.

> **Screenshot:**
> ![Bill create](./screenshots/bill-create.png)

## Detail Tagihan

Menampilkan informasi lengkap tagihan. Jika belum dibayar, terdapat form inline untuk mencatat pembayaran dengan nominal dan tanggal pembayaran. Jika sudah dibayar, menampilkan rincian pembayaran.

> **Screenshot:**
> ![Bill detail — belum dibayar](./screenshots/bill-detail-unpaid.png)

> **Screenshot:**
> ![Bill detail — sudah dibayar](./screenshots/bill-detail-paid.png)

## Hapus Tagihan & Pembayaran

Tagihan dapat dihapus dari panel detail menggunakan tombol hapus di footer. Pembayaran yang sudah dicatat juga dapat dihapus untuk membatalkan status lunas.

> **Screenshot:**
> ![Bill detail — sudah dibayar](./screenshots/bill-detail-paid.png)

## API Endpoints

| Method | Endpoint                         | Keterangan                                 |
| ------ | -------------------------------- | ------------------------------------------ |
| GET    | `/bills`                         | List tagihan (filter: status, month, page) |
| GET    | `/bills/stats`                   | Statistik tagihan                          |
| GET    | `/bills/:id`                     | Detail tagihan                             |
| POST   | `/bills`                         | Buat tagihan                               |
| DELETE | `/bills/:id`                     | Hapus tagihan                              |
| POST   | `/bills/:id/payments`            | Catat pembayaran                           |
| DELETE | `/bills/:id/payments/:paymentId` | Hapus pembayaran                           |
| GET    | `/fee-types`                     | List tipe biaya                            |
