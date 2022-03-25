// attemp to the class "buttons" in the Html
const buttons = document.querySelector('.buttons');
// create every 'div' and put them inside of "buttons"
for (let i = 0; i < 4; i++) {
    const button = document.createElement('div')
    button.classList.add('button');
    button.classList.add('button'+i);
    buttons.appendChild(button)
}


// attemp to slider
const button3 = document.querySelector('.button.button3');

// create an div with the current value of slider
const sliderText = document.createElement('div');
sliderText.textContent = 'Pencil Size: 10';
sliderText.classList.add('pencil');
sliderText.classList.add();
// create an input range slider
const slider = document.createElement('input');
slider.classList.add('slider');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '1');
slider.setAttribute('max', '64');
slider.setAttribute('value', '10');

button3.appendChild(sliderText);
button3.appendChild(slider);

// attemp to the class "grid-container" in the Html
const gridContainer = document.querySelector('.grid-container');
// let currentColor = inputColor.value;
function createGrid(size) {
    let result = [];
    let randomStatus = 0;

    // with the size, I make an array full of 'auto'
    for (let i = 0; i < size ; i++){
        result.push('auto');
    }
    // transform my array in an 'string' 
    let textColumns = result.join(' ');
    // add my css property for auto-resize the order of the columns
    gridContainer.style.gridTemplateColumns =  textColumns;
    let isDrawing = false;

    for (let i = 0; i < size * size; i++) {
        // create every 'div' and put them inside of "grid-container"
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        // when the user clicks, the background in current div changes
        gridItem.addEventListener('mousedown', function(){ 
            gridItem.style.background = colorPicked();
            gridItem.style.cursor = 'alias';
            isDrawing = true;
        });
        // while the user clicks, the background keep changing
        gridItem.addEventListener('mousemove', function(){
            if (isDrawing === true){
                gridItem.style.background = colorPicked();
                gridItem.style.cursor = 'alias';
            }
        });
        // if the user stop, the background color doesn't change
        gridItem.addEventListener('mouseup', function(){
                isDrawing = false; 
                gridItem.style.cursor = 'pointer';
        });
    };
};
// return the choose color



function deleteGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);  
    }
 }

createGrid(10);
// updates the value of slider when this moves
slider.oninput = function() {
    sliderText.textContent = 'Pencil Size: ' + this.value;
    deleteGrid();
    createGrid(this.value);
}




// button 2 with an 'span' inside
const button2 = document.querySelector('.button.button2');

const span = document.createElement('span');
span.textContent = 'Pencil Color';

const inputColor = document.createElement('input');
inputColor.classList.add('color-picker');
inputColor.setAttribute('type', 'color');
inputColor.setAttribute('value', '#181C25');

button2.appendChild(span);
button2.appendChild(inputColor);

// button1 = to button2 without the color picker

const button1 = document.querySelector('.button.button1');

const spanRandom = document.createElement('span');
spanRandom.textContent = 'Random Color';

const buttonRandom = document.createElement('button');
buttonRandom.classList.add('button-random');
buttonRandom.setAttribute('id', 'buttonRandom');

button1.appendChild(spanRandom);
button1.appendChild(buttonRandom);


function colorPicked() {
    if (count === 1){
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        let colorRandom = '#' + n.slice(0, 6) ;
        return colorRandom;
    } else if (count === 0) {
        let color = inputColor.value;
        return color;
    }
}
let count = 0;
buttonRandom.addEventListener('click', () => {
    count = 1;
    // alert("button was clicked " + count);
});

inputColor.addEventListener('click', () => {
    count = 0;
    // alert("button was clicked " + count);
});