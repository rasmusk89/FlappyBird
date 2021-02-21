const ROW_COUNT = 30;
const COL_COUNT = 40;

let viewPortHeight = window.innerHeight;
let rowHeight = viewPortHeight / ROW_COUNT;

let viewPortWidth = window.innerWidth;
let colWidth = viewPortWidth / COL_COUNT;

document.body.style = 'margin: 0; padding: 0';

let content = document.createElement('div');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createColumn(colIndex) {
    let colElement = document.createElement('div');
    colElement.classList.add('id-col-' + colIndex);
    colElement.style.minWidth = colWidth + 'px';
    colElement.style.maxWidth = colWidth + 'px';
    colElement.style.float = 'left';

    let spaceBetween = 4;
    let randomTop = randomIntFromInterval(3, ROW_COUNT - 7);

    for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('id-col-' + colIndex + '-row-' + rowIndex);

        if (colIndex % Math.floor(COL_COUNT / 10 * 2) == 0) {
            if (rowIndex < randomTop || rowIndex > randomTop + spaceBetween) {
                if (colIndex % 2 == 0) {
                    if (rowIndex % 2 == 0) {
                        rowElement.style.backgroundColor = '#FF00FF'
                    } else {
                        rowElement.style.backgroundColor = '#00FFFF'
                    }
                } else {
                    if (rowIndex % 2 == 0) {
                        rowElement.style.backgroundColor = '#00FFFF'
                    } else {
                        rowElement.style.backgroundColor = '#FF00FF'
                    }
                }
            }
        } else {
            if (rowIndex < 2 || rowIndex > ROW_COUNT - 3) {
                if (colIndex % 2 == 0) {
                    if (rowIndex % 2 == 0) {
                        rowElement.style.backgroundColor = '#FF00FF'
                    } else {
                        rowElement.style.backgroundColor = '#00FFFF'
                    }
                } else {
                    if (rowIndex % 2 == 0) {
                        rowElement.style.backgroundColor = '#00FFFF'
                    } else {
                        rowElement.style.backgroundColor = '#FF00FF'
                    }
                }
            }
        }

        rowElement.style.minHeight = rowHeight + 'px';
        rowElement.style.maxHeight = rowHeight + 'px';
        colElement.append(rowElement);
    }
    return colElement;
}

for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {
    let colElement = createColumn(colIndex);
    content.append(colElement);

}
document.body.append(content);

function moveScreen() {

    setInterval(() => {
        let child = content.firstElementChild;
        if (child !== null) {
            let childClassNameArray = child.className.split('-');
            let childId = childClassNameArray[childClassNameArray.length - 1]
            let colElement = createColumn(childId)
            child.remove();
            content.append(colElement)
        }
    }, 100);

}

moveScreen()