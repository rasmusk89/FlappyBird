import { gameCellBird } from "../model/gamebrain";

export default class GameController {

    constructor(model, viewContainer) {
        this.model = model;
        this.viewContainer = viewContainer
        this.isRunning = false;
        /*
        this.interval = setInterval(() => {
            this.run()
        }, 1000);     
    */
    }

       
    run() {
        this.isRunning = true;
        this.viewContainer.innerHTML = '';
        this.model.moveBoard(this.model.getGameBoard());
        let content = this.getBoardHtlm(this.model)
        this.viewContainer.append(content);
    }

    stop() {
        this.isRunning = false;
        clearInterval(this.interval)
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
}
