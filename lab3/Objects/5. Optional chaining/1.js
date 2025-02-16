let user = null;
let x = 0;
user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
alert(x); // 0, value not incremented


let userAdmin = {
  name: "John",
  admin() {
    alert("I am admin");
  }
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

alert(userAdmin?.["name"]);
alert(userGuest?.["name"]);

delete userAdmin?.name;
