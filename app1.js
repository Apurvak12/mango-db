// const express = require('express'); //()=>direct no need of 3rd line


// const app1= express();
// const PORT=3000;
// const index1Router=require('./routes/index1');
// const dbconnection= require('./config/dbConfig')
// //const dbconnection= require('./config/dbCongwg')
// app1.use('/',mainRouter)
// app1.listen(PORT,()=>{
//   console.log('server is running is port',PORT);
//   dbconnection.connectMyDb();

// });

// app1.use(express.json());
// const middleware =(req,res,next)=>{
//     console.log('In middleware for url',req.url);
//     next();
// };
// app1.get('/',function(req,res){
//     res.send({message:'hello world'});
// });
// app1.use('/v1',middleware, index1Router);

// app1.listen(PORT, ()=>{
//     console.log('Server is running at port', PORT);
// });

