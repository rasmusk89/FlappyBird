export default class GameController {

    constructor() {

    }

    getBoardHtlm(gameBrain) {
        let content = document.createElement('div');
        content.id = 'gameboard';

        let colWidth = 20;
        let rowHeight = 20;

        gameBrain.getGameBoard().forEach(columnData => {
            let columnElement = document.createElement('div');
            columnElement.style.minWidth = colWidth + 'px';
            columnElement.style.maxWidth = colWidth + 'px';
            columnElement.style.float = 'left';

            columnData.forEach(rowData => {
                let rowElement = document.createElement('div');
                if (rowData === gameBrain.gameCellTop() || rowData === gameBrain.gameCellBottom()) {
                    rowElement.style.backgroundColor = '#00F';
                }

                rowElement.style.minHeight = rowHeight + 'px';
                rowElement.style.maxHeight = rowHeight + 'px';

                columnElement.append(rowElement);
            });

            content.append(columnElement)

        });
        console.log(content)
        
        return content;
    };
}
