interface vale{
    a?:number;
    b?:number;
    c?:number;
};


const target:vale = { a: 1, b: 2 };
const source:vale= { b: 4, c: 5 };

const returnedTarget:vale = Object.assign(target, source);

console.log(target);
// Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// true


// Write a function that takes two objects and merges them into a single object.