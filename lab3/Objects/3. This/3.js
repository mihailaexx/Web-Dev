let calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },

  sum() {
    return (this.a + this.b);
  },

  mul() {
    return (this.a * this.b);
  },

  // sum : () => {
  //   return this.a + this.b;
  // }
  //
  // mul : () => {
  //   return this.a * this.b;
  // }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
