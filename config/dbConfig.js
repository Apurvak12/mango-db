const mongoose= require('mongoose');
const connectMyDb=()=>{
    mongoose.connect('mongodb://localhost:27017/db-practice');
    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully');
    });
    mongoose.connection.on('error',(error)=>{
        console.log('Error in db connection',error);
    });
};
module.exports={connectMyDb};