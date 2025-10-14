// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const session = require("express-session");
// const app = express();

// // Middleware a JSON kérésekhez


// // Middleware a JSON kérésekhez


// app.use(cors()); // <<< ezzel engedélyezed minden origin-nek
// app.use(express.json());

// app.use(cors()); // <<< ezzel engedélyezed minden origin-nek
// app.use(express.json());
// // <<< A Web mappa statikus kiszolgálása, hogy a frontend oldalakat is a szerver szolgálja ki.
// app.use(express.static(path.join(__dirname, "../Web")));

// // Session middleware beállítása
// app.use(session({
//   secret: "titkos_kulcs",
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false }
// }));

// // Route-ok importálása
// const userRoutes = require("./api/routes/userRoutes");
// const alkalomRoutes = require("./api/routes/alkalomRoutes");
// const stilusRoutes = require("./api/routes/stilusRoutes");
// const celcsoportRoutes = require("./api/routes/celcsoportRoutes");
// const authRoutes = require("./api/routes/authRoutes");

// // Route-ok regisztrálása
// app.use("/users", userRoutes);
// app.use("/alkalmak", alkalomRoutes);
// app.use("/stilusok", stilusRoutes);
// app.use("/celcsoportok", celcsoportRoutes);
// app.use("/auth", authRoutes);

// // Hiba kezelő middleware (opcionális)
// const errorHandler = require("./api/middlewares/errorHandler");
// app.use(errorHandler);

// module.exports = app;
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