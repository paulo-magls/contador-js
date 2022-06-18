var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var adicionar = document.getElementById('adicionar');
var subtrair = document.getElementById('subtrair');

adicionar.addEventListener('click', increment);
subtrair.addEventListener('click', decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}