const store = createStore(reducer);

store.subscribe((state) => console.log(state));

let app = document.getElementById('app');

let place1 = new Office("1");
let place2 = new Office("2");
let place3 = new Office("3");
let place4 = new Office("4");
let place5 = new Office("5");
let place6 = new Office("6");
app.append(place1.element, place2.element, place3.element, place4.element, place5.element, place6.element);
