import {combineReducers} from 'redux';
import score from './score';
import count from './count';
import setTurn from './turn';
import setMessage from './message';

const rootReducer = combineReducers({
    score,
    count,
    setTurn,
    setMessage
});

export default rootReducer;