import store from '../store';
import {start,error} from '../modules/message';
const startBtn = document.querySelector('#startBtn');


//시작 버튼 이벤트 
const setStartButton = () => {
    startBtn.onclick = () => {
        const state = store.getState();
        const {countReducer:{selected, selectedCount}} = state; //비구조화 할당
        const initialCount = selectedCount;
        
        selected ? store.dispatch(start(initialCount)) : store.dispatch(error());
    };
}

export default setStartButton;