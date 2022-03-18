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
sliderText.textContent = 'Pencil Size: 2';
sliderText.classList.add('pencil');
sliderText.classList.add();
// create an input range slider
const slider = document.createElement('input');
slider.classList.add('slider');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '1');
slider.setAttribute('max', '64');
slider.setAttribute('value', '2');

button3.appendChild(sliderText);
button3.appendChild(slider);

// attemp to the class "grid-container" in the Html
const gridContainer = document.querySelector('.grid-container');
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

    for (let i = 0; i < size * size; i++) {
        // create every 'div' and put them inside of "grid-container"
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

 function deleteGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);  
    }
 }


createGrid(2);
// updates the value of slider when this moves
slider.oninput = function() {
    sliderText.textContent = 'Pencil Size: ' + this.value;
    deleteGrid();
    createGrid(this.value);
}



