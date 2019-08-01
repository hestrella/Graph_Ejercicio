const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    cNombre: {
        type: String,
        required: true
    },
    cContrasenia: {
        type: String,
        required: true
    },
    iTipoUsuario: {
        type: Number,
        required: true
    },
    img: {
        type:String,
        default:''
    },
    dtFechaCreacion: {
        type:Date,
        default:Date.now
    },
    dtFechaModificacion: {
        type:Date,
        default:Date.now
    }
});

UsuarioSchema.pre('save',function(next){//no se usa la funcion flecha por que no puedo tener el "this"
    const Usuario = this;
    const SALT_ROUNDS = 10;
    
    bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
        console.log(err);
        bcrypt.hash(Usuario.cContrasenia, salt, function(err, hash) { 
              Usuario.cContrasenia = hash;
            next();
        });


    
})
});

module.exports = mongoose.model('Usuario',UsuarioSchema);