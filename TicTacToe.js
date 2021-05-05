let divs = document.querySelectorAll('.cell');
let turn = 1;

for (let i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', playerAction);
	// console.log('clicked');
	function playerAction(event) {
		if (event.target.innerHTML != '') return;

		if (turn === 1) {
			event.target.innerHTML = 'X';
			document.querySelector('#messageSection').innerHTML = 'Player two turn';
			turn = 2;
		} else if (turn === 2) {
			event.target.innerHTML = 'O';
			document.querySelector('#messageSection').innerHTML = 'Player  turn';
			turn = 1;
		}
	}
}
// // - needs to track any clicks that happen on our cells -- KIND OF DONE
// // - needs to check if a cell was previously clicked -- DONE

// the grid cells should have the correct player turn highlighted -- DONE
// -- maybe different colors for each player?

// should display a message informing the current player it’s their turn -- DONE
// -- perhaps a change in color each turn?

// check if a player has won

let cellContent = document.querySelector('#cell-1').innerHTML;
console.log(cellContent);

// check if the game ended in a draw
// end the game if any of the two conditions above have been met

// should show us who won the game
// -- an alert display

// should show us if the game ended in a draw
// -- another alert

// restart button
// -- something that would re-set all parameters (reload page or similar?) - // Zara mentioned there is a JS function to do it
