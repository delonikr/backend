const Kategori = require('../models/kategoriModel');

exports.getAllKategori = (req, res) => {
  Kategori.getAll((err, results) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.json({ status: true, message: 'Success', data: results });
  });
};

exports.createKategori = (req, res) => {
  const { nama_kategori } = req.body;
  if (!nama_kategori) return res.status(400).json({ status: false, message: 'Missing required fields' });

  Kategori.create(nama_kategori, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.status(201).json({ status: true, message: 'Kategori created successfully', data: result });
  });
};

exports.updateKategori = (req, res) => {
  const { id } = req.params;
  const { nama_kategori } = req.body;

  if (!nama_kategori) return res.status(400).json({ status: false, message: 'Missing required fields' });

  Kategori.update(id, nama_kategori, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Kategori not found' });
    res.json({ status: true, message: 'Kategori updated successfully' });
  });
};

exports.deleteKategori = (req, res) => {
  const { id } = req.params;
  Kategori.delete(id, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Kategori not found' });
    res.json({ status: true, message: 'Kategori deleted successfully' });
  });
};
