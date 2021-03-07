import GameBrain from "../model/game-brain";

export default class LeaderboardController {

    private model: GameBrain;
    private viewContainer: HTMLDivElement;
    private isRunning: boolean = false;

    constructor(model: GameBrain, viewContainer: HTMLDivElement) {
        this.model = model;
        this.viewContainer = viewContainer;
    }

    run() {
        this.isRunning = true;
        this.viewContainer.innerHTML = '';
        this.viewContainer.append(this.getBoardHtlm(this.model));
    }

    stop() {
        this.isRunning = false;
    }

    resizeUi() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtlm(this.model));
        }
    }

    getBoardHtlm(gameBrain: GameBrain) {
        let content = document.createElement('div');
        content.id = 'leaderboard';

        let colWidth = window.innerWidth / this.model.getColumnCount() - 1;
        let rowHeight = window.innerHeight / this.model.getRowCount() - 1;

        gameBrain.getGameBoard().forEach(columnData => {
            let columnElement = document.createElement('div');
            columnElement.style.minWidth = colWidth + 'px';
            columnElement.style.maxWidth = colWidth + 'px';
            columnElement.style.float = 'left';

            columnData.forEach(rowData => {
                let rowElement = document.createElement('div');
                if (rowData === gameBrain.gameCellTop() || rowData === gameBrain.gameCellBottom()) {
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


}