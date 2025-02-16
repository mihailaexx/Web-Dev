let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]); // we can access the data using the symbol as the key
console.log(user);

let user2 = Object.assign({}, user);
console.log(user2);


user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },

  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }
};
console.log(String(user));
console.log(+user);
// console.log(user + 500);

