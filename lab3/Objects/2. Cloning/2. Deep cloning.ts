let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone1 = Object.assign({}, user);
let clone2 = {...user};
console.log(user.sizes === clone1.sizes); // true, because reference was copied
console.log(user.sizes === clone2.sizes);
user.sizes.height = 183;
console.log(clone1.sizes.height); // 183, because we have reference to sizes object
console.log(clone2.sizes.height);

let clone3 = structuredClone(user);
console.log(user.sizes === clone3.sizes); // false, because we have deep cloning
clone3.sizes.height = 184;
console.log(user.sizes.height); // 183
console.log(clone3.sizes.height); // 184