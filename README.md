# Perum App

Frontend aplikasi manajemen perumahan.

---

> [!NOTE]
> **Rangkuman bisa dibaca pada reports/features/\*.md**

---

## Persyaratan

- Node.js >= 20
- npm >= 10

## Instalasi

**1. Install dependencies**

```bash
npm install
```

**2. Copy environment file**

```bash
cp .env.example .env
```

**3. Sesuaikan `.env`**

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_AUTH_STORAGE_KEY=perum-auth
```

**4. Jalankan development server**

```bash
npm run dev
```

App berjalan di `http://localhost:5173`.

## Scripts

| Command          | Keterangan             |
| ---------------- | ---------------------- |
| `npm run dev`    | Development server     |
| `npm run build`  | Build production       |
| `npm run lint`   | Lint + auto fix        |
| `npm run format` | Format dengan Prettier |
