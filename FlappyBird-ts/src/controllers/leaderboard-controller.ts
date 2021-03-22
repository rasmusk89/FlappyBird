import GameBrain from "../model/game-brain";

export default class LeaderboardController {

    private model: GameBrain;
    private viewContainer: HTMLDivElement;
    private isRunning: boolean = false;

    constructor(model: GameBrain, viewContainer: HTMLDivElement) {
        this.model = model;
        this.viewContainer = viewContainer;
    }

    run(): void {
        this.isRunning = true;
        this.viewContainer.innerHTML = '';
        this.viewContainer.append(this.createLeaderboardHtml(this.model));
    }

    stop(): void {
        this.isRunning = false;
    }

    resizeUi(): void {
        if (this.isRunning) {
            this.viewContainer.innerHTML = '';
            this.viewContainer.append(this.createLeaderboardHtml(this.model));
        }
    }

    createLeaderboardHtml(gameBrain: GameBrain): HTMLDivElement {
        let content: HTMLDivElement = document.createElement('div');
        content.id = 'leaderboard';

        let table: HTMLTableElement = document.createElement('table');

        let row: HTMLTableRowElement = document.createElement('tr');


        let headPosition: HTMLTableHeaderCellElement = document.createElement('th');
        headPosition.innerHTML = 'Position';
        let headName: HTMLTableHeaderCellElement = document.createElement('th');
        headName.innerHTML = 'Name';
        let headScore: HTMLTableHeaderCellElement = document.createElement('th');
        headScore.innerHTML = 'Score';

        row.append(headPosition);
        row.append(headScore);
        row.append(headName);

        table.append(row);

        gameBrain.getLeaderboard().forEach(function callback(value, index) {
            let row: HTMLTableRowElement = document.createElement('tr');
            let position: HTMLTableDataCellElement = document.createElement('td');
            position.innerHTML = (index + 1).toString();
            let name: HTMLTableDataCellElement = document.createElement('td');
            name.innerHTML = value.name;
            let score: HTMLTableDataCellElement = document.createElement('td');
            score.innerHTML = (value.score).toString();

            row.append(position);
            row.append(score);
            row.append(name);

            table.append(row)

        });

        content.append(table);

        return content;
    }


}