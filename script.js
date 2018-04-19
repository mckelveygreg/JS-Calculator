

var equation = [];
var total = 0;
var answer = document.querySelector('#totalNum');
var hist = document.querySelector('#history');

function addListeners() {
	document.querySelectorAll('button').forEach(function (button) {
		var value = button.value;
		button.addEventListener('click', function () {


			if (value === '=') {
				calculate(value);
			} else if (value === 'ac') {
				answer.innerHTML = 0;
				hist.innerHTML = 'History';
				equation = [];
			} else if (value === 'del') {
				equation.pop();
				writeHistory();
			} else {
				equation.push(value);
				console.log(equation);
				writeHistory();
			}
		});
		//console.log(button.value);
	});
};

function calculate(button) {
	console.log(button);
	total = stringMath(equation.join(''));
	answer.innerHTML = total;
}

function writeHistory() {
	hist.innerHTML = equation.join('');
	console.log('writeHistory');
}

function add(value, num) {
	addListeners();
	return value + num;
}
//button;
addListeners();
