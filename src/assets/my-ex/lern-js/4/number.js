let firstNum = +prompt("Введите первое число", "");
let secondNum = +prompt("Введите второе число", "");

alert( firstNum + secondNum );


let number;
number = prompt("Введите число", "");
while (number < 100) {
    if (number == null)
        break;
    number = prompt("Введите число", "");
}

function random(min, max) {
    return  min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    return Math.floor( min + Math.random() * (max + 1- min) );
}