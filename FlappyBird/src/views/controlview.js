export default function controlView(eventHandler) {

    let control = document.createElement('div');
    control.id = 'control';
    
    let leaderboardButton = document.createElement('button');
    leaderboardButton.id = 'leaderboard';
    leaderboardButton.innerHTML = 'Leaderboard';

    let gameButton = document.createElement('button');
    gameButton.id = 'game'
    gameButton.innerHTML = 'Game';

    let stopButton = document.createElement('button');
    stopButton.id = 'stop'
    stopButton.innerHTML = 'Stop';

    let pauseBtton = document.createElement('button');
    pauseBtton.id = 'pause'
    pauseBtton.innerHTML = 'Pause';

    control.append(leaderboardButton);
    control.append(gameButton);
    control.append(stopButton);
    control.append(pauseBtton);


    leaderboardButton.addEventListener('click', eventHandler);
    gameButton.addEventListener('click', eventHandler);
    stopButton.addEventListener('click', eventHandler);
    pauseBtton.addEventListener('click', eventHandler);



    return control;
}