import GameBrain from "../model/game-brain";

export default class GameController {
    private model: GameBrain = new GameBrain();
    private viewContainer: any; // Check the type!
    public isRunning: boolean = false;
    public isPaused: boolean = false;
    private runGame: any = {}; // Check the type!

    /*
    constructor(model, viewContainer) {
        this.model = model;
        this.viewContainer = viewContainer
        this.isRunning = false;
        this.isPaused = false;

        this.runGame = {};

    }
*/
    run() {
        this.viewContainer.focus();
        this.isRunning = true;
        this.runGame = setInterval(() => {
            this.isRunning = true;
            this.viewContainer.innerHTML = '';
            // this.model.moveBoard(this.model.getGameBoard());
            this.model.moveBoard();
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }, 100);
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
    }

    resizeUi() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtlm(this.model));
        }
    }

    getBoardHtlm(gameBrain: GameBrain) {
        let content = document.createElement('div');
        content.id = 'gameboard';

        let colWidth = window.innerWidth / this.model.getColumnCount() - 1;
        let rowHeight = window.innerHeight / this.model.getRowCount() - 1;

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
            // this.model.moveBirdUp(this.model.getGameBoard());
            this.model.moveBirdUp();
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }
    }

    moveBirdDown() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            // this.model.moveBirdDown(this.model.getGameBoard());
            this.model.moveBirdDown();
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }
    }

    /*
    flapBird() {
        setInterval(() => {
            this.viewContainer.innerHTML = '';
            this.model.flapBird();
            let content = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }, 300);
    }
    */


}
