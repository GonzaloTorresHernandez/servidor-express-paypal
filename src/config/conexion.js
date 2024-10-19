const {Pool} = require("pg");
const {readFileSync} = require("fs");
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: true,
        ca: readFileSync("src/certs/ca.crt").toString()
    }
});

pool.connect((error, cliente, release) => {
    if (error) {
        console.log("error de conexion ", error.stack);
    }else{
        console.log("conectado con exito");
        release();
    }
});

module.exports = pool;