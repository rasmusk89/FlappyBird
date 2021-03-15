export default class LeaderboardController {
    constructor(model, viewContainer) {
        this.model = model;
        this.viewContainer = viewContainer;
        this.isRunning = false;
    }

    run() {
        this.isRunning = true;
        this.viewContainer.innerHTML = '';
        this.viewContainer.append(this.createLeaderboardHtml(this.model));
    }

    stop() {
        this.isRunning = false;
    }

    resizeUi() {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.getBoardHtlm(this.model));
        }
    }

    createLeaderboardHtml(gameBrain) {
        let content = document.createElement('div');
        content.id = 'leaderboard';

        let table = document.createElement('table');

        let row = document.createElement('tr');


        let headPosition = document.createElement('th');
        headPosition.innerHTML = 'Position';
        let headName = document.createElement('th');
        headName.innerHTML = 'Name';
        let headScore = document.createElement('th');
        headScore.innerHTML = 'Score';

        row.append(headPosition);
        row.append(headScore);
        row.append(headName);

        table.append(row);

        gameBrain.getLeaderboard().forEach(function callback(value, index) {
            let row = document.createElement('tr');
            let position = document.createElement('td');
            position.innerHTML = index + 1;
            let name = document.createElement('td');
            name.innerHTML = value.name;
            let score = document.createElement('td');
            score.innerHTML = value.score;

            row.append(position);
            row.append(score);
            row.append(name);

            table.append(row)

        });

        content.append(table);


        let leaderboard = gameBrain.getLeaderboard();
        console.log('Leaderboard: ', leaderboard)
        return content;
    }




}