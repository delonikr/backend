CREATE DATABASE IF NOT EXISTS inventory;
USE inventory;

CREATE TABLE IF NOT EXISTS kategori (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS barang (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    stok INT DEFAULT 0,
    id_kategori INT,
    FOREIGN KEY (id_kategori) REFERENCES kategori(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS log_transaksi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_barang INT,
    jenis_transaksi ENUM('masuk', 'keluar') NOT NULL,
    jumlah INT NOT NULL,
    tanggal DATE NOT NULL,
    FOREIGN KEY (id_barang) REFERENCES barang(id) ON DELETE CASCADE
);

-- Sample data for kategori
INSERT INTO kategori (nama_kategori) VALUES
('Elektronik'),
('Perabotan Rumah'),
('Buku'),
('Makanan');

-- Sample data for barang
INSERT INTO barang (nama, stok, id_kategori) VALUES
('Smartphone', 50, 1),
('Laptop', 30, 1),
('Kursi', 15, 2),
('Meja', 10, 2),
('Novel', 100, 3),
('Makanan Ringan', 200, 4);

-- Sample data for log_transaksi (masuk/keluar)
INSERT INTO log_transaksi (id_barang, jenis_transaksi, jumlah, tanggal) VALUES
(1, 'masuk', 20, '2025-05-01'),
(2, 'keluar', 5, '2025-05-02'),
(3, 'masuk', 10, '2025-05-03'),
(4, 'keluar', 3, '2025-05-04');
