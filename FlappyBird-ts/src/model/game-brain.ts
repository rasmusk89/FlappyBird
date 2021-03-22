class GameScore {
    public name: string = '';
    public score: number = 0;
}

const gameCellPath: number = 0;
const gameCellTop: number = 1;
const gameCellBottom: number = -1;
const gameCellBird: number = 2;


export default class GameBrain {

    private rowCount: number = 20;
    private columnCount: number = 30;
    private score: GameScore = new GameScore();
    private scoreBoard: GameScore[] = [];
    private gameBoard: number[][] = this.createGameBoard();

    getColumnCount(): number {
        return this.columnCount;
    }

    getRowCount(): number {
        return this.rowCount;
    }

    getLeaderboard(): GameScore[] {
        return this.scoreBoard.sort((a, b) => (a.score < b.score) ? 1 : -1);;
    }

    insertBirdOnBoard(board: number[][], birdIndex: number = this.rowCount / 2): number[][] {
        if (board[0][birdIndex] == gameCellBird) {
            board[0][birdIndex] = gameCellPath;
        }
        else if (board[1][birdIndex] == gameCellBird) {
            board[1][birdIndex] = gameCellPath;
        }
        board[1][birdIndex] = gameCellBird;
        return board;
    }

    moveBirdUp(): void {
        let birdIndex = null;
        for (let index: number = 0; index < this.rowCount; index++) {
            if (this.gameBoard[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        if (birdIndex !== null && birdIndex > 1) {
            this.gameBoard[1][birdIndex] = gameCellPath;
            this.gameBoard[1][birdIndex - 1] = gameCellBird;
        }
    }

    moveBirdDown(): void {
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

    createGameColumnWithObstacle(spaceBetween: number): number[] {
        let top: number = this.randomIntFromTo(1, this.rowCount - 2 - spaceBetween);
        let bottom: number = top + spaceBetween;
        let res: number[] = [];
        for (let index: number = 0; index < this.rowCount; index++) {
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

    createGameColumn(): number[] {
        let res: number[] = [];
        for (let index: number = 0; index < this.rowCount; index++) {
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

    createGameBoard(): number[][] {
        let board: number[][] = [];
        for (let index: number = 0; index < this.columnCount; index++) {
            if (index % 10 == 0) {
                board.push(this.createGameColumnWithObstacle(5))
            }
            else {
                board.push(this.createGameColumn())
            }
        }
        return this.insertBirdOnBoard(board);
    }

    moveBoard(): void {
        let spaceBetween: number = this.getSpaceBetweenObstacles();

        let birdIndex: number = this.getBirdPosition(this.gameBoard)
        this.gameBoard.shift();
        this.insertBirdOnBoard(this.gameBoard, birdIndex!)
        if (this.score.score % 10 == 0) {
            this.gameBoard.push(this.createGameColumnWithObstacle(spaceBetween));
        } else {
            this.gameBoard.push(this.createGameColumn());
        }
        this.score.score++;
    }

    getSpaceBetweenObstacles(): number {
        if (this.score.score < 100) return 5;
        if (this.score.score < 200) return 3;
        if (this.score.score < 300) return 1;
        return -1;
    }

    isGameOver(): boolean {
        if (this.gameBoard[2][this.getBirdPosition(this.gameBoard)] != gameCellPath) {
            return true;
        }
        return false;
    }

    getBirdPosition(board: number[][]): number {
        let birdIndex = null;
        for (let index: number = 0; index < this.rowCount; index++) {
            if (board[1][index] === gameCellBird) {
                birdIndex = index;
            }
        }
        return birdIndex != null ? birdIndex : -1;
    }

    randomIntFromTo(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getGameBoard(): number[][] {
        return this.gameBoard
    }

    getScore(): number {
        return this.score.score;
    }

    getScoreBoard(): GameScore[] {
        return this.scoreBoard;
    }

    setNewGameBoard():void {
        this.gameBoard = this.createGameBoard();
    }

    setNewScore(): void {
        this.score = new GameScore();
    }

    gameCellPath(): number { return gameCellPath };
    gameCellTop(): number { return gameCellTop };
    gameCellBottom(): number { return gameCellBottom };
    gameCellBird(): number { return gameCellBird };


}