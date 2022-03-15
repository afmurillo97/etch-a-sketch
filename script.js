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
