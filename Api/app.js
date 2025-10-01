const express = require("express");
const app = express();

// Middleware a JSON kérésekhez
app.use(express.json());

// Route-ok importálása
const userRoutes = require("./api/routes/userRoutes");

// Route-ok regisztrálása
app.use("/users", userRoutes);

// Hiba kezelő middleware (opcionális)
const errorHandler = require("./api/middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
