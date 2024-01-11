console.log("hello world");
let arr=[1,2,3,4]
console.log("array" +arr);
// string template ==> use this--> `....`back tick
const str1=`array :${arr}`;
console.log(str1);

//condin statement
const str2=`array :${arr.length}`;
console.log(str2);

//shortend...
const a=10;
const b=20;
console.log(`A is ${a===b ? 'equals' : 'not equals '} to b `);

//object...
let obj={
    fn: 'tommy',
    ln: 'doe',
};
console.log(obj);

console.log(obj.fn);
obj.fn='jayesh';
console.log(obj.fn);

obj={
    email:'tommy@gmail.com'
};
console.log(obj);

//to check datatype-->typeof
let num=10;
console.log(typeof num);

//function
function add(a,b){
   return a+b;
}
console.log(add(5,100));
//diff way to write function
const add1 =(a,b)=>{};    //datatype object
const add3 = function (a,b) {};

console.log(typeof add3);
