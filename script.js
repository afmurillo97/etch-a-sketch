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
// button3 = slider size 
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
            if (count === 2){
                const buttonTonality = document.querySelector('.button-tonality');
                buttonTonality.style.background = colorPicked();
                num += 10;
                if (num === 100) {
                    num = 0;
                }
            }
            gridItem.style.background = colorPicked();
            isDrawing = true;
        });
        // while the user clicks, the background keep changing
        gridItem.addEventListener('mousemove', function(){
            if (isDrawing === true){
                gridItem.style.background = colorPicked();
            }
        });
        // if the user stop, the background color doesn't change
        gridItem.addEventListener('mouseup', function(){
                isDrawing = false; 
        });
    };
};
// return the choose color

let num = 0;

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




// button 2 = color picker
const button2 = document.querySelector('.button.button2');

const span = document.createElement('span');
span.textContent = 'Pencil Color';

const inputColor = document.createElement('input');
inputColor.classList.add('color-picker');
inputColor.setAttribute('type', 'color');
inputColor.setAttribute('value', '#181C25');

button2.appendChild(span);
button2.appendChild(inputColor);

// button1 = color random

const button1 = document.querySelector('.button.button1');

const spanRandom = document.createElement('span');
spanRandom.textContent = 'Random Color';

const buttonRandom = document.createElement('button');
buttonRandom.classList.add('button-random');
// buttonRandom.setAttribute('id', 'buttonRandom');

button1.appendChild(spanRandom);
button1.appendChild(buttonRandom);


// button0 = 10% more black

const button0 = document.querySelector('.button.button0');

const spanTonality = document.createElement('span');
spanTonality.textContent = 'Tonality Color';

const buttonTonality = document.createElement('button');
buttonTonality.classList.add('button-tonality');

button0.appendChild(spanTonality);
button0.appendChild(buttonTonality);

let count = 0;
function colorPicked() {
    // option 1 = color picker, option 2 = random
    if (count === 0){
        let color = inputColor.value;
        return color;
    } else if (count === 1) {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        let colorRandom = '#' + n.slice(0, 6) ;
        return colorRandom;
    } else if (count === 2){
        colorTonality = LightenDarkenColor(inputColor.value, num)
        return colorTonality;
    }
}

inputColor.addEventListener('click', () => {
    count = 0;
    // alert("button was clicked " + count);
});

buttonRandom.addEventListener('click', () => {
    count = 1;
    // alert("button was clicked " + count);
});

buttonTonality.addEventListener('click', () => {
    count = 2;
    // alert("button was clicked " + count);
});



function LightenDarkenColor(col, amt) {
  
    let usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    let num = parseInt(col,16);
    let r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

