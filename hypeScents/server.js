const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

// Conexión a MySQL con pool
const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',  // Cambia 'localhost' a '127.0.0.1' si hay problemas
    user: 'root',
    password: 'eggman1017',
    database: 'tienda'
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Error de conexión a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a la base de datos MySQL');
    connection.release();
});

// Obtener todos los productos
app.get('/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            console.error('❌ Error en la consulta:', err);
            return res.status(500).json({ error: 'Error al obtener productos' });
        }
        res.json(results);
    });
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    console.log(`🔍 Buscando producto con ID: ${id}`);
    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('❌ Error en la consulta:', err);
            return res.status(500).json({ error: 'Error al obtener el producto' });
        }
        if (results.length === 0) {
            console.warn('⚠ Producto no encontrado');
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(results[0]);
    });
});

// Servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});
