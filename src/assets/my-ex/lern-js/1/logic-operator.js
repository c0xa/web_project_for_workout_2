let age = 13;
alert(age >= 14 && age <= 90);

alert(!(age >= 14 && age <= 90));

alert(age < 14 || age > 90);

let nameUser = prompt("Кто там?", "")
if (nameUser == "Админ") {
    let passwordUser = prompt("Пароль?", "");
    if (passwordUser == "Я главный") {
        alert("Здравствуйте");
    }
    else if (passwordUser == null) {
        alert("Отмена");
    }
    else {
        alert("Неверный пароль");
    }
}
else if (nameUser == null) {
    alert("Отмена");
}
else {
    alert("Я вас не знаю");
}