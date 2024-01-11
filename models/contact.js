const mongoose=require('mongoose');
const{Schema}=mongoose;
const ContactSchema=new Schema({
    name:{
    type:String,
},
age:{
    type: Number,
},
});
const Contact=mongoose.model('Contact',ContactSchema);
exports.Contact=Contact;