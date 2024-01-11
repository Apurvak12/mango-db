const {Contact}=require('../contact');

// const getContacts=async(query)=>await Contact.find(query);
// const getContact =async(id)=>{
//     try{
//         return await Contact.findById(id);
//     }catch(error){
//         throw new Error(error);
//     }
// };
const getContactss=async(query)=>{
    try{
        return await Contact.findOne(query);
    }catch(error){
        throw new Error(error);
    }
};

const addContact =async(body)=>{
    try{
      return await Contact.create(body);
    }catch(error){
        throw new error(error);
    }
};

const updateOneContact =async(query,body)=>{
    try{
        await Contact.updateOne(query,body);
    }catch(error){
        throw new error(error);
    }
};

const deleteOneContact =async(id)=>{
    try{
        const query={_id:id};
      await Contact.deleteOne(query);
    }catch(error){
        throw new Error(error);
    }
};

module.exports={
    // getContacts,
    // getContact,
    addContact,
    // deleteOneContact,
    // updateOneContact,
    getContactss,
}