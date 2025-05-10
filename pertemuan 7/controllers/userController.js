const db = require('../config/db');

exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
};

exports.createUser = (req, res) => {
    const { nama, phone, email, password, role, created_at } = req.body;
    db.query(
        'INSERT INTO user (nama, phone, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        [nama, phone, email, password, role, created_at],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'User berhasil ditambahkan', id: result.insertId });
        }
    );
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM user WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result[0]);
    });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nama, phone, email, password, role } = req.body;
    db.query(
        'UPDATE user SET nama = ?, phone = ?, email = ?, password = ?, role = ? WHERE id = ?',
        [nama, phone, email, password, role, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'User berhasil diperbarui' });
        }
    );
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM user WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'User berhasil dihapus' });
    });
};
