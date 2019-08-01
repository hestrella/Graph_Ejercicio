require('dotenv').config();
const {GraphQLServer}= require('graphql-yoga');
const {importSchema}= require('graphql-import');
const {makeExecutableSchema}=require ('graphql-tools');
const typeDefs= importSchema('./src/Schema.graphql');
const moongoose= require('mongoose');
const {AuthDirective} = require('../src/utils/directive');
const verifyToken= require('../src/utils/validarToken');
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
const {createEmpresa,createUsuario,login,addPhoto}= require('./resolvers/Mutation');



const resolvers ={
    Query: {
        getAllEmpresa,
        getUsuario
    },
    Mutation :{
        createEmpresa,
        createUsuario,
        login,
        addPhoto
    }

}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives :{
        auth: AuthDirective
    }

})
const server = new GraphQLServer({ 
    schema,
    context: async({request}) => verifyToken(request)
 })

server.start(() => console.log('Server is running on localhost:4000'))
