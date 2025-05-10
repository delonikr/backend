const db = require('./db'); 

const Barang = {
  getAll: (callback) => {
    db.query('SELECT * FROM barang', callback); 
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM barang WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { nama, stok, id_kategori } = data;
    db.query('INSERT INTO barang (nama, stok, id_kategori) VALUES (?, ?, ?)', 
      [nama, stok, id_kategori], callback);
  },  

  update: (id, data, callback) => {
    const { nama, stok, id_kategori } = data;
    db.query('UPDATE barang SET nama = ?, stok = ?, id_kategori = ? WHERE id = ?',
      [nama, stok, id_kategori, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM barang WHERE id = ?', [id], callback);
  },

  searchByNameOrCategory: (searchTerm, callback) => {
    db.query(`
      SELECT * FROM barang 
      WHERE nama LIKE ? OR id_kategori IN 
      (SELECT id FROM kategori WHERE nama_kategori LIKE ?)
    `, [`%${searchTerm}%`, `%${searchTerm}%`], callback);
  }
};

module.exports = Barang;
