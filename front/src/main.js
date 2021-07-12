const store = createStore(reducer);

store.subscribe((state) => console.log(state));

let app = document.getElementById('app');

console.log("hi");