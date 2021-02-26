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
            this.gameBoard.push(this.createGameColumn())
        }
    }

    getGameBoard() {
        return this.gameBoard;
    }

    gameCellPath() {return gameCellPath};
    gameCellTop() {return gameCellTop};
    gameCellBottom() {return gameCellBottom};

}