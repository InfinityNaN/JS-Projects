let com = 0,
	usr = 0,
	ele = ['Head', 'Tail'];
let btn = document.querySelectorAll('button');
for (let b = 0; b < btn.length; b++) {
	btn[b].addEventListener('click', coinToss);
}
function coinToss(e) {
	let chance = Math.floor(Math.random() * 2);
	let result = ele[chance];
	let userChoice = e.target.innerHTML.trim();
	if (result == userChoice) {
		usr++;
	} else {
		com++;
	}
	document.querySelector('.output').innerHTML = `User Won - ${usr}   ||   Computer Won - ${com}`;
}
