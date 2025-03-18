const express = require('express');
const app = express();
const port = 3002;

// Import route dari file terpisah
const topNavbarRoutes = require('./routes/topNavbar');
const sideNavbarRoutes = require('./routes/sideNavbar');

// Route Utama - Redirect default ke /top
app.get('/', (req, res) => {
  res.redirect('/top');
});

// Gunakan route masing-masing
app.use('/top', topNavbarRoutes);
app.use('/side', sideNavbarRoutes);

// Server berjalan
app.listen(port, () => {
  console.log(`Server berjalan cek di http://localhost:${port}`);
  console.log('Akses route berikut:');
  console.log('http://localhost:3002/top → Halaman Home Navbar Atas');
  console.log('http://localhost:3002/top/profile → Halaman Profile Navbar Atas');
  console.log('http://localhost:3002/side → Halaman Dashboard Navbar Samping');
  console.log('http://localhost:3002/side/settings → Halaman Settings Navbar Samping');
});
