//액션명 생성
const COUNT10 = 'count/COUNT10';
const COUNT20 = 'count/COUNT20';    
const COUNT30 = 'count/COUNT30';    

//액션정의함수 생성

export const count10 = () => ({type: COUNT10, count: 10});
export const count20 = () => ({type: COUNT20, count: 20});
export const count30 = () => ({type: COUNT30, count: 30});

//초기값 생성

const initialState = {
    selected : false, 
    count: 0
};


//리듀서 함수 생성

function count(state=initialState, action) {
    switch(action.type) {
        case COUNT10:
            return {selected: true, count: action.count};
        case COUNT20:
            return {selected: true, count: action.count};
        case COUNT30:
            return {selected: true, count: action.count};
        default:
            return state;
    }
}


export default count;
