const rightInpt = document.querySelector('.right');
const leftInput = document.querySelector('.left');
const myBody = document.getElementById('myBody');
const setText = document.querySelector('h3');

function setGradient() {

    myBody.style.background = `linear-gradient(to right, ${leftInput.value}, ${rightInpt.value})`;

    setText.textContent = myBody.style.background + ";";
}

setGradient();

rightInpt.addEventListener("input", setGradient);
leftInput.addEventListener("input", setGradient);