# Rumah

Manajemen data rumah di perumahan.

## List Rumah

Menampilkan tabel semua rumah dengan kolom nomor, status (terisi/kosong), dan aksi. Dilengkapi filter status dan pencarian nomor rumah.

> **Screenshot:**
> ![House list](./screenshots/house-list.png)

## Statistik Rumah

Panel samping menampilkan total rumah, jumlah terisi, dan jumlah kosong.

> **Screenshot:**
> ![House stats](./screenshots/house-stats.png)

## Tambah Rumah

Form untuk menambah data rumah baru dengan input nomor rumah.

> **Screenshot:**
> ![House create](./screenshots/house-create.png)

## Detail Rumah

Menampilkan informasi lengkap rumah beserta penghuni aktif saat ini dan riwayat penghuni sebelumnya.

> **Screenshot:**
> ![House detail](./screenshots/house-detail.png)

## Edit Rumah

Form untuk mengubah data rumah yang sudah ada.

> **Screenshot:**
> ![House update](./screenshots/house-update.png)

## Hapus Rumah

Tombol hapus (ikon trash) tersedia di footer panel detail. Penghapusan memerlukan konfirmasi sebelum diproses.

> **Screenshot:**
> ![House delete](./screenshots/house-detail.png)

## API Endpoints

| Method | Endpoint                | Keterangan                                |
| ------ | ----------------------- | ----------------------------------------- |
| GET    | `/houses`               | List rumah (filter: status, search, page) |
| GET    | `/houses/stats`         | Statistik rumah                           |
| GET    | `/houses/:id`           | Detail rumah                              |
| POST   | `/houses`               | Tambah rumah                              |
| PUT    | `/houses/:id`           | Edit rumah                                |
| DELETE | `/houses/:id`           | Hapus rumah                               |
| DELETE | `/houses/:id/residents` | Lepas penghuni dari rumah                 |
