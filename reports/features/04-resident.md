# Penghuni

Manajemen data penghuni perumahan.

## List Penghuni

Menampilkan tabel semua penghuni dengan kolom nama, nomor telepon, nomor rumah, dan tipe (kontrak/tetap). Dilengkapi filter tipe dan pencarian.

> **Screenshot:**
> ![Resident list](./screenshots/resident-list.png)

## Statistik Penghuni

Panel samping menampilkan total penghuni, jumlah tipe kontrak vs tetap, dan status menikah vs lajang.

> **Screenshot:**
> ![Resident stats](./screenshots/resident-stats.png)

## Detail Penghuni

Menampilkan informasi lengkap penghuni beserta rumah yang ditempati saat ini.

> **Screenshot:**
> ![Resident detail](./screenshots/resident-detail.png)

## API Endpoints

| Method | Endpoint           | Keterangan                                 |
| ------ | ------------------ | ------------------------------------------ |
| GET    | `/residents`       | List penghuni (filter: type, search, page) |
| GET    | `/residents/stats` | Statistik penghuni                         |
| GET    | `/residents/:id`   | Detail penghuni                            |
