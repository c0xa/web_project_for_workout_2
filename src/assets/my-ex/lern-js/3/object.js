let user = {};
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name;

function isEmpty(obj) {
  for (let key in obj)
      return false;
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sumSalary = 0;
for (let key in salaries) {
  sumSalary += salaries[key];
}
alert(sumSalary);


function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof(menu[key]) == 'number') {
      menu[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
