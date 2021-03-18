//액션명  생성
const INIT = 'message/INIT';
const START = 'message/START';
const COM = 'message/COM';
const USER = 'message/USER';
const ERROR = 'message/ERROR';
const SUCCESS2 = 'message/SUCCESS2';
const SUCCESS3 = 'message/SUCCESS3';
const FAIL2 = 'message/FAIL2';
const FAIL3 = 'message/FAIL3';
//액션정의함수 생성
// export const init = () => ({
//     type: INIT,
//     text:'상단에 슛 횟수를 정하신 후 Start 버튼을 눌러주세요' 
//     });
export const start = () => ({
    type: START, 
    text:'com 먼저 시작합니다.', 
});
export const com = () => ({
    type: COM, 
    text: 'com 차례 입니다.'
});
export const user = () => ({
    type: USER, 
    text:'사용자 님 차례입니다' 
});
export const error = () => ({
    type: ERROR, 
    text:'게임 카운트를 먼저 선택해주세요!'  
});
export const success2 = () => ({
    type: SUCCESS2,
    text: '2점슛 성공!!'
});
export const success3 = () => ({
    type: SUCCESS3,
    text: '3점슛 성공!!!!'
});
export const fail2 = () => ({
    type: FAIL2,
    text: '2점슛 실패...'
});
export const fail3 = () => ({
    type: FAIL3,
    text: '3점슛 실패...'
});

//초기값 생성

const initialState = {
    text: '상단에 슛 횟수를 정하신 후 Start 버튼을 눌러주세요' 
};


//리듀서 함수 생성

function setMessage(state=initialState, action){
    switch(action.type) {
        case START: 
            return {text : action.text};
        case COM: 
            return {text : action.text};
        case USER: 
            return {text : action.text};
        case ERROR: 
            return {text : action.text};
        case SUCCESS2: 
        return {text : action.text};
        case SUCCESS3: 
        return {text : action.text};
        case FAIL2: 
        return {text : action.text};
        case FAIL3: 
        return {text : action.text};
        default:
            return state;
    }
};

export default setMessage;