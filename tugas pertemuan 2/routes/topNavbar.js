const express = require('express');
const router = express.Router();

// Route untuk Navbar Atas
router.get('/', (req, res) => {
  res.send('Ini adalah halaman Home Navbar Atas');
});

router.get('/profile', (req, res) => {
  res.send('Ini adalah halaman Profile dari Navbar Atas');
});

module.exports = router;