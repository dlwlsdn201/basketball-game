import {board} from './shootProbability.js';
import {setTurn} from './control.js';
import {gameCount} from './gameCount.js';

const startBtn = document.querySelector('#startBtn');
const message = document.querySelector('#message');
const scoreCom = document.querySelector('.score-com');
const scoreUser = document.querySelector('.score-user');


export const messageBox = {
    init: '상단에 슛 횟수를 정하신 후 Start 버튼을 눌러주세요',
    start: 'com 먼저 시작합니다.',
    com : 'com 차례 입니다.',
    user: '사용자 님 차례입니다',
    error: '게임 카운트를 먼저 선택해주세요!'
}

const {init, com, user, start, error} = messageBox;

const gameStart=()=> {
    if(gameCount.selected === false) {
        return message.textContent = error;
    }
    scoreCom.textContent = board.ComScore;
    scoreUser.textContent = board.userScore;
    board.turn = 'com';
    setTurn();
}


message.textContent = init;
startBtn.addEventListener("click", gameStart);
