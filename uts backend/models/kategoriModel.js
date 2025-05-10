const db = require('./db'); 

const Kategori = {
  getAll: (callback) => {
    db.query('SELECT * FROM kategori', callback);
  },

  create: (nama_kategori, callback) => {
    db.query('INSERT INTO kategori (nama_kategori) VALUES (?)', [nama_kategori], callback);
  },

  update: (id, nama_kategori, callback) => {
    db.query('UPDATE kategori SET nama_kategori = ? WHERE id = ?', [nama_kategori, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM kategori WHERE id = ?', [id], callback);
  }
};

module.exports = Kategori;
