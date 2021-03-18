const CountButtons = document.querySelectorAll('#countBtn');
const ShowCount = document.querySelector('#countShow');

setCount = (event) => {
    const count = Number(event.currentTarget.value.slice(0,2));
    ShowCount.textContent = count;
}


for (var i = 0 ; i < CountButtons.length; i ++) 
    CountButtons[i].addEventListener("click", (event) => setCount(event));
