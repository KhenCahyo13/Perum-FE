# Pengeluaran

Manajemen pengeluaran operasional perumahan.

## List Pengeluaran

Menampilkan tabel semua pengeluaran dengan kolom kategori, nominal, tanggal, status rutin, dan deskripsi. Dilengkapi filter kategori, status rutin, dan bulan.

> **Screenshot:**
> ![Expense list](./screenshots/expense-list.png)

## Statistik Pengeluaran

Panel samping menampilkan total pengeluaran, total nominal, rincian pengeluaran rutin vs non-rutin beserta nominalnya.

> **Screenshot:**
> ![Expense stats](./screenshots/expense-stats.png)

## Tambah Pengeluaran

Form untuk mencatat pengeluaran baru dengan input kategori (dropdown searchable), nominal, tanggal, status rutin, dan deskripsi opsional.

> **Screenshot:**
> ![Expense create](./screenshots/expense-create.png)

## Detail Pengeluaran

Menampilkan informasi lengkap pengeluaran termasuk kategori, nominal, tanggal, status rutin, dan deskripsi.

> **Screenshot:**
> ![Expense detail](./screenshots/expense-detail.png)

## Edit Pengeluaran

Form untuk mengubah data pengeluaran yang sudah ada, dengan nilai awal terisi otomatis dari data yang ada.

> **Screenshot:**
> ![Expense update](./screenshots/expense-update.png)

## Hapus Pengeluaran

Tombol hapus tersedia di footer panel detail. Penghapusan memerlukan konfirmasi sebelum diproses.

> **Screenshot:**
> ![Expense detail](./screenshots/expense-detail.png)

## API Endpoints

| Method | Endpoint              | Keterangan                                                      |
| ------ | --------------------- | --------------------------------------------------------------- |
| GET    | `/expenses`           | List pengeluaran (filter: categoryId, isRecurring, month, page) |
| GET    | `/expenses/stats`     | Statistik pengeluaran                                           |
| GET    | `/expenses/:id`       | Detail pengeluaran                                              |
| POST   | `/expenses`           | Tambah pengeluaran                                              |
| PUT    | `/expenses/:id`       | Edit pengeluaran                                                |
| DELETE | `/expenses/:id`       | Hapus pengeluaran                                               |
| GET    | `/expense-categories` | List kategori pengeluaran                                       |
