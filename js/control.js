// import store from '../modules/main';
// import {shootType, shoot2, shoot3} from './shootProbability';
// import {userTurn, comTurn} from '../modules/index';
// const comShootBtn = document.querySelector('#comShootBtn');
// const userShootBtn2 = document.querySelector('#userShootBtn2');
// const userShootBtn3 = document.querySelector('#userShootBtn3');
// const message = document.querySelector('#message');


// const state = store.getState();


// export const setTurn = () => {
//     console.log('state.count:',state.count);
//     if (state.count !== 0) {
//         if(state.turn === 'com') {
//                 userShootBtn2.classList.add('off');
//                 userShootBtn3.classList.add('off');
//                 comShootBtn.classList.remove('off');
//                 message.textContent = state.com;
//                 comShootBtn.addEventListener('click', shootType);
//                 store.dispatch(userTurn());
//         }else if(state.turn === 'user'){
//                 comShootBtn.classList.add('off');
//                 userShootBtn2.classList.remove('on');
//                 userShootBtn3.classList.remove('on');
//                 message.textContent = state.user;
//                 userShootBtn2.addEventListener('click', shoot2);
//                 userShootBtn3.addEventListener('click', shoot3);
//                 store.dispatch(comTurn());
//         }else{
//             message.textContent = state.text;
//         }
//     }
// };

// setTurn();
// store.subscribe(setTurn);