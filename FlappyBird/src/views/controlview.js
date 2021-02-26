export default function controlView(eventHandler) {

    let control = document.createElement('div');
    control.id = 'control';

    let leaderboardButton = document.createElement('button');
    leaderboardButton.id = 'leaderboard';
    leaderboardButton.innerHTML = 'Leaderboard';

    let gameButton = document.createElement('button');
    gameButton.id = 'game'
    gameButton.innerHTML = 'Game';

    control.append(leaderboardButton);
    control.append(gameButton);

    leaderboardButton.addEventListener('click', eventHandler);
    gameButton.addEventListener('click', eventHandler);

    return control;
}