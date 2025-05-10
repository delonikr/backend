const db = require('./db');

const LogTransaksi = {
  getAll: (callback) => {
    db.query('SELECT * FROM log_transaksi', callback);
  },
  
  create: (data, callback) => {
    const { id_barang, jenis_transaksi, jumlah, tanggal } = data;
    db.query(
      'INSERT INTO log_transaksi (id_barang, jenis_transaksi, jumlah, tanggal) VALUES (?, ?, ?, ?)',
      [id_barang, jenis_transaksi, jumlah, tanggal],
      callback
    );
  }
};

module.exports = LogTransaksi;
