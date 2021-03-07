import mainView from './views/main-view';
import gameView from './views/game-view';
import controlView from './views/control-view';
import GameBrain from './model/game-brain';
import GameController from './controllers/game-controller';
import LeaderboardController from './controllers/leaderboard-controller';

let view = mainView();
document.body.append(view);
let ctrl_view = controlView(gameControlClick);
let game_view = gameView(gameMoveKeyDown);
view.append(ctrl_view);
view.append(game_view);

let gameBrain = new GameBrain();
let gameController = new GameController(gameBrain, game_view);
let leaderboardController = new LeaderboardController(gameBrain, game_view);

function gameControlClick(e: MouseEvent) { // Check the type!
    
    switch ((e.target as HTMLDivElement).id) {
        case 'game':
            gameController.isPaused = false;           
            leaderboardController.stop();
            if (!gameController.isRunning) {
                gameController.run();
               
            }
            break;
        case 'leaderboard':
            gameController.stop();
            leaderboardController.run();
            break;
        case 'stop':
            if (gameController.isRunning) {
                let stop = confirm('Are you sure you want to stop?')
                if(stop) {
                    gameController.stop();
                    leaderboardController.run()
                }
                else{
                    if (!gameController.isRunning) {
                        gameController.run();
                    }
                }      
            }
            break;
        case 'pause':
            gameController.isPaused = true;
            gameController.stop();
        default:
            break;
    }
}

function gameMoveKeyDown(event: KeyboardEvent) {
    if(event.key === 'ArrowUp' || event.key === 'w') {
        gameController.moveBirdUp();
        
        console.log('UP');
    }
    if(event.key === 'ArrowDown' || event.key === 's') {
        gameController.moveBirdDown();
        console.log('DOWN');
        
    }
    

}

leaderboardController.run();

window.addEventListener('resize', () => {
    gameController.resizeUi();
    leaderboardController.resizeUi();
})

