const ROW_COUNT = 25;
const COL_COUNT = 50;

let viewPortHeight = window.innerHeight;
let rowHeight = viewPortHeight / ROW_COUNT;

let viewPortWidth = window.innerWidth;
let colWidth = viewPortWidth / COL_COUNT;

document.body.style = 'margin: 0; padding: 0';

let content = document.createElement('div');

for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {
    let colElement = document.createElement('div');
    colElement.style.backgroundColor = '#FF00FF';
    colElement.style.minWidth = colWidth + 'px';
    colElement.style.maxWidth = colWidth + 'px';
    colElement.style.float = 'left';
    for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
        let rowElement = document.createElement('div');
        if (colIndex % 2 == 0) {
            if(rowIndex % 2 == 0) {
                rowElement.style.backgroundColor = '#FF00FF'
            } else {
                rowElement.style.backgroundColor = '#00FFFF'
            }
        } else {
            if(rowIndex % 2 == 0) {
                rowElement.style.backgroundColor = '#00FFFF'
            } else {
                rowElement.style.backgroundColor = '#FF00FF'
            }
        }
        rowElement.style.minHeight = rowHeight + 'px';
        rowElement.style.maxHeight = rowHeight + 'px';
        colElement.append(rowElement);

    }
    content.append(colElement)
}


/*
for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
    let rowElement = document.createElement('div');
    rowElement.style.minHeight = rowHeight + 'px';
    rowElement.style.maxHeight = rowHeight + 'px';
    rowElement.classList.add('id-row-' +rowIndex);
    for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {

        let colElement = document.createElement('div');
        colElement.classList.add('id-row-' + rowIndex + '-col-' + colIndex)
        if (rowIndex % 2 == 0) {
            if(colIndex % 2 == 0) {
                colElement.style.backgroundColor = '#FF00FF'
            } else {
                colElement.style.backgroundColor = '#00FFFF'
            }
        } else {
            if(colIndex % 2 == 0) {
                colElement.style.backgroundColor = '#00FFFF'
            } else {
                colElement.style.backgroundColor = '#FF00FF'
            }
        }
        colElement.style.minWidth = colWidth + 'px';
        colElement.style.minHeight = rowHeight + 'px';
        colElement.style.display = 'inline-block';
        rowElement.append(colElement)

    }
    content.append(rowElement)
}
*/
document.body.append(content);
