function checkAge(age) {
    return ((age > 18) ? 1 : confirm('Родители разрешили?'));
}

function checkAge(age) {
    return ((age > 18) || confirm('Родители разрешили?'));
}

function min(a, b) {
    if (a > b) {
        return (b);
    }
    return (a);
}

function pow(x, n) {
    if (n == 0)
        return 1;
    if (n > 1)
        return (x * pow(x, --n));
    return x;
}

console.log(pow(1, 100));
console.log(pow(2, 0));
console.log(pow(2, 6));

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
  
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")  
);
