var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var adicionar = document.getElementById('adicionar');
var subtrair = document.getElementById('subtrair');

adicionar.addEventListener('click', increment);
subtrair.addEventListener('click', decrement);

function increment() {
    if(currentNumber<10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber>0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}