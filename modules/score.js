// 액션명 생성
const COM_SCORE3 = 'com/SCORE3';
const COM_SCORE2 = 'com/SCORE2';
const USER_SCORE2 = 'user/SCORE2';
const USER_SCORE3 = 'user/SCORE3';

// 액션생성함수
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

//초기값 생성
const initialState = {
    userScore : 0,
    comScore : 0
};


//리듀서 생성
function scoreReducer(state=initialState, action) {
    let newState;
    switch(action.type) {
        case COM_SCORE2:
            newState = Object.assign(
                {},
                state,
                {comScore: state.comScore + 2})
            ;
            break;
        case COM_SCORE3 :
            newState = Object.assign(
                {},
                state,
                {comScore: state.comScore + 3})
            ;
            break;
        case USER_SCORE2 :
            newState = Object.assign(
                {},
                state,
                {userScore: state.userScore + 2}
            );
            break;
        case USER_SCORE3 :
            newState = Object.assign(
                {},
                state,
                {userScore: state.userScore + 3}
            );
            break;
        default:
            return state;
    }
    return newState;
};

export default scoreReducer;