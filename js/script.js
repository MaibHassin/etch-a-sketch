let display = document.querySelector('.display');
let gridSwitch = document.querySelector('.switch__switch');
let gridSizeValue = document.querySelector('#resolution');

Grid(gridSizeValue.value);

function generateGrid() {
    if (gridSizeValue.value > 100 || gridSizeValue.value < 5) {
        alert('please enter a number between 5 and 100');
        return;
    }
    display.innerHTML = "";
    gridSwitch.style.transform = '';


    Grid(gridSizeValue.value);
}

document.querySelector('.reset__button').onclick = (e) => {
    generateGrid();
    // return false to stop page from refreshing after pressing the enter button to submit the resolution size
    return false;
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
        gridSquare.style.height = `${squareSize}px`;
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.backgroundColor = '#fff';
        gridSquare.style.border = '0.5px solid #d9d9d9';
        gridSquare.style.zIndex = 2;

        gridContainer.appendChild(gridSquare);
    }

    // knobs animation
    let rightKnob = document.querySelector('.knob__vertical');
    let leftKnob = document.querySelector('.knob__horizontal');
    document.querySelector('.grid').addEventListener('mousemove', e => {
        if(e.movementY > 0) {
            switch(e.movementY) {
                case 1:
                    rightKnob.style.transform = 'rotate(15deg)';
                case 2:
                    rightKnob.style.transform = 'rotate(30deg)';
                case 3:
                    rightKnob.style.transform = 'rotate(45deg)';
                case 4:
                    rightKnob.style.transform = 'rotate(60deg)';
                case 5:
                    rightKnob.style.transform = 'rotate(75deg)';
                case 6:
                    rightKnob.style.transform = 'rotate(90deg)';
                default:
                    rightKnob.style.transform = 'rotate(120deg)';
            }
        } 
        else if(e.movementY < 0) {
            switch(e.movementY) {
                case 1:
                    rightKnob.style.transform = 'rotate(-15deg)';
                case 2:
                    rightKnob.style.transform = 'rotate(-30deg)';
                case 3:
                    rightKnob.style.transform = 'rotate(-45deg)';
                case 4:
                    rightKnob.style.transform = 'rotate(-60deg)';
                case 5:
                    rightKnob.style.transform = 'rotate(-75deg)';
                case 6:
                    rightKnob.style.transform = 'rotate(-90deg)';
                default:
                    rightKnob.style.transform = 'rotate(-120deg)';
            }
        }
        
        if(e.movementX > 0) {
            switch(e.movementX) {
                case 1:
                    leftKnob.style.transform = 'rotate(15deg)';
                case 2:
                    leftKnob.style.transform = 'rotate(30deg)';
                case 3:
                    leftKnob.style.transform = 'rotate(45deg)';
                case 4:
                    leftKnob.style.transform = 'rotate(60deg)';
                case 5:
                    leftKnob.style.transform = 'rotate(75deg)';
                case 6:
                    leftKnob.style.transform = 'rotate(90deg)';
                default:
                    leftKnob.style.transform = 'rotate(120deg)';
            }
        } 
        else if(e.movementX < 0) {
            switch(e.movementX) {
                case 1:
                    leftKnob.style.transform = 'rotate(-15deg)';
                case 2:
                    leftKnob.style.transform = 'rotate(-30deg)';
                case 3:
                    leftKnob.style.transform = 'rotate(-45deg)';
                case 4:
                    leftKnob.style.transform = 'rotate(-60deg)';
                case 5:
                    leftKnob.style.transform = 'rotate(-75deg)';
                case 6:
                    leftKnob.style.transform = 'rotate(-90deg)';
                default:
                    leftKnob.style.transform = 'rotate(-120deg)';
            }
        }
    });

}

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