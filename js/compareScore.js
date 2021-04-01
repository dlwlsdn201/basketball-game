const stateMessage = document.querySelector('#stateMessage');

const compareScore =(state) => {
    const {scoreReducer:{comScore, userScore}} = state;
    if (comScore > userScore){
        stateMessage.textContent = 'com 승리!';
    }else if (comScore < userScore){
        stateMessage.textContent = '유저 승리!';
    }else{ 
        stateMessage.textContent = '무승부';
    };
}

export default compareScore;