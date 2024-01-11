const { Contact } = require('../models/contact');
const ContactRepository=require('../models/repo/ContactRepository');
// const getContactList=async(req,res)=>{
//     try{
//         let data=await ContactRepository.getContacts();
//         res.send(data);
//     }
//     catch(error){
//       console.log(error)
//         res.send('Opps, someting went wrong');
//     }
// };
// const getContactbyId =async(req,res)=>{
//     try{
//         let data=await ContactRepository.getContact(req.params.id);
//         console.log(data)
//         res.send({
//           data,
//           message:'contact details'
//         })
//     }catch(error){
//       console.log(error)
//      res.send('Opps, something went wrong!!');
//     }
//     };
const getContactbyName=async(req,res)=>{
  try{
    let data=await ContactRepository.getContactss({name:req.params.name});
    console.log(data)
    res.send({
      data,message:'user details'
    })
  }catch(error){
    console.log(error)
  res.send('Opps,something went wrong!!');
}
}
   const postContact=async(req,res)=>{
    try{
      console.log('Body',req.body);
      let data=await ContactRepository.addContact(req.body);
      res.send({
        data,
        message:'added'
      })
  }catch(error){
    console.log(error)
   res.send('Opps, something went wrong!!');
  }
   };
  //   const deleteContact =async(req,res)=>{
  //     try{
  //         await ContactRepository.deleteOneContact(req.params.id);
  //         res.send({
  //           message:'delete successfully'
      //     });
      // }catch(error){
      //   console.log(error)
      //  res.send('Opps, something went wrong!!');
      // }
      // };
      // const putContact=async(res,req)=>{
      //   try{
      //     let existingData=await ContactRepository.getContact(req.params.id);
      //     if(!existingData){
      //       return res.send('No data with this id');
    //       }
    //       console.log('Exsiting data',existingData);
    //       const result=await ContactRepository.updateOneContact(
    //         {_id:existingData.id},
    //         req.body
    //       );
    //     console.log('Result',result);
    //     return res.send({message:'updated'})
    //   }catch(error){
    //     console.log('Error',error);
    //     res.send('opps,something went wrong');
    //   }
    // };
    module.exports={
      // getContactbyId,getContactList,
      postContact,
      // deleteContact,
      // putContact,
      getContactbyName,
    }