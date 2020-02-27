let display = document.querySelector('.display');
let gridSwitch = document.querySelector('.switch__switch');
let gridSizeValue = document.querySelector('#resolution');
let selectedColor = '#000';

Grid(gridSizeValue.value);

function generateGrid() {
    if (gridSizeValue.value > 50 || gridSizeValue.value < 5) {
        alert('please enter a number between 5 and 50');
        return;
    }
    display.innerHTML = "";
    gridSwitch.style.transform = '';

    Grid(gridSizeValue.value);
}

document.querySelector('.reset__button').onclick = () => {
    generateGrid();
    // return false to stop page from refreshing after pressing the enter button to submit the resolution size
    return false;
}

document.querySelector('.clear__display').onclick = () => {
    display.innerHTML = "";
    gridSwitch.style.transform = '';

    Grid(gridSizeValue.value);
}

function Grid(size) {

    let gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');
    gridContainer.style.height = '100%';
    gridContainer.style.width = '100%';
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    display.appendChild(gridContainer);

    // size of each generated square in pixels
    let squareSize = gridContainer.offsetWidth / size;

    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.classList.add(`${i}gridSquare`);
        gridSquare.style.height = `${squareSize}px`;
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.backgroundColor = '#fff';
        gridSquare.style.border = '0.5px solid #d9d9d9';
        gridSquare.style.zIndex = 2;

        gridContainer.appendChild(gridSquare);
    }
}

// knobs animation
let rightKnob = document.querySelector('.knob__vertical');
let leftKnob = document.querySelector('.knob__horizontal');

let directionX = "";
let oldX = 0;

let directionY = "";
let oldY = 0;

let mousemovemethod = function (e) {

    if (e.pageX < oldX) {
        directionX = "left"
        // add key frame animation
    } else if (e.pageX > oldX) {
        directionX = "right"
        // add key frame animation
    }
    
    if (e.pageY < oldY) {
        directionY = "up"
        // add key frame animation
    } else if (e.pageY > oldY) {
        directionY = "down"
        // add key frame animation
    }

    console.log(directionX, directionY);
    

    oldX = e.pageX;
    oldY = e.pageY;
}

// document.querySelector('.grid').addEventListener('mousemove', mousemovemethod);

// grid on/off functionality

gridSwitch.onclick = () => {
    if (gridSwitch.style.transform == '') {
        gridSwitch.style.transform = 'translateX(18px)';

        let gridSquares = document.querySelectorAll('.gridSquare');
        gridSquares.forEach(square => {
            square.style.border = 'none';
        });
    } else {
        gridSwitch.style.transform = '';
        let gridSquares = document.querySelectorAll('.gridSquare');
        gridSquares.forEach(square => {
            square.style.border = '0.5px solid #d9d9d9';
        });
    }
}

// select color
let colorButton = document.querySelectorAll('.color__button');

colorButton.forEach(button => button.onclick = (e) => {
        selectedColor = e.target.dataset.color
        document.querySelector('.selected').classList.remove('selected');
        e.target.classList.add('selected');
});

// random color generator
// '#'+(Math.random()*0xFFFFFF<<0).toString(16);
