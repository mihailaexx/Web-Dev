let user = {
  name: "John",
  age: 30
};


let clone1 = Object.assign({}, user);
console.log(JSON.stringify(user) === JSON.stringify(clone1)); // true, same content
console.log(user === clone1); // false
console.log(clone1.name); // John
console.log(clone1.age); // 30

let clone2 = {...user};
console.log(JSON.stringify(user) === JSON.stringify(clone2)); // true, same content
console.log(user === clone2); // false
console.log(clone2.name); // John
console.log(clone2.age); // 30