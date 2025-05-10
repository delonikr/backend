const express = require('express');
const router = express.Router();
const Barang = require('../models/barangModel');

router.get('/', (req, res) => {
  Barang.getAll((err, results) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.json({ status: true, message: 'Success', data: results });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Barang.getById(id, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.length === 0) return res.status(404).json({ status: false, message: 'Barang not found' });
    res.json({ status: true, message: 'Success', data: result[0] });
  });
});

router.post('/', (req, res) => {
  const { nama, stok, id_kategori } = req.body;
  if (!nama || !stok || !id_kategori) return res.status(400).json({ status: false, message: 'Missing required fields' });

  Barang.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.status(201).json({ status: true, message: 'Barang created successfully', data: result });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, stok, id_kategori } = req.body;

  if (!nama || !stok || !id_kategori) return res.status(400).json({ status: false, message: 'Missing required fields' });

  Barang.update(id, req.body, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Barang not found' });
    res.json({ status: true, message: 'Barang updated successfully' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Barang.delete(id, (err, result) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ status: false, message: 'Barang not found' });
    res.json({ status: true, message: 'Barang deleted successfully' });
  });
});

// Search barang by name or category
router.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  Barang.searchByNameOrCategory(searchTerm, (err, results) => {
    if (err) return res.status(500).json({ status: false, message: err.message });
    res.json({ status: true, message: 'Success', data: results });
  });
});

router.get('/', (req, res) => {
  Barang.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching data from the database.' });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
