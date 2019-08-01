const Empresa = require('../../models/EMPRESAS');

const getAllEmpresa= async (root,args)=>{
        let lstEmpresa = await Empresa.find({cNombreEmpresa:args.cNombreEmpresa})
        return lstEmpresa;

}

const getEmpresabyId= async (root,args)=>{
    let lstEmpresa = await Empresa.findById(args.id).populate('user');
    return lstEmpresa;

}


const getUsuario = async (root,data) => {
    let fintUsu = await Usuario.findOne({cNombre:data.cNombre},(ERR,RES) => {
        return RES;
    });

    return fintUsu;
}

module.exports={  
    getAllEmpresa,
    getUsuario,
    getEmpresabyId,
    
}