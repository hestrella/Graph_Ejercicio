const cloudinary= require('cloudinary')

const storage = ({stream})=>{

    cloudinary.config({ 
        cloud_name: process.env.NAME_API, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET 
      });
      
      return new Promise ((resolve,rejected)=>{
        const buffer=cloudinary.v2.uploader.upload_stream((errr,res)=>{
            if (!errr)
            {
                console.log(errr);
                rejected(errr);
            }
            resolve(res)

        })
        stream.pipe(buffer)
      })
}

module.exports= storage;