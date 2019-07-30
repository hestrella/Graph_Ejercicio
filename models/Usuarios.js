const mongoose = require('mongoose');
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

module.exports = mongoose.model('Usuario',UsuarioSchema);