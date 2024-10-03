// server.js ou app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const inquilinosRoutes = require('./routes/inquilinosRoutes'); // Adicione esta linha
const db = require('./database/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to PostgreSQL');
});

app.use('/inquilinos', inquilinosRoutes); // Altere o prefixo da rota aqui

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
