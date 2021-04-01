import store from '../store';
import {com,user,success2,success3,fail2,fail3} from '../modules/message';
import {remainCount} from '../modules/count';
import {comSCORE2, comSCORE3, userSCORE2, userSCORE3} from '../modules/score';
import {successOrfalse2, successOrfalse3} from '../modules/probability';

const comShootBtn = document.querySelector('#comShootBtn');
const userShootBtn2 = document.querySelector('#userShootBtn2');
const userShootBtn3 = document.querySelector('#userShootBtn3');


const setShootButton = () => {

    //com 랜덤슛 버튼 이벤트
    comShootBtn.onclick = (event) => {
        const state =store.getState();
        const {messageReducer:{turn}} = state; //비구조화 할당
        const {countReducer:{currentCount}} = state;
        const {probabilityReducer: {probability}} = state;
    
        let TARGET = turn; 
        if(currentCount === 0 || TARGET === 'user'  || TARGET === null){
            event.preventDefault();
        }else{
            resultMessage.style.visibility = "visible";
            const Probability = Number((Math.random()).toFixed(2));
            
            if(Probability <= 0.75){
                store.dispatch(successOrfalse2());
                if(probability <= 0.85){
                    store.dispatch(success2(TARGET));
                    store.dispatch(comSCORE2())
                }else {
                    store.dispatch(fail2(TARGET));
                }     
            }else{
                store.dispatch(successOrfalse3())
                if(probability <= 0.45){
                    store.dispatch(success3(TARGET));
                    store.dispatch(comSCORE3())
                }else {
                    store.dispatch(fail3(TARGET));
                }
            }
            store.dispatch(user());
            store.dispatch(remainCount());
        }
    };
    
    //사용자의 2점슛 버튼 이벤트
    userShootBtn2.onclick = (event) => {
        const state = store.getState();
        const {messageReducer:{turn}} = state; //비구조화 할당
        const {countReducer:{currentCount}} = state;
        const {probabilityReducer: {probability}} = state;
        
        let TARGET = turn;
        if(currentCount === 0 || TARGET === 'com' || TARGET === null){
            event.preventDefault();
        }else{
            resultMessage.style.visibility = "visible";
            store.dispatch(successOrfalse2());
            if(probability <= 0.85){
                store.dispatch(success2(TARGET));
                store.dispatch(userSCORE2())
            }else {
                store.dispatch(fail2(TARGET));
            }
            store.dispatch(com());
            store.dispatch(remainCount());
        }
    };
    
    //사용자의 3점슛 버튼 이벤트
    userShootBtn3.onclick = (event) => {
        const state = store.getState();
        const {messageReducer:{turn}} = state; //비구조화 할당
        const {countReducer:{currentCount}} = state;
        const {probabilityReducer: {probability}} = state;
        
        let TARGET = turn;
        if(currentCount === 0 || TARGET === 'com' || TARGET === null){
            event.preventDefault();
        }else{
            resultMessage.style.visibility = "visible";
            store.dispatch(successOrfalse3())
            if(probability <= 0.45){
                store.dispatch(success3(TARGET));
                store.dispatch(userSCORE3())
            }else {
                store.dispatch(fail3(TARGET));
            }
            store.dispatch(com());
            store.dispatch(remainCount());
        }
    };
};

export default setShootButton;

