// console.log(__dirname);

// console.log(__filename);

// console.log(process.env.LANG);
// //global......
// // setTimeout(()=> {
// //     console.log("hello world");
// // },3000)
// let time =0;
// const interval = setInterval(()=>{
//     time += 2;
//     console.log(`time value is : ${time}`);
//     // console.log('interval',interval);
//     if(time>5){
//         clearInterval(interval);
//     }
// },3000)

// const operation = require('../appjs/operation');  //require for import....

// console.log('call add: ', operation.add(10,20));
// console.log('call sub: ',operation.sub(10,5));

const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());
const mainRouter = require('../appjs/routes/index1');
const dbconnection=require('../appjs/config/dbConfig')
app.use('/',mainRouter);

app.listen(PORT,()=> {
    console.log('server running at ',PORT);
    dbconnection.connectMyDb();
});
