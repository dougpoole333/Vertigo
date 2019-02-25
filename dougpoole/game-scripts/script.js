const $character = document.querySelector('.character')
const $timer = document.querySelector('.timer')
const $gameOver = document.querySelector('.gameover')
const $youWin = document.querySelector('.youwin')

const character = {
		x: 0,
		y: 0
	};

//------------------------Countdown Timer--------------------------------------
let startTime = 60.00

const callCountdown = setInterval(() => countdown(),100)

const stopCountdown = function(){
	clearInterval(callCountdown)
}

//Updates DOM with time remaining, precise to milisecond
const countdown = function(){
	let checker = Math.ceil(startTime)
	if (startTime <= .1) {
			stopCountdown()
			startTime = 0.00
			displayGameOverScreen();
		} else {
			startTime -= .1
		}
	$timer.innerHTML = startTime.toFixed(1)}

//-----------------------------------------------------------------------------

//------------------------Win/Lose Logic---------------------------------------
const displayGameOverScreen = function(){
	$gameOver.style.opacity = 1
}

const waitForWinScreen = function(){
	if (isCharacterAtEnd()) {
		$youWin.style.opacity = 1
		stopCountdown();
		setTimeout(() => {
			character = {x: 0,y: 0};
			$gameBoard.innerHTML = "";
			startTime = 60.00;
			$youWin.style.opacity = 0;
			grid = [];
			visitedSquares = [{x: 0, y: 0}];
			restartPoints = [];
			visitor = {x: 0,y: 0};
			displayMazeGrid(16,25,$gameBoard);
			highlightExitSquare();
			callCountdown = setInterval(() => countdown(),100)
			}, 2000)
	}
}

const isCharacterAtEnd = function(){
	if (character.x === grid.length-1 && character.y === grid.length - 1){
		return true
	} else {return false}
}


//-----------------------------------------------------------------------------

//------------------------Character Movement-----------------------------------	
//Listener for keystrokes:
document.body.addEventListener('keydown', event => {
	const keyCode = event.keyCode;
	//if the user presses directional keys,
	//prevent brouser default of scrolling the page.
	if([37,38,39,40].includes(keyCode)) {
		event.preventDefault();
	}
	switch (keyCode) {
		case 37:
		moveLeft();
		break;
		case 38:
		moveUp();
		break;
		case 39:
		moveRight();
		break;
		case 40:
		moveDown();
		break;
	}
});

const isThereWallAt = function(x,y,wall){
	return grid[x][y][wall]
};

const characterVisitSquare = function(x,y){
	let div = document.querySelector(`.x${x}.y${y}`)
	div.classList.add("charactervisited")
}

const moveRight = function(){
	if (isCoordinateInGrid(character.x + 1, character.y) && !isThereWallAt(character.x, character.y, "right")){
		console.log("moving right")
			character.x += 1
		moveCharacterTo(character.x, character.y)
		characterVisitSquare(character.x, character.y)
	}
}

const moveDown = function(){
	if (isCoordinateInGrid(character.x, character.y + 1) && !isThereWallAt(character.x, character.y, "bottom")){
		console.log("moving down")
			character.y += 1
		moveCharacterTo(character.x, character.y)
		characterVisitSquare(character.x, character.y)
	}
}

const moveUp = function(){
	if (isCoordinateInGrid(character.x, character.y - 1) && !isThereWallAt(character.x, character.y, "top")){
		console.log("moving up")
			character.y -= 1
		moveCharacterTo(character.x, character.y)
		characterVisitSquare(character.x, character.y)
	}
}

const moveLeft = function(){
	if (isCoordinateInGrid(character.x - 1, character.y) && !isThereWallAt(character.x, character.y, "left")){
		console.log("moving left")
			character.x -= 1
		moveCharacterTo(character.x, character.y)
		characterVisitSquare(character.x, character.y)
	}
}

//Changes characters position in DOM
const moveCharacterTo = function(x,y){
	console.log(`Character moved to ${x}, ${y}`)
	$character.style.left = (x*25).toString() + "px";
	$character.style.top = (y*25).toString() + "px";
	waitForWinScreen();
}

const highlightExitSquare = function(){
	let squares = document.querySelectorAll(".square")
	let exitSquare = squares[squares.length-1]
	exitSquare.classList.add("exit")
}
//---------------------------------------------------------------------------------

displayMazeGrid(16,25,$gameBoard);
highlightExitSquare();
