export default function gameView(eventHandler: any) { // CHANGE eventHandler type!
    
    let content = document.createElement('div');
    content.id = 'view-container';
    content.tabIndex = -1;
    content.addEventListener('keydown', eventHandler)

    return content;
}