interface val{
    a:string;
    b:number;
    c:boolean;
 };
 
 
 const object1:val = {
     a: 'somestring',
     b: 42,
     c: false
   };
   
 // object.values(object_name)
 // give object value in array formate
 
 
   console.log(Object.values(object1));



//    Write a function that takes an object and returns an array of its values