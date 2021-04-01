import { createStore } from 'redux';
import rootReducer from  './modules/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import setCountButton from './js/countButton';
import setStartButton from './js/startButton';
import setShootButton from './js/shootButton';
import compareScore from './js/compareScore';
const showCount = document.querySelector('#countResult');
const stateMessage = document.querySelector('#stateMessage');
const resultMessage = document.querySelector('#resultMessage');
const scoreCom = document.querySelector('.score-com');
const scoreUser = document.querySelector('.score-user');
const comShootBtn = document.querySelector('#comShootBtn');
const userShootBtn2 = document.querySelector('#userShootBtn2');
const userShootBtn3 = document.querySelector('#userShootBtn3');

const store = createStore(rootReducer, composeWithDevTools());

const render = () => {
    const state =store.getState();
    const {countReducer:{currentCount}} = state; //비구조화 할당
    const {messageReducer:{text, turn, resultText}} = state;
    const {scoreReducer:{userScore, comScore}} = state;
    if(currentCount > 0){
        showCount.textContent = currentCount;
        stateMessage.textContent = text;
        scoreCom.textContent = comScore;
        scoreUser.textContent = userScore;
        resultMessage.textContent = resultText;
        if(turn === 'com'){
            userShootBtn2.classList.add('off');
            userShootBtn3.classList.add('off');
            comShootBtn.classList.remove('off');
        }if(turn === 'user'){
            comShootBtn.classList.add('off');
            userShootBtn2.classList.remove('off');
            userShootBtn3.classList.remove('off');
        }
    }else if(currentCount === 0){
        showCount.textContent = currentCount;
        stateMessage.textContent = text;
        userShootBtn2.classList.add('off');
        userShootBtn3.classList.add('off');
        compareScore(state);
    }else{
        stateMessage.textContent = text;
        comShootBtn.classList.add('off');
        userShootBtn2.classList.add('off');
        userShootBtn3.classList.add('off');
    }
};

setCountButton();
setStartButton();
setShootButton();
render();
store.subscribe(render);

export default store;