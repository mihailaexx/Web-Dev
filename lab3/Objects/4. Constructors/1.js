let user = {
  name: "John",
  age: 30
}

function A() {
  return user;
}
function B() {
  return user;
}

let a = new A();
let b = new B();

console.log( a == b ); // true, bc of not deep cloning of user object (covered at 2. Cloning)