//액션명 정의
const SUCCESS_OR_FALSE2 = 'success/SUCCESS_OR_FALSE2';
const SUCCESS_OR_FALSE3 = 'success/SUCCESS_OR_FALSE3';


//액션생성함수 생성
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
    ShootType: 0,
    probability: 0,
};

//리듀서 함수 생성
function probabilityReducer(state=initialState, action) {
    let newState;
    switch(action.type) {
        case SUCCESS_OR_FALSE2: 
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

export default probabilityReducer;