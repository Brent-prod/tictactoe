let divs = document.querySelectorAll('.cell');
let turn = 1;
let counter = 0;

let winningCondition1 = document.querySelectorAll('#cell-1, #cell-2, #cell-3');
let winningCondition2 = document.querySelectorAll('#cell-4, #cell-5, #cell-6');
let winningCondition3 = document.querySelectorAll('#cell-7, #cell-8, #cell-9');
let winningCondition4 = document.querySelectorAll('#cell-1, #cell-4, #cell-7');
let winningCondition5 = document.querySelectorAll('#cell-2, #cell-5, #cell-8');
let winningCondition6 = document.querySelectorAll('#cell-3, #cell-6, #cell-9');
let winningCondition7 = document.querySelectorAll('#cell-1, #cell-5, #cell-9');
let winningCondition8 = document.querySelectorAll('#cell-3, #cell-5, #cell-7');

for (let i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', playerAction);
}

function playerAction(event) {
	if (event.target.textContent != '') return;

	counter++;

	if (turn === 1) {
		event.target.textContent = 'X';
		document.querySelector('#messageSection').textContent = 'Player "O" turn';
		turn = 2;
	} else if (turn === 2) {
		event.target.textContent = 'O';
		document.querySelector('#messageSection').textContent = 'Player "X" turn';
		turn = 1;
	}
	if (counter === 9) {
		document.querySelector('#messageSection').textContent = `It's a Draw`;
	}

	winningCondition(winningCondition1[0].innerText, winningCondition1[1].innerText, winningCondition1[2].innerText);
	winningCondition(winningCondition2[0].innerText, winningCondition2[1].innerText, winningCondition2[2].innerText);
	winningCondition(winningCondition3[0].innerText, winningCondition3[1].innerText, winningCondition3[2].innerText);
	winningCondition(winningCondition4[0].innerText, winningCondition4[1].innerText, winningCondition4[2].innerText);
	winningCondition(winningCondition5[0].innerText, winningCondition5[1].innerText, winningCondition5[2].innerText);
	winningCondition(winningCondition6[0].innerText, winningCondition6[1].innerText, winningCondition6[2].innerText);
	winningCondition(winningCondition7[0].innerText, winningCondition7[1].innerText, winningCondition7[2].innerText);
	winningCondition(winningCondition8[0].innerText, winningCondition8[1].innerText, winningCondition8[2].innerText);

	function winningCondition(firstCell, secondCell, thirdCell) {
		if (firstCell != '' || secondCell != '' || thirdCell != '') {
			if (firstCell === secondCell && secondCell === thirdCell) {
				document.querySelector('#messageSection').textContent = `${firstCell} wins`;
			}
		}
	}
}
