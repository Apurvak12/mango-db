const http = require('http');
const fs= require('fs');
const routes = async(req,res)=>{
    try{
        const readFileData=await fs.readFileSync('./index.html','utf-8');
        console.log('File Data:' ,readFileData);
    }catch(error){
        res.end('internal server error');
    }
}
const app=http.createServer(routes);