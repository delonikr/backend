const express = require('express');
const router = express.Router();

// Route untuk Navbar Samping
router.get('/', (req, res) => {
  res.send('Ini adalah halaman Dashboard Navbar Samping');
});

router.get('/settings', (req, res) => {
  res.send('Ini adalah halaman Settings dari Navbar Samping');
});

module.exports = router;