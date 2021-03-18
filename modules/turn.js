//액션명 생성

const COM = 'turn/COM';
const USER = 'turn/USER';


//액션정의함수 생성
const com = () => ({type: COM, name: 'com'});
const user = () => ({type: USER, name: 'user'});


//초기값 생성

const initialState = {turn : null};


//리듀서 함수 생성

function setTurn(state=initialState, action) {
    switch (action.type) {
        case COM:
            return {turn: action.name};
        case USER:
            return {turn: action.name};
        default:
            return state;
        }
}

export default setTurn;