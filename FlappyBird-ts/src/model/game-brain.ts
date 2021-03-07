class GameScore {
    public name = '';
    public score = 0;
}

const gameCellPath: number = 0;
const gameCellTop: number = 1;
const gameCellBottom: number = -1;
const gameCellBird: number = 2;


export default class GameBrain {

    private rowCount: number = 20;
    private columnCount: number = 30;
    private score: GameScore = new GameScore();
    // private scoreBoard: number[] = [];
    private gameBoard: number[][] = this.createGameBoard();

    getColumnCount() {
        return this.columnCount;
    }

    getRowCount() {
        return this.rowCount;
    }

    insertBirdOnBoard(board: number[][], birdIndex: number=this.rowCount / 2) {
        if(board[1][birdIndex] != gameCellPath) {
            alert('Game over!')
        }
        if (board[0][birdIndex] == gameCellBird) {
            board[0][birdIndex] = gameCellPath;
        }
        else if (board[1][birdIndex] == gameCellBird) {
            board[1][birdIndex] = gameCellPath;
        }
        board[1][birdIndex] = gameCellBird;
        return board;
    }

    moveBirdUp() {
        let birdIndex = null;
        for (let index:number = 0; index < this.rowCount; index++) {
            if (this.gameBoard[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        if (birdIndex !== null && birdIndex > 1) {
            this.gameBoard[1][birdIndex] = gameCellPath;
            this.gameBoard[1][birdIndex - 1] = gameCellBird;
        }
    }

    moveBirdDown() {
        let birdIndex = null;
        for (let index = 0; index < this.rowCount; index++) {
            if (this.gameBoard[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        if (birdIndex !== null && birdIndex < this.rowCount - 2) {
            this.gameBoard[1][birdIndex] = gameCellPath;
            this.gameBoard[1][birdIndex + 1] = gameCellBird;
        }
    }

    createGameColumnWithObstacle(spaceBetween: number) {
        let top = this.randomIntFromTo(1, this.rowCount - 2 - spaceBetween);
        let bottom = top + spaceBetween;
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
            if (index % 10 == 0) {
                board.push(this.createGameColumnWithObstacle(5))
            }
            else {
                board.push(this.createGameColumn())
            }
        }
        return this.insertBirdOnBoard(board);
    }
    /*
    flapBird() {
        let birdIndex = this.getBirdPosition(this.gameBoard);
        this.gameBoard[1][birdIndex] == gameCellPath;
        this.gameBoard[1][birdIndex + 1] == gameCellBird
    }
    */

    moveBoard() {
        let birdIndex = this.getBirdPosition(this.gameBoard)
        this.gameBoard.shift();
        this.insertBirdOnBoard(this.gameBoard, birdIndex!)
        if (this.score.score % 10 == 0) {
            this.gameBoard.push(this.createGameColumnWithObstacle(5));
        } else {
            this.gameBoard.push(this.createGameColumn());
        }
        this.score.score++;
    }

    gameIsOver() {
        let birdIndex = this.getBirdPosition(this.gameBoard)
        if (this.gameBoard[1][birdIndex! + 1] !== gameCellPath) {
            return true;
        }
        else {
            return false;
        }
    }

    getBirdPosition(board: number[][]) {
        let birdIndex = null;
        for (let index: number = 0; index < this.rowCount; index++) {
            if (board[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        return birdIndex;
    }

    randomIntFromTo(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getGameBoard() {
        return this.gameBoard
    }

    gameCellPath() { return gameCellPath };
    gameCellTop() { return gameCellTop };
    gameCellBottom() { return gameCellBottom };
    gameCellBird() { return gameCellBird };


}