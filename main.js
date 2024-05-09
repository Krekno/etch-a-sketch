const container = document.querySelector('#container')

x = prompt("Enter the number of columns")
y = prompt("Enter the number of rows")

container.style.gridTemplateColumns = `repeat(${x}, 50px)`

for (let i = 0; i < y; i++) {
	for (let j = 0; j < x; j++) {
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
