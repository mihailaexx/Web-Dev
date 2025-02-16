function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }

  this.sum = () => {
    return (this.a + this.b);
  }

  this.mul = () => {
    return (this.a * this.b);
  }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
