let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");

function sumInput() {
    let array = [];
    number = prompt("Введите число", "");
    while (number != null || number == "") {
        array.push(number);
        number = prompt("Введите число", "");
    }
    let sum = 0;
    for (let number of array) {
      sum += number;
    }
    return sum;
}

}