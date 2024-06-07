/** ------------------querySelectors---------------------- */
var selectGameView = document.querySelector('.select-game-view');
var gameplayView = document.querySelector('.gameplay-view');
var classicFighters = document.querySelector('.classic-fighters');
var difficultFighters = document.querySelector('.difficult-fighters');
var classicSelection = document.querySelector('.classic-selection');
var difficultSelection = document.querySelector('.difficult-selection');
var changeGameButton = document.querySelector('.change-game-button');

var resultsView = document.querySelector('.results-view');
var humanChoiceImg = document.querySelector('#humanChoiceImg');
var comChoiceImg = document.querySelector('#comChoiceImg');
var winner = document.querySelector('#winner')

var rockPick = document.querySelector('#rock');
var paperPick = document.querySelector('#paper');
var scissorPick = document.querySelector('#scissors');
var lizardPick = document.querySelector('#lizard');
var ufoPick = document.querySelector('#ufo');

var humanWins = document.querySelector('#humanWins');
var comWins = document.querySelector('#comWins');

var fighterPicks = document.querySelectorAll('.fighter-pick');

/** ------------------ eventListeners--------------------- */
addEventListener('load', showSelectGameView);
classicSelection.addEventListener('click', showClassicGamePlay);
difficultSelection.addEventListener('click', showDifficultGamePlay);
changeGameButton.addEventListener('click', showSelectGameView);

rockPick.addEventListener('click', handleFighterChoice);
paperPick.addEventListener('click', handleFighterChoice);
scissorPick.addEventListener('click', handleFighterChoice);
lizardPick.addEventListener('click', handleFighterChoice);
ufoPick.addEventListener('click', handleFighterChoice);

/**-----------------global variables--------------------------- */
var humanPlayer = createHumanPlayer();
var computerPlayer = createComputerPlayer();
var game = createGame();
var settings = createSettings();
var classicChoices = ['rock', 'paper', 'scissors'];
var difficultChoices = ['rock', 'paper', 'scissors', 'lizard', 'ufo'];

/**------------------------- functions------------------------------- */

/**-------------------Views-------------------- */
function showSelectGameView() {
    selectGameView.classList.remove('hidden');
    gameplayView.classList.add('hidden');
    classicFighters.classList.add('hidden');
    difficultFighters.classList.add('hidden');
    resultsView.classList.add('hidden');
    humanPlayer.wins = 0;
    humanWins.innerText = `Wins: 0`;
    computerPlayer.wins = 0;
    comWins.innerHTML = `Wins: 0`
};

function showClassicGamePlay() {
    selectGameView.classList.add('hidden');
    gameplayView.classList.remove('hidden');
    classicFighters.classList.remove('hidden');
    difficultFighters.classList.add('hidden');
    resultsView.classList.add('hidden');
    settings.currentSelection = classicChoices;
};

function showDifficultGamePlay() {
    selectGameView.classList.add('hidden');
    gameplayView.classList.remove('hidden');
    classicFighters.classList.remove('hidden');
    difficultFighters.classList.remove('hidden');
    resultsView.classList.add('hidden');
    settings.currentSelection = difficultChoices;
};

function showResultsView() {
    selectGameView.classList.add('hidden');
    gameplayView.classList.add('hidden');
    classicFighters.classList.add('hidden');
    difficultFighters.classList.add('hidden');
    resultsView.classList.remove('hidden');
}

/**------------------Global Variables DM---------------- */
function createHumanPlayer() {
    var humanPlayer = {
        player: 'Human',
        token: '😃',
        wins: 0,
    }
    return humanPlayer;
};

function createComputerPlayer() {
    var computerPlayer = {
        player: 'Computer',
        token: '💻',
        wins: 0,
    }
    return computerPlayer;
};

function createGame() {
    var gamePlay = {
        humanPlayerSelection: null,
        computerPlayerSelection: null,
        gameResult: null,
    }
    return gamePlay;
};

function createSettings() {
    var settings = {
        currentSelection: null,
    }
    return settings;
};

/**----------------------gameplay------------------------------------------ */
function handleFighterChoice(event) {
    game.humanPlayerSelection = event.target.id;
    game.computerPlayerSelection = createComputerChoice();
    game.gameResult = createGameResult();
    for (var i = 0; i < fighterPicks.length; i++) {
        if (fighterPicks[i].id === `${game.humanPlayerSelection}Pick`) {
            fighterPicks[i].innerText = '😃';
        };

        if (fighterPicks[i].id === `${game.computerPlayerSelection}Pick`) {
            fighterPicks[i].innerText += '💻';
        };
    };
    setTimeout(showResultsOnDOM, 1000);
};

function clearFighterPicks() {
    for (var i = 0; i < fighterPicks.length; i++) {
        fighterPicks[i].innerText = '';
    };
}

function createComputerChoice() {
    var randomIndex = Math.floor(Math.random() * settings.currentSelection.length)
    return settings.currentSelection[randomIndex];
};

function createGameResult() {
    var comSelect = game.computerPlayerSelection
    var humSelect = game.humanPlayerSelection
    if (comSelect === humSelect) {
        return 'aDraw';
    };

    if (humSelect === 'rock' && (comSelect === 'scissors' || comSelect === 'lizard')) {
        return 'youWon';
    };

    if (humSelect === 'paper' && (comSelect === 'rock' || comSelect === 'ufo')) {
        return 'youWon';
    };

    if (humSelect === 'scissors' && (comSelect === 'paper' || comSelect === 'ufo')) {
        return 'youWon';
    };

    if (humSelect === 'lizard' && (comSelect === 'paper' || comSelect === 'ufo')) {
        return 'youWon';
    };

    if (humSelect === 'ufo' && (comSelect === 'scissors' || comSelect === 'rock')) {
        return 'youWon';
    };
    return 'comWon';
};

function updateScores() {
    if (game.gameResult === 'comWon') {
        computerPlayer.wins += 1;
    };

    if (game.gameResult === 'youWon') {
        humanPlayer.wins += 1;
    };
};

function showResultsOnDOM() {
    updateScores();
    humanWins.innerText = `Wins: ${humanPlayer.wins}`;
    comWins.innerText = `Wins: ${computerPlayer.wins}`;
    humanChoiceImg.src = `./assets/${game.humanPlayerSelection}.png`;
    humanChoiceImg.alt = game.humanPlayerSelection;
    comChoiceImg.src = `./assets/${game.computerPlayerSelection}.png`;
    comChoiceImg.alt = game.computerPlayerSelection;
    if (game.gameResult === 'youWon') {
        winner.innerText = '😃You won!😃';
    };

    if (game.gameResult === 'comWon') {
        winner.innerText = '💻Computer won this round!💻';
    };

    if (game.gameResult === 'aDraw') {
        winner.innerText = '😭It\'s a draw!😭';
    };
    showResultsView();
    setTimeout(resetGame, 2000);
};

function resetGame() {
    if (settings.currentSelection === classicChoices) {
        showClassicGamePlay();
    };

    if (settings.currentSelection === difficultChoices) {
        showDifficultGamePlay();
    };
    game = createGame();
    clearFighterPicks();
};
