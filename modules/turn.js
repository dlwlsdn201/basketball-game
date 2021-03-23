// //액션명 생성

// const COM = 'turn/COM';
// const USER = 'turn/USER';


// //액션정의함수 생성
// export const comTurn = () => ({type: COM, turn: 'com'});
// export const userTurn = () => ({type: USER, turn: 'user'});


// //초기값 생성

// const initialState = {turn : null};


// //리듀서 함수 생성

// function setTurn(state=initialState, action) {
//     switch (action.type) {
//         case COM:
//             return {...state, turn: 'com'};
//         case USER:
//             return {...state,turn: 'user'};
//         default:
//             return state;
//         }
// }

// export default setTurn;