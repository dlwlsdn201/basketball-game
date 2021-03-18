const CountButtons = document.querySelectorAll('#countBtn');
const ShowCount = document.querySelector('#countShow');

export const gameCount = {count : 0};

const setCount = (event) => {
    gameCount.count = Number(event.currentTarget.value.slice(0,2));
    ShowCount.textContent = gameCount.count;
}


for (var i = 0 ; i < CountButtons.length; i ++) 
    CountButtons[i].addEventListener("click", (event) => setCount(event));
