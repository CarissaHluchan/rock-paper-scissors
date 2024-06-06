/** ------------------querySelectors---------------------- */
var selectGameView = document.querySelector('.select-game-view');
var gameplayView = document.querySelector('.gameplay-view');
var classicFighters = document.querySelector('.classic-fighters');
var difficultFighters = document.querySelector('.difficult-fighters');
var classicSelection = document.querySelector('.classic-selection');
var difficultSelection = document.querySelector('.difficult-selection');
var changeGameButton = document.querySelector('.change-game-button');

var rockPick = document.querySelector('#rock');
var paperPick = document.querySelector('#paper');
var scissorPick = document.querySelector('#scissors');
var lizardPick = document.querySelector('#lizard');
var ufoPick = document.querySelector('#ufo');

/** ------------------ eventListeners--------------------- */
addEventListener('load', showSelectGameView);
classicSelection.addEventListener('click', showClassicGamePlay);
difficultSelection.addEventListener('click', showDifficultGamePlay);
changeGameButton.addEventListener('click', showSelectGameView);

rockPick.addEventListener('click',);
paperPick.addEventListener('click',);
scissorPick.addEventListener('click',);
lizardPick.addEventListener('click',);
ufoPick.addEventListener('click',);

/**-----------------global variables--------------------------- */
var humanPlayer = {};// function createPlayer, createGame, updatePlayer, domfunctions
var computerPlayer = {};
var game = {};
var settings = {};//optional

/**------------------------- functions------------------------------- */

/**-------------------Views-DOM------------------- */
function showSelectGameView() {
    selectGameView.classList.remove('hidden');
    gameplayView.classList.add('hidden');
    classicFighters.classList.add('hidden');
    difficultFighters.classList.add('hidden');
};

function showClassicGamePlay() {
    selectGameView.classList.add('hidden');
    gameplayView.classList.remove('hidden');
    classicFighters.classList.remove('hidden');
    difficultFighters.classList.add('hidden');
};

function showDifficultGamePlay() {
    selectGameView.classList.add('hidden');
    gameplayView.classList.remove('hidden');
    classicFighters.classList.remove('hidden');
    difficultFighters.classList.remove('hidden');
}

/**------------------Players-DM---------------- */
function createHumanPlayer() {
    var humanPlayer = {
        player: human,
        token: '😃',
        wins: 0,
    }
    return humanPlayer;
}

function createComputerPlayer() {
    var computerPlayer = {
        player: computer,
        token: '💻',
        wins: 0,
    }
    return computerPlayer;
}

function createGame() {
    //add event listener for each click of human player
    // call random selection for computer click
    // update the dom to display choices from both
    // call a winner or a draw
    // set timeout outside function
    // reset the game
}