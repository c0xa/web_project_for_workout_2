let nameJavaScript = prompt("Какое 'официальное' название JavaScript?", "");
if (nameJavaScript == "ECMAScript") {
    alert("Правильно!")
} else {
    alert("Не знаете? ECMAScript!");
}

let number = prompt("Введите число", "");
if (number > 0) {
    alert(1)
}
else if (number < 0) {
    alert(-1)
} else {
    alert(0);
}


let result;
let a = 2, b = 1;
result = (a + b < 4) ? 'Мало': 'Много';
alert(result)


let message, login = "Сотрудник";
message = (login == 'Сотрудник') ? 'Привет':
login == 'Директор' ? 'Здравствуйте':
login == '' ? 'Нет логина': 
'';
alert(message);