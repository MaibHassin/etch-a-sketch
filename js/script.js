let display = document.querySelector('.display');

function generateGrid() {
    let gridSizeValue = document.querySelector('#resolution');
    if (gridSizeValue.value > 100 || gridSizeValue.value < 5) {
        alert('please enter a number between 5 and 100');
        return;
    }
    display.innerHTML = "";



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
        gridSquare.style.backgroundColor = 'red';
        gridSquare.style.border = '0.5px solid #fff';
        gridSquare.style.zIndex = 2;

        gridContainer.appendChild(gridSquare);
    }

}

let gridSwitch = document.querySelector('.switch__switch')
gridSwitch.onchange = () => alert('ok');

gridSwitch.onclick = () => {
    if (gridSwitch.style.transform == "" || gridSwitch.style.transform == 'translateX(0px)') {
        gridSwitch.style.transform = 'translateX(18px)';

        let gridSquares = document.querySelectorAll('.gridSquare');
        gridSquares.forEach(square => {
            square.style.border = 'none';
        });
    } else {
        gridSwitch.style.transform = 'translateX(0px)';
        let gridSquares = document.querySelectorAll('.gridSquare');
        gridSquares.forEach(square => {
            square.style.border = '0.5px solid #fff';
        });
    }
}