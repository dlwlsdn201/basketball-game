import {combineReducers} from 'redux';
import score from './score';
import setCount from './gameCount';
import setTurn from './turn';
import setMessage from './message';

const rootReducer = combineReducers({
    score,
    setCount,
    setTurn,
    setMessage
});

export default rootReducer;