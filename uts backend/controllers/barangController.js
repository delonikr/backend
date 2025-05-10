const Barang = require('../models/barangModel');

exports.getAllBarang = (req, res) => {
  Barang.getAll((err, results) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.json({ status: true, message: 'Success', data: results });
  });
};

exports.getBarangById = (req, res) => {
  const { id } = req.params;
  Barang.getById(id, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.length === 0) return res.status(404).json({ status: false, message: 'Barang not found' });
    res.json({ status: true, message: 'Success', data: result[0] });
  });
};

exports.createBarang = (req, res) => {
  const { nama, stok, id_kategori } = req.body;
  if (!nama || !stok || !id_kategori) return res.status(400).json({ status: false, message: 'Missing required fields' });

  Barang.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.status(201).json({ status: true, message: 'Barang created successfully', data: result });
  });
};
