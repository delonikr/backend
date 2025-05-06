const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM buku', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post('/', (req, res) => {
  const { judul, penulis, tahun_terbit } = req.body;
  db.query('INSERT INTO buku SET ?', { judul, penulis, tahun_terbit }, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, judul, penulis, tahun_terbit });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { judul, penulis, tahun_terbit } = req.body;
  db.query('UPDATE buku SET ? WHERE id = ?', [{ judul, penulis, tahun_terbit }, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Buku diperbarui' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM buku WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Buku dihapus' });
  });
});

module.exports = router;
