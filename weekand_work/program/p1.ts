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
  
// object.keys(object_name)
// give object key value in array formate


  console.log(Object.keys(object1));
//   Write a function that takes an object and returns an array of its keys.