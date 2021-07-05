console.log('Rock Paper Scissore');
var usr = 0,
	com = 0;
check = true;
var btn = document.querySelectorAll('button');
var rock = ['rock', 'paper', 'scissors'];
console.log(btn);
for (let b of btn) {
	b.addEventListener('click', rockPaper);
}

function rockPaper(e) {
	// console.log('Rock Paper');
	var btnValue = e.target.innerHTML.trim().toLowerCase();
	var chance = Math.floor(Math.random() * 3);
	var result = rock[chance];
	console.log(btnValue, result);
	if (btnValue == 'rock' && result == 'paper') {
		console.log('Winner');
		usr++;
		check = true;
	} else if (btnValue == 'scissors' && result == 'paper') {
		console.log('Winner');
		check = true;
		usr++;
	} else if (btnValue == 'scissors' && result == 'rock') {
		console.log('Winner');
		check = true;
		usr++;
	} else {
		console.log('Loss');
		check = false;
		com++;
	}
	document.querySelector('.score').innerHTML = `Score : \nUser Won - ${usr}   ||   Computer Won - ${com}`;
	if (check) {
		document.querySelector('.message').innerHTML = 'You Win';
	} else {
		document.querySelector('.message').innerHTML = 'You Loss';
	}
}
