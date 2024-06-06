/** ------------------querySelectors---------------------- */
var selectGameView = document.querySelector('.select-game-view');
var gameplayView = document.querySelector('.gameplay-view');
var classicFighters = document.querySelector('.classic-fighters');
var difficultFighters = document.querySelector('.difficult-fighters');

/** ------------------ eventListeners--------------------- */
addEventListener('load', showSelectGameView);



/**------------------ functions--------------------------- */

// select-game-view
// gameplay-view
//     classic
//     difficult

function showSelectGameView() {
    selectGameView.classList.remove('hidden');
    gameplayView.classList.add('hidden');
    classicFighters.classList.add('hidden');
    difficultFighters.classList.add('hidden');
};