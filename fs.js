const fs = require('fs');
// fs.readFile('./operation.js','utf-8',(err,data)=>{
//     if(err){
//         console.log('error',err);
//     }
//     else{
//         console.log('success',data);
//     }
// });
// fs.writeFile('./newoperation.js','hello world',(err,data)=>{
//     if(err){
//         console.log('error',err);
//     }
//     else{
//         console.log('success',data);
//     }
// });

// fs.unlink('./newoperation.js',(err,data)=>{
//     if(err){
//         console.log('error',err);
//     }
//     else{
//         console.log('success',data);
//     }
// });
try{
const readFile=fs.existsSync('./roperation.js','utf-8');
if(readFile){
    console.log('read file', readFile);
const unlink=fs.unlinkSync('./roperation.js');
console.log('unlink', unlink);
}
else{
const writeFile=fs.writeFileSync('./roperation.js','hello');
console.log('write file', writeFile);
}
}
catch(err){
    console.log('error',err);
}