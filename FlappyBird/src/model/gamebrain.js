class GameScore {
    constructor() {
        this.name = '';
        this.score = 0;
    }
}

export const gameCellPath = 0;
export const gameCellTop = 1;
export const gameCellBottom = -1;


export default class GameBrain {

    constructor(rowCount = 20, columnCount = 30) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;

        this.scoreBoard = [];
        this.gameBoard = [];

        this.initializeBoard();
    }

    createGameColumnWithObstacle(spaceBetween) {
        let top = this.rowCount / 2 - spaceBetween / 2;
        console.log(top)
        let bottom = this.rowCount / 2 + spaceBetween / 2;
        console.log(bottom)
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

    initializeBoard() {
        for (let index = 0; index < this.columnCount; index++) {
           if(index % 5 == 0) {
            this.gameBoard.push(this.createGameColumnWithObstacle(2))

           }
           else {
            this.gameBoard.push(this.createGameColumn())

           }
            
        }
    }

    getGameBoard() {
        return this.gameBoard;
    }

    gameCellPath() { return gameCellPath };
    gameCellTop() { return gameCellTop };
    gameCellBottom() { return gameCellBottom };
    gameCellObstacle() { return gameCellObstacle };


}