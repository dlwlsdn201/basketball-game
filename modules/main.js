import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const CountButtons =  document.querySelectorAll('#countBtn');

const ShowCount = document.querySelector('#countShow');
const startBtn = document.querySelector('#startBtn');
const message = document.querySelector('#message');
const resultMessage = document.querySelector('#resultMessage');
const scoreCom = document.querySelector('.score-com');
const scoreUser = document.querySelector('.score-user');
const comShootBtn = document.querySelector('#comShootBtn');
const userShootBtn2 = document.querySelector('#userShootBtn2');
const userShootBtn3 = document.querySelector('#userShootBtn3');

// 액션명 생성
const COM_SCORE3 = 'com/SCORE3';
const COM_SCORE2 = 'com/SCORE2';
const USER_SCORE2 = 'user/SCORE2';
const USER_SCORE3 = 'user/SCORE3';

const COUNT10 = 'count/COUNT10';
const COUNT20 = 'count/COUNT20';    
const COUNT30 = 'count/COUNT30';    
const REMAIN_COUNT = 'count/REMAIN_COUNT';

const SUCCESS_OR_FALSE2 = 'success/SUCCESS_OR_FALSE2';
const SUCCESS_OR_FALSE3 = 'success/SUCCESS_OR_FALSE3';

const START = 'message/START';
const COM = 'message/COM';
const USER = 'message/USER';
const ERROR = 'message/ERROR';
const SUCCESS2 = 'resultMessage/SUCCESS2';
const SUCCESS3 = 'resultMessage/SUCCESS3';
const FAIL2 = 'resultMessage/FAIL2';
const FAIL3 = 'resultMessage/FAIL3';

// 액션정의함수 생성
export const comSCORE3 = () => ({
    type : COM_SCORE3
});
export const comSCORE2 = () => ({
    type : COM_SCORE2
});
export const userSCORE2 = () => ({
    type : USER_SCORE2
});
export const userSCORE3 = () => ({
    type : USER_SCORE3
});

export const count10 = () => ({type: COUNT10, count: 10});
export const count20 = () => ({type: COUNT20, count: 20});
export const count30 = () => ({type: COUNT30, count: 30});
export const remainCount = () => ({type: REMAIN_COUNT});

export const start = () => ({
    type: START, 
    text:'com 먼저 시작합니다.', 
    turn: 'com'
});
export const com = () => ({
    type: COM, 
    text: 'com 차례 입니다.',
    turn: 'com'
});
export const user = () => ({
    type: USER, 
    text:'user 님 차례입니다.',
    turn: 'user' 
});
export const error = () => ({
    type: ERROR, 
    text:'게임 카운트를 먼저 선택해주세요!'  
});
export const success2 = (target) => ({
    type: SUCCESS2,
    text: `${target}, 2점슛 성공!!`
});
export const success3 = (target) => ({
    type: SUCCESS3,
    text: `${target}, 3점슛 성공!!!!`,
});
export const fail2 = (target) => ({
    type: FAIL2,
    text: `${target},2점슛 실패...`
});
export const fail3 = (target) => ({
    type: FAIL3,
    text: `${target}, 3점슛 실패...`
});

export const comWin = () => ({
    type: COM_WIN,
    text: 'com이 승리하였습니다!',
});

export const userWin = () => ({
    type: USER_WIN,
    text: '사용자 님이 승리하였습니다!!'
});

export const draw = () => ({
    type: DRAW,
    text: '무승부입니다.'
});


export const successOrfalse2 = () => ({
    type: SUCCESS_OR_FALSE2,
    probability:  Number((Math.random()).toFixed(2))
});

export const successOrfalse3 = () => ({
    type: SUCCESS_OR_FALSE3,
    probability:  Number((Math.random()).toFixed(2))
});

//초기값 생성
const initialState = {
    userScore : 0,
    comScore : 0,
    selected : false, 
    count: null,
    turn: null,
    resultText: '',
    text: '상단에 카운트를 설정하신 후 Start 버튼을 눌러주세요' ,
    ShootType: 0,
    probability: 0,
};

//리듀서 함수 생성
function reducer(state=initialState, action) {
    // console.log(action.type);
    let newState;
    switch(action.type) {
        case COM_SCORE2:
            // return {...state, 
            //         comScore: state.comScore + 2,
            //         };
            newState = Object.assign(
                {},
                state,
                {comScore: state.comScore + 2})
            ;
            break;
        case COM_SCORE3 :
            // return { ...state,
            //         comScore: state.comScore + 3,
            //         };
            newState = Object.assign(
                {},
                state,
                {comScore: state.comScore + 3})
            ;
            break;
        case USER_SCORE2 :
            // return { ...state,
            //         userScore: state.userScore + 2,
            //         };
            newState = Object.assign(
                {},
                state,
                {userScore: state.userScore + 2}
            );
            break;
        case USER_SCORE3 :
            // return { ...state,
            //         userScore: state.userScore + 3,
            //         };
            newState = Object.assign(
                {},
                state,
                {userScore: state.userScore + 3}
            );
            break;
        case COUNT10:
            // return {...state,selected: true, count: action.count};
            newState = Object.assign(
                {}, 
                state, 
                {selected: true, count: action.count}
            );
            break;
        case COUNT20:
            // return {...state,selected: true, count: action.count};
            newState = Object.assign(
                {}, 
                state, 
                {selected: true, count: action.count}
            );
            break;
        case COUNT30:
            // return {...state,selected: true, count: action.count};
            newState = Object.assign(
                {}, 
                state, 
                {selected: true, count: action.count}
            );
            break;
        case REMAIN_COUNT:
        newState = Object.assign(
            {}, 
            state, 
            {count: state.count - 1 }
        );
        break;
        case START: 
            // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {text: action.text, turn: action.turn}
            );
            break;
        case COM: 
            // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {text: action.text,  turn: action.turn}
            );
            break;
        case USER: 
            // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {text: action.text,  turn: action.turn}
            );
            break;
        case ERROR: 
            // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {text: action.text}
            );
            break;
        case SUCCESS2: 
        // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {resultText: action.text}
            );
            break;
        case SUCCESS3: 
        // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {resultText: action.text}
            );
            break;
        case FAIL2: 
        // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {resultText: action.text}
            );
            break;
        case FAIL3: 
        // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {resultText: action.text}
            );
            break;
        case SUCCESS_OR_FALSE2: 
    // return {...state,text : action.text};
            newState = Object.assign(
                {},
                state,
                {probability: action.probability}
            );
            break;
        case SUCCESS_OR_FALSE3: 
            newState = Object.assign(
                {},
                state,
                {probability: action.probability}
            );
            break;
        default:
            return state;
    }
    return newState;
};

const store = createStore(reducer, composeWithDevTools());

const compare =() => {
    const state = store.getState();
    if (state.comScore > state.userScore){
        message.textContent = 'com 승리!';
    }else if (state.comScore < state.userScore){
        message.textContent = '유저 승리!';
    }else{ 
        message.textContent = '무승부';
    };
}


const render = () => {
    const state =store.getState();
    console.log('카운트:',state.count);
    if(state.count > 0){
        ShowCount.textContent = state.count;
        message.textContent = state.text;
        scoreCom.textContent = state.comScore;
        scoreUser.textContent = state.userScore;
        resultMessage.textContent = state.resultText;
        if(state.turn === 'com'){
            userShootBtn2.classList.add('off');
            userShootBtn3.classList.add('off');
            comShootBtn.classList.remove('off');
        }if(state.turn === 'user'){
            comShootBtn.classList.add('off');
            userShootBtn2.classList.remove('off');
            userShootBtn3.classList.remove('off');
        }
    }else if(state.count === 0){
        ShowCount.textContent = state.count;
        message.textContent = state.text;
        userShootBtn2.classList.add('off');
        userShootBtn3.classList.add('off');
        console.log('게임 종료');
        compare();
    }else{
        message.textContent = state.text;
        comShootBtn.classList.add('off');
        userShootBtn2.classList.add('off');
        userShootBtn3.classList.add('off');
    }
};

render();
store.subscribe(render);

CountButtons[0].onclick = () => {
    resultMessage.style.visibility = "hidden";
    store.dispatch(count10());
}
CountButtons[1].onclick = () => {
    resultMessage.style.visibility = "hidden";
    store.dispatch(count20());
}
CountButtons[2].onclick = () => {
    resultMessage.style.visibility = "hidden";
    store.dispatch(count30());
}

startBtn.onclick = () => {
    const state = store.getState();
    state.selected ? store.dispatch(start()) : store.dispatch(error());
};

comShootBtn.onclick = (event) => {
    const state =store.getState();
    let TARGET = state.turn;
    if(state.count === 0 || TARGET === 'user'){
        event.preventDefault();
    }else{
        resultMessage.style.visibility = "visible";
        const Probability = Number((Math.random()).toFixed(2));
        if(Probability <= 0.75){
            console.log('2점 슛');
            store.dispatch(successOrfalse2());
            if(state.probability <= 0.85){
                store.dispatch(success2(TARGET));
                store.dispatch(comSCORE2())
            }else {
                store.dispatch(fail2(TARGET));
            }
                
        }else{
            console.log('3점 슛');
            store.dispatch(successOrfalse3())
            if(state.probability <= 0.45){
                store.dispatch(success3(TARGET));
                store.dispatch(comSCORE3())
            }else {
                store.dispatch(fail3(TARGET));
            }
        }
        store.dispatch(user());
        store.dispatch(remainCount());
    }
};

userShootBtn2.onclick = (event) => {
    const state = store.getState();
    let TARGET = state.turn;
    if(state.count === 0 || TARGET === 'com'){
        event.preventDefault();
    }else{
        resultMessage.style.visibility = "visible";
        console.log('user 2점 슛');
        store.dispatch(successOrfalse2());
        if(state.probability <= 0.85){
            store.dispatch(success2(TARGET));
            store.dispatch(userSCORE2())
        }else {
            store.dispatch(fail2(TARGET));
        }
        store.dispatch(com());
        store.dispatch(remainCount());
    }
};

userShootBtn3.onclick = (event) => {
    const state = store.getState();
    let TARGET = state.turn;
    if(state.count === 0 || TARGET === 'com'){
        event.preventDefault();
    }else{
        resultMessage.style.visibility = "visible";
        store.dispatch(successOrfalse3())
        if(state.probability <= 0.45){
            store.dispatch(success3(TARGET));
            store.dispatch(userSCORE3())
        }else {
            store.dispatch(fail3(TARGET));
        }
        store.dispatch(com());
        store.dispatch(remainCount());
    }
};



export default store;
