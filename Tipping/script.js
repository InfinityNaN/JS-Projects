// querySelector, addEventListner, innerHTMl, innerText
var btn = document.querySelector('button');
var inp = document.querySelector('input');
var output = document.querySelector('.output');
// console.log(btn);
btn.addEventListener('click', showMessage);

function showMessage() {
	// console.log(`Welcome to the team ${inp.value}`);
	output.innerHTML = `Donate 15% Of Our Salary For Education :  ${((inp.value * 15) / 100).toFixed(2)}`;
}
