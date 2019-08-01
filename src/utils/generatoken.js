const jwt = require('jsonwebtoken');

const createToken = (usuario) =>{
   
    const payload = {
        id: usuario._id,
        cNombre:usuario.cNombre
    }
   
    const resultado=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"2h"});
  
    return resultado;
}

module.exports = { createToken};