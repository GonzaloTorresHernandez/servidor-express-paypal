const express = require("express");
const rutas = express.Router();
const supabase = require("../config/supabase");

rutas.get("/credentials", (req, res) => {
    res.json({supabase});
});