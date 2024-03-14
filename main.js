const container = document.querySelector('#container')

for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const div = document.createElement('div')
		div.classList.add('square')
		container.appendChild(div)
	}
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
	square.addEventListener('mouseover', () => {
		square.style.backgroundColor = "red";
	});
});

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
container.appendChild(resetButton);

resetButton.addEventListener('click', () => {
	squares.forEach(square => {
		square.style.backgroundColor = "black";
	});
});