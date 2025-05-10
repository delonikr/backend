const express = require('express');
const LogTransaksi = require('../models/logTransaksiModel');
const Barang = require('../models/barangModel');
const router = express.Router();

router.get('/', (req, res) => {
  LogTransaksi.getAll((err, results) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.json({ status: true, message: 'Success', data: results });
  });
});

router.post('/', (req, res) => {
  const { id_barang, jenis_transaksi, jumlah, tanggal } = req.body;

  if (!id_barang || !jenis_transaksi || !jumlah || !tanggal) {
    return res.status(400).json({ status: false, message: 'Missing required fields' });
  }

  Barang.getById(id_barang, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.length === 0) return res.status(404).json({ status: false, message: 'Barang not found' });

    const stokBaru = jenis_transaksi === 'masuk' ? result[0].stok + jumlah : result[0].stok - jumlah;

    if (stokBaru < 0) return res.status(400).json({ status: false, message: 'Stok tidak mencukupi' });

    LogTransaksi.create({ id_barang, jenis_transaksi, jumlah, tanggal }, (err, logResult) => {
      if (err) return res.status(500).json({ status: false, message: err.message });

      Barang.update(id_barang, { stok: stokBaru }, (err) => {
        if (err) return res.status(500).json({ status: false, message: err.message });
        res.json({ status: true, message: 'Log transaksi dan stok berhasil diupdate', data: logResult });
      });
    });
  });
});

module.exports = router;
