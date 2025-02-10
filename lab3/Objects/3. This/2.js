function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser(); // {name: "John", ref: *global this*}

console.log( user.ref.name ); // undefined, bc global this doesn't have name
