const express = require('express');
const cors = require('cors');
const userRoutes = require('./api/routes/userRoutes');  // vagy helyes útvonal

const app = express();

app.use(cors());
app.use(express.json());

// Beállítás: ha gyökérre jön GET / kérés, vissza adhatsz valamit
app.get('/', (req, res) => {
  res.send('API működik');
});

// Use user routes
app.use('/users', userRoutes);

// Hibakezelő middleware (ha van)
const errorHandler = require('./api/middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;
