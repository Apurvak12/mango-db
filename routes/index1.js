const express=require('express');
const router=express.Router();
// router.get('/contact',(req, res)=>{
//     res.send({name: 'Apurva Kulkarni'});
// });
// router.post('/contact',(req, res)=>{
//     console.log(req.body);
//     res.send({message: 'data get successfully'});
// });
// router.put('/contact/:id',(req, res)=>{
//     console.log(req.params);
//     res.send({message: 'data updated successfully'});
// });
// router.delete('/contact/:id',(req, res)=>{
//     res.send({message: 'data deleted successfully'});
// });

// module.exports=router;

// const express=require('express');
const ContactRouter=require('./contact');
router.use('/contact',ContactRouter);
module.exports=router;
