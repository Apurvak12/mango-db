const express=require('express');
const contact=express();
const PORT=3000;

contact.use(express.json());

contact.get('/contact',(req,res)=>{          //to fetch
     res.send({name: "Swanandi Kulkarni"});
});

contact.post('/contact',(req,res)=>{      //to add
    console.log(req.body);
    res.send({message: 'data get successfully'});
});

contact.put('/contact/:id/:number',(req, res)=>{             //to update
    console.log(req.params);
    res.send({message: 'data updated successfully'});
});

contact.patch('/contact/:id/:number',(req, res)=>{       //to parcel update
    console.log(req.params.id);
    console.log(req.params.number);
    res.send({message: 'data parcel successfully'});
});

contact.delete('/contact/:id/:number',(req, res)=>{        //to remove or delete
    res.send({message: 'data deleted successfully'});
});

contact.listen(PORT,()=>{
    console.log("server is running 3000");
})
