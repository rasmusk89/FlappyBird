export default function gameView(eventHandler) {
    
    let content = document.createElement('div');
    content.id = 'view-container';

    content.addEventListener('click', eventHandler)


    return content;
}