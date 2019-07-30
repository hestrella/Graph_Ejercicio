require('dotenv').config();
const {GraphQLServer}= require('graphql-yoga');
const {importSchema}= require('graphql-import');
const typeDefs= importSchema('./src/Schema.graphql');
const moongoose= require('mongoose');

moongoose.connect(process.env.cUrlMongoose,(errr)=>{
    if (!errr)
    {
        console.log('Conectado a Mondongo');
    }
    else
    {
        console.log(errr)
    }
})


const {getAllEmpresa,getUsuario}= require('./resolvers/Querys');
const {createEmpresa,createUsuario}= require('./resolvers/Mutation');



const resolvers ={
    Query: {
        getAllEmpresa,
        getUsuario
    },
    Mutation :{
        createEmpresa,
        createUsuario
    }

}

const server = new GraphQLServer({typeDefs,resolvers});
server.start(()=>console.log('Servidor Listo'));
