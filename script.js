var input = ['a', 'b', 'c', 'd','e','f',0,1,2,3,4,5,6,7,8,9]
var bg = document.getElementById('container');
var inputCode = document.getElementById('color-code');
var colorBtn = document.getElementById('generate-btn');
var checkBtn = document.getElementById('input-btn');

colorBtn.addEventListener('click', function (event) {
	var hexColor = '#';

	for (var i = 0; i < 6; i++){
		hexColor = hexColor+ input[randomNumber()];
	}
	inputCode.value = hexColor;
	bg.style.background= hexColor;
	
})

function randomNumber() {
	return Math.floor(Math.random() * input.length);
}

checkBtn.addEventListener('click', function (event) {
	bg.style.background= inputCode.value;
})