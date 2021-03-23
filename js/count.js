// import store from '../modules/main';
import {count10, count20, count30} from '../modules/count';

const CountButtons =  document.querySelectorAll('#countBtn');
const ShowCount = document.querySelector('#countShow');



const count = (state) => {
    ShowCount.textContent = state.count;
};

export default count;
// store.subscribe(render);

// CountButtons[0].onclick = () => store.dispatch(count10());
// CountButtons[1].onclick = () => store.dispatch(count20());
// CountButtons[2].onclick = () => store.dispatch(count30());
