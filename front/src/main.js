const store = createStore(reducer);

store.subscribe((state) => console.log(state));

let app = document.getElementById('app');

let office = new Office();

console.log("hi");