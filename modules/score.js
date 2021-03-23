
// 액션명 생성
const COM_SCORE2 = 'com/SCORE2';
const COM_SCORE3 = 'com/SCORE3';
const USER_SCORE2 = 'user/SCORE2';
const USER_SCORE3 = 'user/SCORE3';

// 액션정의함수 생성
export const comSCORE2 = () => ({type : 'score/COM_SCORE2'});
export const comSCORE3 = () => ({type : 'score/COM_SCORE3'});
export const userSCORE2 = () => ({type : 'score/USER_SCORE2'});
export const userSCORE3 = () => ({type : 'score/USER_SCORE3'});

//초기값 생성
const initialState = {
    userScore : 0,
    comScore : 0,
};

//리듀서 함수 생성
function score(state=initialState, action) {
    switch(action.type) {
        case COM_SCORE2:
            return {...state, 
                    comScore: state.comScore + 2,
                    };
        case COM_SCORE3 :
            return { ...state,
                    comScore: state.comScore + 3,
                    };
        case USER_SCORE2 :
            return { ...state,
                    userScore: state.userScore + 2,
                    };
        case USER_SCORE3 :
            return { ...state,
                    userScore: state.userScore + 3,
                    };
        default:
            return state;
    }
};

export default score;