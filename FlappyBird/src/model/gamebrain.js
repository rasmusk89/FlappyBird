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
        this.score = new GameScore();

        this.scoreBoard = [];
        this.gameBoard = this.createGameBoard()
        
    }

    getLeaderboard() {        
        return this.scoreBoard.sort((a, b) => (a.score < b.score) ? 1 : -1);;
    }

    insertBirdOnBoard(board, birdIndex = this.rowCount / 2) {
        if (board[0][birdIndex] == gameCellBird) {
            board[0][birdIndex] = gameCellPath;
        }
        else if (board[1][birdIndex] == gameCellBird) {
            board[1][birdIndex] = gameCellPath;
        }
        board[1][birdIndex] = gameCellBird;
        return board;
    }

    isGameOver() {
        if (this.gameBoard[2][this.getBirdPosition(this.gameBoard)] != gameCellPath) {
            return true;
        }
        return false;
    }

    moveBirdUp() {
        let birdIndex;
        for (let index = 0; index < this.rowCount; index++) {
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
        let birdIndex;
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

    createGameColumnWithObstacle(spaceBetween) {
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

    flapBird() {
        let birdIndex = this.getBirdPosition(this.gameboard);
        this.gameBoard[1][birdIndex] == gameCellPath;
        this.gameBoard[1][birdIndex + 1] == gameCellBird
    }

    moveBoard() {
        let spaceBetween = this.getSpaceBetweenObstacles();
       
        let birdIndex = this.getBirdPosition(this.gameBoard)
        this.gameBoard.shift();
        this.insertBirdOnBoard(this.gameBoard, birdIndex)
        if (this.score.score % 10 == 0) {
            this.gameBoard.push(this.createGameColumnWithObstacle(spaceBetween));
        } else {
            this.gameBoard.push(this.createGameColumn());
        }
        this.score.score++;
    }

    getSpaceBetweenObstacles() {
        if(this.score.score < 100) return 5;
        if(this.score.score < 200) return 3;
        if(this.score.score < 300) return 1;
    }

    getBirdPosition(board) {
        let birdIndex;
        for (let index = 0; index < this.rowCount; index++) {
            if (board[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        return birdIndex;
    }

    randomIntFromTo(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getGameBoard() {
        return this.gameBoard
    }

    setNewGameBoard() {
        this.gameBoard = this.createGameBoard();
    }

    gameCellPath() { return gameCellPath };
    gameCellTop() { return gameCellTop };
    gameCellBottom() { return gameCellBottom };
    gameCellBird() { return gameCellBird };


}