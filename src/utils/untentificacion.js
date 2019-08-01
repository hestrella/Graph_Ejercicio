const bCrypt = require('bcrypt');
const serToken = require('../utils/generatoken');
const Usuario = require('../../models/Usuarios');

const autentificacion = (data) => {
    return new Promise((resolve,reject) => {
        let {cNombre,cContrasenia} = data;
        Usuario.findOne({cNombre})
        .then((usuario) => {
            if(!usuario){
                reject(new Error(`El correo del usuario ingresado no se encontro`))
            } 
           
            bCrypt.compare(cContrasenia,usuario.cContrasenia,(err,isValido) =>{

                    if (err)
                    {
                        reject(new Error(err));
                    }

                     if (isValido){ 
                        let resultado= serToken.createToken(usuario);
                        
                        resolve(resultado);
                        }
                        else{
                              reject(new Error(`Contraseña Incorrecta!`))
                        }
            })
        })
    })
};

module.exports = autentificacion;