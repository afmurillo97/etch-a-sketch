// attemp to the class "grid-container" in the Html
const gridContainer = document.querySelector('.grid-container');
// create every 'div' and put them inside of "grid-container"
for (let i = 0; i < 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    
}
// attemp to the class "buttons" in the Html
const buttons = document.querySelector('.buttons');
// create every 'div' and put them inside of "buttons"
for (let i = 0; i < 4; i++) {
    const button = document.createElement('div')
    button.classList.add('button');
    button.classList.add('button'+i);
    buttons.appendChild(button)
}

// input range slider
const button3 = document.querySelector('.button.button3');

const sliderText = document.createElement('div');
sliderText.textContent = 'Pencil Size: ';
sliderText.classList.add();
sliderText.classList.add();
const slider = document.createElement('input');
slider.classList.add('slider');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '1');
slider.setAttribute('max', '64');
slider.setAttribute('value', '32');

button3.appendChild(sliderText);
button3.appendChild(slider);

