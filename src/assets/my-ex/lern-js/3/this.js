let calculator = {
  read() { 
      this.a = +prompt("Введите первое число", ""),
      this.b = +prompt("Введите второе число", "")
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};