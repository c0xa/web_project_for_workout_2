for (let i = 2; i < 11; i += 2) {
    console.log(i);
}

let i = 0;
while (i < 3) { 
    console.log( `number ${i++}!` );
}

let number;
number = prompt("Введите число", "");
while (number < 100 || number == null) {
    number = prompt("Введите число", "");
}

let MaxNumber;
MaxNumber = prompt("Введите число", "");
for (let i = 1; i <= MaxNumber; i++) {
    if (i == 2)
        console.log(i);
    for (let j = 2; j < i; j++) {
        if (i == j + 1) {
            console.log(i);
        }
        else if (i % j == 0) {
            break;
        }
    }
}