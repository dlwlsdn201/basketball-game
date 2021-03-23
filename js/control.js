// import {gameCount} from './gameCount.js';
// import {shootType, shoot2, shoot3} from './shootProbability.js';
// import {messageBox} from './start.js';
const comShootBtn = document.querySelector('#comShootBtn');
const userShootBtn2 = document.querySelector('#userShootBtn2');
const userShootBtn3 = document.querySelector('#userShootBtn3');
const message = document.querySelector('#message');

export const setTurn = () => {
    console.log(gameCount.count);
    if (gameCount.count !== 0) {
        if(board.turn === 'com') {
                userShootBtn2.classList.add('off');
                userShootBtn3.classList.add('off');
                comShootBtn.classList.remove('off');
                // init();
                message.textContent = messageBox.com;
                comShootBtn.addEventListener('click', shootType);
                board.turn = 'user';
        }else if(board.turn === 'user'){
                comShootBtn.classList.add('off');
                userShootBtn2.classList.remove('on');
                userShootBtn3.classList.remove('on');
                // init();
                message.textContent = messageBox.user;
                userShootBtn2.addEventListener('click', shoot2);
                userShootBtn3.addEventListener('click', shoot3);
                board.turn = 'com';
        }else{
            message.textContent = messageBox.start;
        }
    }
}


// const init = () => {
//     setTurn();
// }