
const print = [
    {
        title:'Welcome to Etch a Sketch',
        instructions:"Draw anithing!!! it's free"
    }
];

console.log(print[0].title);
console.log(print[0].instructions);

let result = print[0].title;

const h3 = document.createElement('h3');
h3.textContent = 'result';

const h1 = document.querySelector(h3.textContent);
