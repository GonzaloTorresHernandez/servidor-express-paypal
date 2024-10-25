// middleware para valdiar la autenticacion con supabase

const supabase = require("../config/supabase");
const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // separamos bearer token y botenemos solo el token
    if (!token) {
        // no cuenta con el token
        return res.status(401).json({error: "sin autenticacion"})
    }
    const {data: {user}, error} = await supabase.auth.getUser(token);   //validar el token en supabase  --  data: {user} data se sobreescribe como user
    if(error || !user){
        return res.status(401).json({error: "sin autenticacion"});
    }
    req.user = user;
    next();    
};

module.exports = authenticate;

