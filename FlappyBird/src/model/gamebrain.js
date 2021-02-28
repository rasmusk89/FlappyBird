class GameScore {
    constructor() {
        this.name = '';
        this.score = 0;
    }
}

export const gameCellPath = 0;
export const gameCellTop = 1;
export const gameCellBottom = -1;
export const gameCellBird = 2;


export default class GameBrain {

    constructor(rowCount = 20, columnCount = 30) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;

        this.scoreBoard = [];
        this.gameBoard = this.createGameBoard();

    }

    insertBirdOnBoard(board) {
        if(board[0][this.rowCount/2] == gameCellBird) {
            board[0][this.rowCount/2] = gameCellPath;
        }
        board[1][this.rowCount/2] = gameCellBird;
        return board;
    }

    moveBirdUp() {
        let birdIndex;
        for (let index = 0; index < this.rowCount; index++) {
            if (this.gameBoard[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        if(birdIndex !== null) {
            this.gameBoard[1][birdIndex] = gameCellPath;
            this.gameBoard[1][birdIndex - 1] = gameCellBird;
        }
    }

    createGameColumnWithObstacle(spaceBetween) {
        let top = this.rowCount / 2 - spaceBetween / 2;
        let bottom = this.rowCount / 2 + spaceBetween / 2;
        let res = [];
        for (let index = 0; index < this.rowCount; index++) {
            if (index < top) {
                res.push(gameCellTop)
            }
            else if (index > bottom) {
                res.push(gameCellBottom)
            }
            else {
                res.push(gameCellPath)
            }
        }
        return res;
    }

    createGameColumn() {
        let res = [];
        for (let index = 0; index < this.rowCount; index++) {
            if (index < 1) {
                res.push(gameCellTop)
            }
            else if (index > this.rowCount - 2) {
                res.push(gameCellBottom)
            }
            else {
                res.push(gameCellPath)
            }
        }
        return res;
    }

    createGameBoard() {
        let board = [];
        for (let index = 0; index < this.columnCount; index++) {
            if (index % 5 == 0) {
                board.push(this.createGameColumnWithObstacle(2))
            }
            else {
                board.push(this.createGameColumn())
            }
        }
        return this.insertBirdOnBoard(board);
    }

    moveBoard() {
        this.gameBoard.shift();
        this.insertBirdOnBoard(this.gameBoard)
        this.gameBoard.push(this.createGameColumnWithObstacle(2));

    }

    getGameBoard() {
        return this.gameBoard
    }

    gameCellPath() { return gameCellPath };
    gameCellTop() { return gameCellTop };
    gameCellBottom() { return gameCellBottom };
    gameCellBird() { return gameCellBird };


}