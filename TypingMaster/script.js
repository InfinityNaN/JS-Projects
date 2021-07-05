console.log('Typing Master');
var loremText = document.querySelector('#lorem');
console.log(loremText.innerHTML);
var text = document.querySelector('#text');
text.addEventListener('keyup', (e) => {
	if (loremText.innerHTML[text.value.length - 1] == e.target.value[text.value.length - 1]) {
		console.log('True');
		document.querySelector('#error').style.display = 'none';
	} else {
		document.querySelector('#error').innerHTML = `Error ${e.target.value[text.value.length - 1]}`;
	}
	// console.log(loremText.innerHTML.includes());
});
