// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu: object): void {
  for (let key in menu) {
    if (!isNaN(+menu[key])) { // + try convert to number, and if convert string to number we have NaN
      menu[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };