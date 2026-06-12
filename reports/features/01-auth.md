# Autentikasi

Fitur login dan logout untuk mengakses aplikasi.

## Halaman Login

Pengguna memasukkan email dan password untuk masuk ke aplikasi. Token disimpan di local storage via Zustand persist.

> **Screenshot:**
> ![Login page](./screenshots/auth-login.png)

## Logout

Tombol logout tersedia di navbar kanan atas. Klik akan memanggil `POST /auth/logout` ke API, lalu menghapus token dan redirect ke halaman login.

> **Screenshot:**
> ![Logout dropdown](./screenshots/auth-logout.png)

## API Endpoints

| Method | Endpoint       | Keterangan                        |
| ------ | -------------- | --------------------------------- |
| POST   | `/auth/login`  | Login, mengembalikan user + token |
| POST   | `/auth/logout` | Logout, invalidasi token          |
