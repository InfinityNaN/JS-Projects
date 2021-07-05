console.log('Text Counter');
var text = document.getElementById('text');
var limit = document.getElementById('limit');
limit.innerHTML = 20;
text.addEventListener('keyup', textCounter);
function textCounter(e) {
	console.log(e.target.value);
	limit.innerHTML = 20 - e.target.value.length;
	text.setAttribute('maxlength', '20');
}
