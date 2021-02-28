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

    control.append(leaderboardButton);
    control.append(gameButton);
    control.append(stopButton);

    leaderboardButton.addEventListener('click', eventHandler);
    gameButton.addEventListener('click', eventHandler);
    stopButton.addEventListener('click', eventHandler);


    return control;
}