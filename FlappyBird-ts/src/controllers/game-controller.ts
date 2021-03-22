import GameBrain from "../model/game-brain";

export default class GameController {
    private model: GameBrain = new GameBrain();
    private viewContainer: HTMLDivElement;
    public isRunning: boolean = false;
    public isPaused: boolean = false;
    private runGame: any = {}; // Check the type!
    private isGameOver: boolean = false;

    constructor(model: GameBrain, viewContainer: HTMLDivElement) {
        this.model = model;
        this.viewContainer = viewContainer
    }

    run(): void {
        this.isRunning = true;
        this.isGameOver = false;
        this.viewContainer.focus();
        this.viewContainer.innerHTML = '';
        let content: HTMLDivElement = this.getBoardHtlm(this.model)
        this.viewContainer.append(content);

        setTimeout(() => {
            this.runGame = setInterval(() => {
                this.isGameOver = this.model.isGameOver();
                if (!this.isGameOver) {
                    this.viewContainer.innerHTML = '';
                    this.model.moveBoard();
                    let content: HTMLDivElement = this.getBoardHtlm(this.model)
                    this.viewContainer.append(content);
                } else {
                    this.stopGame();
                }
            }, 100);
            this.flapBird();
        }, 2000);

    }

    stopGame(): void {
        this.isRunning = false;
        clearInterval(this.runGame);
        this.runGame = {};

        let playerName: string = prompt('Your score is:' + this.model.getScore() +
            '\nPlease enter your name: ', 'Player' + this.model.getScoreBoard.length) ?? "Player " + this.model.getScoreBoard.length;

        let playerScore: number = this.model.getScore();
        this.model.getScoreBoard().push({
            name: playerName,
            score: playerScore
        });

        this.model.setNewGameBoard();
        this.model.setNewScore();
    }

    runForFiveSeconds(): void {
        this.run()
        setTimeout(() => {
            this.stop()
        }, 5000);
    }

    stop(): void {
        this.isRunning = false;
        clearInterval(this.runGame);
        this.runGame = {};
    }

    resizeUi(): void {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtlm(this.model));
        }
    }

    getBoardHtlm(gameBrain: GameBrain): HTMLDivElement {
        let content: HTMLDivElement = document.createElement('div');
        content.id = 'gameboard';

        let colWidth: number = window.innerWidth / this.model.getColumnCount() - 1;
        let rowHeight: number = window.innerHeight / this.model.getRowCount() - 1;

        gameBrain.getGameBoard().forEach(columnData => {
            let columnElement: HTMLDivElement = document.createElement('div');
            columnElement.style.minWidth = colWidth + 'px';
            columnElement.style.maxWidth = colWidth + 'px';
            columnElement.style.float = 'left';

            columnData.forEach(rowData => {
                let rowElement: HTMLDivElement = document.createElement('div');
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

    moveBirdUp(): void {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.model.moveBirdUp();
            let content: HTMLDivElement = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }
    }

    moveBirdDown(): void {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            if (!this.model.moveBirdDown()) { this.stopGame() }
            let content: HTMLDivElement = this.getBoardHtlm(this.model)
            this.viewContainer.append(content);
        }
    }

    flapBird(): void {
        setInterval(() => {
            this.moveBirdDown()
        }, 400);
    }
}
