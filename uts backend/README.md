# Inventory API

Sistem manajemen inventaris barang sederhana berbasis Node.js, Express, dan MySQL.

## ENV VARS
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_NAME

## Endpoints

### Barang
- `GET /barang`
- `GET /barang/search?q=`
- `GET /barang/:id`
- `POST /barang`
- `PUT /barang/:id`
- `DELETE /barang/:id`

### Kategori
- `GET /kategori`
- `POST /kategori`
- `PUT /kategori/:id`
- `DELETE /kategori/:id`

### Log Transaksi
- `GET /log`
- `POST /log`

### Request Body
// Data untuk kategori
{ "nama_kategori": "Elektronik" }

// Data untuk barang
{ "nama": "Smartphone", "stok": 50, "id_kategori": 1 }

// Data untuk log transaksi
{ "id_barang": 1, "jenis_transaksi": "masuk", "jumlah": 20, "tanggal": "2025-05-01" }


## Response Format
```json
{
  "status": true,
  "message": "Berhasil",
  "data": {...}
}
