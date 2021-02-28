export default class LeaderboardController {
    constructor(model, viewContainer) {
        this.model = model;
        this.viewContainer = viewContainer;
        this.isRunning = false;
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
        if(this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtlm(this.model));
        }
    }

    getBoardHtlm(gameBrain) {
        let content = document.createElement('div');
        content.id = 'leaderboard';

        let colWidth =  window.innerWidth / this.model.columnCount - 1;
        let rowHeight = window.innerHeight / this.model.rowCount - 1;

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
        // console.log(content)
        
        return content;
    };


}