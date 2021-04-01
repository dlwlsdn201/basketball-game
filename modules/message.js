//액션명 생성
const START = 'stateMessage/START';
const COM = 'stateMessage/COM';
const USER = 'stateMessage/USER';
const ERROR = 'stateMessage/ERROR';
const SUCCESS2 = 'resultMessage/SUCCESS2';
const SUCCESS3 = 'resultMessage/SUCCESS3';
const FAIL2 = 'resultMessage/FAIL2';
const FAIL3 = 'resultMessage/FAIL3';

//액션정의함수 생성
export const start = (initialCount) => ({
    type: START, 
    text:'com 먼저 시작합니다.', 
    turn: 'com',
    currentCount: initialCount
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

//초기값 생성
const initialState = {
    turn: null,
    resultText: '',
    text: '상단에 카운트를 설정하신 후 Start 버튼을 눌러주세요' 
};

//리듀서 함수 생성
function messageReducer(state=initialState, action) {
    let newState;
    switch(action.type) {
        case START: 
            newState = Object.assign(
                {},
                state,
                {text: action.text, currentCount: state.selectedCount, turn: action.turn}
            );
            break;
        case COM: 
            newState = Object.assign(
                {},
                state,
                {text: action.text,  turn: action.turn}
            );
            break;
        case USER: 
            newState = Object.assign(
                {},
                state,
                {text: action.text,  turn: action.turn}
            );
            break;
        case ERROR: 
            newState = Object.assign(
                {},
                state,
                {text: action.text}
            );
            break;
        case SUCCESS2: 
            newState = Object.assign(
                {},
                state,
                {resultText: action.text}
            );
            break;
        case SUCCESS3: 
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
            newState = Object.assign(
                {},
                state,
                {resultText: action.text}
            );
            break;
        default:
            return state;
    }
    return newState;
};

export default messageReducer;