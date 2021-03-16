import mainView from './views/mainview.js';
import gameView from './views/gameview.js';
import controlView from './views/controlview.js';
import GameBrain from './model/gamebrain.js';
import GameController from './controllers/gamecontroller.js';
import LeaderboardController from './controllers/leaderboardcontroller.js';

let view = mainView();
document.body.append(view);
let ctrl_view = controlView(gameControlClick);
let game_view = gameView(gameMoveKeyDown);
view.append(ctrl_view);
view.append(game_view);

let gameBrain = new GameBrain();
let gameController = new GameController(gameBrain, game_view);
let leaderboardController = new LeaderboardController(gameBrain, game_view);

function gameControlClick(e) {
    switch (e.target.id) {
        case 'game':
            gameController.isPaused = false;
            leaderboardController.stop();
            if (!gameController.isRunning) {
                gameController.run();
            }
            break;
        case 'leaderboard':
            gameController.stop();
            leaderboardController.run();
            break;
        case 'stop':
            if (gameController.isRunning) {
                let stop = confirm('Are you sure you want to stop?')
                if (stop) {
                    gameController.stop();
                    leaderboardController.run()
                }
                else {
                    if (!gameController.isRunning) {
                        gameController.run();
                    }
                }
            }
            break;
        case 'pause':
            gameController.isPaused = true;
            gameController.stop();
        default:
            break;
    }
}

function gameMoveKeyDown(event) {
    if (event.key === 'ArrowUp' || event.key === 'w') {
        gameController.moveBirdUp();
    }
    if (event.key === 'ArrowDown' || event.key === 's') {
        gameController.moveBirdDown();
    }
}

leaderboardController.run();

window.addEventListener('resize', () => {
    gameController.resizeUi();
    leaderboardController.resizeUi();
})

















































/*
const ROW_COUNT = 40;
const COL_COUNT = 60;

let viewPortHeight = window.innerHeight;
let rowHeight = viewPortHeight / ROW_COUNT;

let viewPortWidth = window.innerWidth;
let colWidth = viewPortWidth / COL_COUNT;

document.body.style = 'margin: 0; padding: 0';

let gameBoard = document.createElement('div'); // game board Div

function randomIntFromTo(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createColumn(colIndex) {
    let randomTop = randomIntFromTo(3, ROW_COUNT - 8);
    let colElement = document.createElement('div'); // create column div
    colElement.classList.add('id-col-' + colIndex);
    colElement.style.minWidth = colWidth + 'px';
    colElement.style.maxWidth = colWidth + 'px';
    colElement.style.float = 'left';

    for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
        let rowElement = document.createElement('div'); // create row elements inside column div
        rowElement.classList.add('id-col-' + colIndex + '-row-' + rowIndex);
        rowElement.style.minHeight = rowHeight + 'px';
        rowElement.style.maxHeight = rowHeight + 'px';
        if (colIndex % Math.floor(COL_COUNT / 6 * 2) == 0) {
            createObstacle(10, rowIndex, rowElement, randomTop);
        } else {
            createEdges(rowIndex, rowElement);
        }
        colElement.append(rowElement);
    }
    return colElement;
}



function createEdges(rowIndex, rowElement) {
    if (rowIndex < 2 || rowIndex > ROW_COUNT - 3) { // create upper and lower edge
        rowElement.style.backgroundColor = '#FF00FF';
    }
}

function createObstacle(spaceBetween, rowIndex, rowElement, randomTop) {
    if (rowIndex < randomTop || rowIndex > randomTop + spaceBetween) { // create obstacle
        rowElement.style.backgroundColor = '#FF00FF'
    }
}

function createMovingObstacle(spaceBetween, rowIndex, rowElement, randomTop) {
    if (rowIndex < randomTop || rowIndex > randomTop + spaceBetween) { // create obstacle
        rowElement.style.backgroundColor = '#FF00FF'
        setInterval(() => {

        }, 100);
    }
}

function createBoard() {
    let board = document.createElement('div');
    for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {
        let colElement = createColumn(colIndex);
        board.append(colElement);
    }
    return board;
}

gameBoard = createBoard()

document.body.append(gameBoard);

function moveScreen() {

    setInterval(() => {
        let child = gameBoard.firstElementChild;
        if (child !== null) {
            let childClassNameArray = child.className.split('-');
            let childId = childClassNameArray[childClassNameArray.length - 1]
            let colElement = createColumn(childId)
            child.remove();
            gameBoard.append(colElement)
        }
    }, 1);

}

// moveScreen()
*/