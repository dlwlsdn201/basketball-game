//루트 리듀서 모듈
import {combineReducers} from 'redux';
import countReducer from './count';
import scoreReducer from './score';
import messageReducer from './message';
import probabilityReducer from './probability';

const rootReducer = combineReducers({
    countReducer,
    scoreReducer,
    messageReducer,
    probabilityReducer
});

export default rootReducer;