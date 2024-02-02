const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'comentarios',
});

app.get('/datos', (req, res) => {
  const query = 'SELECT * FROM comentarios';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).send('Error al obtener datos de la base de datos');
    } else {
      res.json(results);
    }
  });
});


const PORT = 8180;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
