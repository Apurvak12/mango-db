function add(a,b){
    return a+b;
 }

 function sub(a,b){
    return a-b;
 }

//  module.exports=add;
module.exports.add=add;
module.exports.sub=sub;

// // 3rd way
// module.exports={
//    add,
//    sub,
// };