const express = require('express'); //()=>direct no need of 3rd line


const app1= express();
const PORT=3000;
todo.get('/todo',(req, res)=>{
    res.send({name: 'Apurva Kulkarni'});
});
todo.post('/todo',(req, res)=>{
    console.log(req.body);
    res.send({message: 'data get successfully'});
});
todo.put('/todo/:id',(req, res)=>{
    console.log(req.params);
    res.send({message: 'data updated successfully'});
});
todo.delete('/todo/:id',(req, res)=>{
    res.send({message: 'data deleted successfully'});
});
todo.listen(PORT, ()=>{
    console.log('Server is running at port', PORT);
});
