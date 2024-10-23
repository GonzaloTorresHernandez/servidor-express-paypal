require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const carroRoutes = require("./routes/carroRoutes");
const pagosRoutes = require("./routes/pagosRoutes");
const productosRoutes = require("./routes/productosRoutes");
const errorHandler = require("./middleware/errorHandler");
// const supaRoutes = require("./routes/supaRoutes");

const app = express();
// const corsOptions = {
//     origin: "http://",
//     methods: "GET, DELETE",
//     credentials: true
// }
app.use(cors());  //para manejar peticions de distinos dominios
const PORT = process.env.PORT;

app.use(helmet());
app.use(bodyParser.json());

app.use(errorHandler);  // aplicar el manejador de errores

app.use("/api/auth", authRoutes);
// app.use("/api/carro", carroRoutes);
// app.use("/api/pago", pagosRoutes);
// app.use("/api/productos", productosRoutes);
// app.use("/api/supa", supaRoutes);

app.listen(PORT, () => {
    console.log("Server iniciado en el puerto " + PORT);
});
