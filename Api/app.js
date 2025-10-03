const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
const path = require("path");
const app = express();

// Middleware a JSON kérésekhez
=======
const app = express();

// Middleware a JSON kérésekhez


app.use(cors()); // <<< ezzel engedélyezed minden origin-nek
app.use(express.json());
>>>>>>> 5db2e7d389331c65f4ac05db490923fe5f87b4fb


app.use(cors()); // <<< ezzel engedélyezed minden origin-nek
app.use(express.json());
// <<< A Web mappa statikus kiszolgálása, hogy a frontend oldalakat is a szerver szolgálja ki.
app.use(express.static(path.join(__dirname, "../Web")));
// Route-ok importálása
const userRoutes = require("./api/routes/userRoutes");
const alkalomRoutes = require("./api/routes/alkalomRoutes");
const stilusRoutes = require("./api/routes/stilusRoutes");
const celcsoportRoutes = require("./api/routes/celcsoportRoutes");

// Route-ok regisztrálása
app.use("/users", userRoutes);
app.use("/alkalmak", alkalomRoutes);
app.use("/stilusok", stilusRoutes);
app.use("/celcsoportok", celcsoportRoutes);

// Hiba kezelő middleware (opcionális)
const errorHandler = require("./api/middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
