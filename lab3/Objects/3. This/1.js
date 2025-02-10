// let fun = () => {
//   console.log(this.name);
// }
//
// fun(); // undefined, bc global this looks {}

let user = {
  name: "Mikhail",
  hi() {
    let fun = () => {
      console.log(this.name);
    }
    fun();
  }
}
user.hi(); // Mikhail, bc this looks obj
