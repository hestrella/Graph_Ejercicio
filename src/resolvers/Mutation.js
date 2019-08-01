const Empresa = require('../../models/EMPRESAS');
const Usuario = require('../../models/Usuarios');
const auth = require('../../src/utils/untentificacion');
const storage = require('../utils/storage');
const createEmpresa = async (root,{data})=>{
   
    let newEmpresa=new Empresa ({
        ...data
    })
    
    const miEmpresa= await newEmpresa.save();
    let lstEmpresa = await Empresa.findById(miEmpresa.id).populate('user');
    return lstEmpresa;
}


const createUsuario = async (root,{data}) =>{
    
    let newUsuario = new Usuario({
        ...data
    })
   
    const miUsuario = await newUsuario.save();
  
    return miUsuario;
}

const login = async (root, {data}) => {
  
    const token = await auth(data).catch((err)=> new Error(err));
    return {"token": token, "message":''};
}

const addPhoto = async (root,args) => {
    console.log(args);
        if (args.photo)
        {
            const { createReadStream }= await args.photo;
            const stream= createReadStream();
            console.log('STREAM===>>',stream);
            const url= await storage({stream});
            console.log(url);
        }


}

module.exports={  
    createEmpresa,
    createUsuario,
    login,
    addPhoto
}