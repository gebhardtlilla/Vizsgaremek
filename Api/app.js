const express = require("express");
const cors = require("cors");
const app = express();

// Middleware a JSON kérésekhez


app.use(cors()); // <<< ezzel engedélyezed minden origin-nek
app.use(express.json());

// Route-ok importálása
const userRoutes = require("./api/routes/userRoutes");

// Route-ok regisztrálása
app.use("/users", userRoutes);

// Hiba kezelő middleware (opcionális)
const errorHandler = require("./api/middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
