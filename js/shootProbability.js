import store from '../index';
import { comSCORE2, comSCORE3, userSCORE2, userSCORE3 } from '../modules/score';

//com 슛
//(1) 슛 종류 결정 확률
// - 2점 슛 던지기 (75%) | 3점 슛 던지기 (25%)


// (2) 슛 종류별 성공 확률
// - 2점 슛 성공 확률 (75%) | 3점 슛 성공 확률(35%)


const state = store.getState();

//2점슛 
export const shoot2 = (event) => {
    const ShootProbability = Number((Math.random()).toFixed(2));
    const player = event.currentTarget.name;
    if(ShootProbability >= 75) {

        //플레이어를 구분하는 삼항연산자
        (player === 'user' ? 
            store.dispatch(userSCORE2) : 
            store.dispatch(comSCORE2)
        ) ;
    }
    state = state.count.count - 1;

    console.log('2점슛');
}

//3점슛 
export const shoot3 = (event) => {
    const ShootProbability = Number((Math.random()).toFixed(2));
    const player = event.currentTarget.name;
    if(ShootProbability <= 35) {
        //플레이어를 구분하는 삼항연산자
        (player === 'user' ? 
            store.dispatch(userSCORE3) : 
            store.dispatch(comSCORE3)
        )
    };

    state = state.count.count - 1;
    console.log('3점슛');
}

export const shootType=()=>{
    //Math.random() : 0이상 1 미만의 무작위 난수 반환
    //toFixed(n) : 반올림하여 n자리 소수점까지 나타냄
    const ShootTypeProbability =  Number((Math.random()).toFixed(2));

    //com 의 슛 종류를 결정하는 삼항연산자.
    (ShootTypeProbability >= 0.75 ? shoot2 : shoot3);
}


//user 슛
// 2. user 의 슛 종류 선택에 따른 성공 확률을 정하는 로직 코드
// (1) 슛 종류별 성공 확률
// - 2점 슛 성공 확률 (70%) | 3점 슛 성공 확률(30%)