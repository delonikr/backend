const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models/db'); 
const barangRoutes = require('./routes/barangRoutes');
const kategoriRoutes = require('./routes/kategoriRoutes');
const logTransaksiRoutes = require('./routes/logTransaksiRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/barang', barangRoutes);
app.use('/kategori', kategoriRoutes);
app.use('/log', logTransaksiRoutes);

// Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
