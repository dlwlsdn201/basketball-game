import store from '../store';
import {count10, count20, count30} from '../modules/count';

//게임 카운트 수 설정 버튼 이벤트 
const countButtons =  document.querySelectorAll('#countBtn');
const resultMessage = document.querySelector('#resultMessage');

const setCountButton = () => {
    countButtons[0].onclick = () => {
        resultMessage.style.visibility = "hidden";
        store.dispatch(count10());
    }
    countButtons[1].onclick = () => {
        resultMessage.style.visibility = "hidden";
        store.dispatch(count20());
    }
    countButtons[2].onclick = () => {
        resultMessage.style.visibility = "hidden";
        store.dispatch(count30());
    }
}

export default setCountButton;
