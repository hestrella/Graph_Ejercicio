const Empresa = require('../../models/EMPRESAS');

const createEmpresa = async (root,{data})=>{
           
    let newEmpresa=new Empresa ({
        cNombreEmpresa
    })
   
    const miEmpresa= await newEmpresa.save();
   
    return miEmpresa;
}


const createUsuario = async (root,{data}) =>{
    let newUsuario = new Usuario({
        ...data
    })

    const miUsuario = await newUsuario.save();
    return miUsuario;
}


module.exports={  
    createEmpresa,
    createUsuario

}