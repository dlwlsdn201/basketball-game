// 액션명 생성
const COUNT10 = 'count/COUNT10';
const COUNT20 = 'count/COUNT20';    
const COUNT30 = 'count/COUNT30';    
const REMAIN_COUNT = 'count/REMAIN_COUNT';

//액션생성함수
export const count10 = () => ({type: COUNT10, selectedCount: 10, currentCount: 10});
export const count20 = () => ({type: COUNT20, selectedCount: 20, currentCount: 20});
export const count30 = () => ({type: COUNT30, selectedCount: 30, currentCount: 30});
export const remainCount = () => ({type: REMAIN_COUNT});

//초기값 생성
const initialState = {
    selected : false, 
    selectedCount: null,
    currentCount: null,
};

//리듀서 함수 생성
function countReducer(state=initialState, action) {
    let newState;
    switch(action.type) {
        case COUNT10:
            newState = Object.assign(
                {}, 
                state, 
                {selected: true, selectedCount: action.selectedCount, currentCount: action.currentCount}
            );
            break;
        case COUNT20:
            newState = Object.assign(
                {}, 
                state, 
                {selected: true, selectedCount: action.selectedCount, currentCount: action.currentCount}
            );
            break;
        case COUNT30:
            newState = Object.assign(
                {}, 
                state, 
                {selected: true, selectedCount: action.selectedCount, currentCount: action.currentCount}
            );
            break;
        case REMAIN_COUNT:
            newState = Object.assign(
                {}, 
                state, 
                {currentCount: state.currentCount - 1 }
            );
            break;
        default:
            return state;
    }
    return newState;
};

export default countReducer;