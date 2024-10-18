const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const carroRoutes = require("./routes/carroRoutes");
const pagosRoutes = require("./routes/pagosRoutes");
const productosRoutes = require("./routes/productosRoutes");
// const supaRoutes = require("./routes/supaRoutes");

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT || 3000;

app.use(helmet());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/carro", carroRoutes);
app.use("/api/pago", pagosRoutes);
app.use("/api/productos", productosRoutes);
// app.use("/api/supa", supaRoutes);

app.listen(PORT, () => {
    console.log("Server iniciado en el puero " + PORT);
});
