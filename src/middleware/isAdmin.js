const usuarioModel = require("../models/usuarioModel");
const isAdmin = async(req, res, next) => {
    const user = req.user;
    if(!user){
        return res.status(401).json({ error: 'sin autorizacion de administrador' });
    }
    try {
        const userRole = await usuarioModel.mostrarRolPorIdUsuario(user.id);
        if (userRole !== "admin") {
            return res.status(403).json({error: "sin autorizacion de administrador"});
        }
        next(); // para que vaya al siguiente metodo o middleware muy importante colocarlo
    } catch (error) {
        next();
    }
}

module.exports = isAdmin;