export default class GameController {

    constructor(model, viewContainer) {
        this.model = model;
        this.viewContainer = viewContainer
        this.isRunning = false;
        this.isPaused = false;
        this.isGameOver = false;

        this.runGame = {};
    }

    run() {
        this.isRunning = true;
        this.isGameOver = false;
        this.viewContainer.focus();
        this.viewContainer.innerHTML = '';
        let content = this.getBoardHtlm(this.model)
        this.viewContainer.append(content);

        setTimeout(() => {
            this.runGame = setInterval(() => {
                this.isGameOver = this.model.isGameOver();
                if (!this.isGameOver) {
                    this.viewContainer.innerHTML = '';
                    this.model.moveBoard(this.model.getGameBoard());
                    let content = this.getBoardHtlm(this.model)
                    this.viewContainer.append(content);
                } else {
                    this.stopGame();
                }
            }, 100);
        }, 2000);
    }

    runForFiveSeconds() {
        this.run()
        setTimeout(() => {
            this.stop()
        }, 5000);
    }

    stop() {
        this.isRunning = false;
        clearInterval(this.runGame);
        this.runGame = {};
        this.model.setNewGameBoard();
        let newScore = {};
        newScore.name = '';
        newScore.score = 0;
        this.model.score = newScore
    }

    stopGame() {
        this.isRunning = false;
        clearInterval(this.runGame);
        this.runGame = {};

        let name = prompt('Your score is:' + this.model.score.score +
            '\nPlease enter your name: ', 'Player' + this.model.scoreBoard.length)
        let player = {};
        player.name = name;
        player.score = this.model.score.score;
        this.model.scoreBoard.push(player);
        this.model.setNewGameBoard();
        let newScore = {};
        newScore.name = '';
        newScore.score = 0;
        this.model.score = newScore
    }

    resizeUi() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtlm(this.model));
        }
    }

    getBoardHtlm(gameBrain) {
        let content = document.createElement('div');
        content.id = 'gameboard';

        let colWidth = window.innerWidth / this.model.columnCount - 1;
        let rowHeight = window.innerHeight / this.model.rowCount - 1;

        gameBrain.getGameBoard().forEach(columnData => {
            let columnElement = document.createElement('div');
            columnElement.style.minWidth = colWidth + 'px';
            columnElement.style.maxWidth = colWidth + 'px';
            columnElement.style.float = 'left';

            columnData.forEach(rowData => {
                let rowElement = document.createElement('div');
                if (rowData !== gameBrain.gameCellPath()) {
                    rowElement.style.backgroundColor = '#00F';
                }
                if (rowData === gameBrain.gameCellBird()) {
                    rowElement.style.backgroundColor = '#F00';
                }

                rowElement.style.minHeight = rowHeight + 'px';
                rowElement.style.maxHeight = rowHeight + 'px';

                columnElement.append(rowElement);
            });

            content.append(columnElement)

        });

        return content;
    };

    moveBirdUp() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.model.moveBirdUp(this.model.getGameBoard());
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }
    }

    moveBirdDown() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.model.moveBirdDown(this.model.getGameBoard());
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }
    }

    flapBird() {
        setInterval(() => {
            this.viewContainer.innerHTML = '';
            this.model.flapBird();
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }, 300);
    }


}
