const $gameBoard = document.querySelector('.gameboard')
const $landingpage = document.querySelector('.landingpage')

const grid = []

let visitedSquares = [{x: 0, y: 0}]
let restartPoints = []

let visitor = {
	x: 0,
	y: 0
}

const isCoordinateInGrid = (x,y) => {
	if(x<0 || y<0 || x>grid.length-1 || y>grid.length-1){
		return false
	} else {return true}
};

const areUnvisitedSquares = function(dimension){
	if (visitedSquares.length < dimension*dimension){return true
	} else {return false}
}

//takes boolean for animation
const runVisitor = function(dimension,animation){
	if(!areUnvisitedSquares(dimension)){return}
	//if no open neighbor, move visitor to random visited square
	// findRestart(visitor.x, visitor.y)

	//picks neighbor
	let newNeighbor = pickOpenNeighbor(visitor.x,visitor.y)

	//removes borders
	if (newNeighbor.x > visitor.x){removeRightBorder(visitor.x,visitor.y)}
	else if (newNeighbor.x < visitor.x){removeLeftBorder(visitor.x,visitor.y)}
	else if (newNeighbor.y > visitor.y){removeBottomBorder(visitor.x,visitor.y)}
	else if (newNeighbor.y < visitor.y){removeTopBorder(visitor.x,visitor.y)}
	else {return}

	//shows animation visitor square
	if(animation===true){
	showSquareWalls(grid[visitor.x][visitor.y]);
	showVisited(grid[visitor.x][visitor.y]);
	}
	
	//moves visitor
	visitSquare(newNeighbor.x, newNeighbor.y)

	//shows animation neighbor square
	if (animation===true){
	showSquareWalls(grid[newNeighbor.x][newNeighbor.y]);
	showVisited(grid[newNeighbor.x][newNeighbor.y]);
	}

	visitedSquares.push({x: newNeighbor.x, y: newNeighbor.y})
	restartPoints.push({x: newNeighbor.x, y: newNeighbor.y})
	flushRestartPoints()
	
	//if running animation flush every change to dom
	// if (animation === true){
		
	// }

};

const findRestart = function(x,y){
	if (!isOpenNeighbor(visitor.x, visitor.y)){
	let randomIndex = Math.floor(Math.random()*restartPoints.length)
	visitor = restartPoints[randomIndex]
	return visitor
	} else {return}
}

const flushRestartPoints = function(){
	restartPoints.forEach(function(el){if(!isOpenNeighbor(el.x,el.y)) removeFromRestart(el)})
	// restartPoints.forEach(function(el){if(restartPoints.indexOf(el)>2) removeFromRestart(el)})
}

const removeFromRestart = function(point){
	let index = restartPoints.indexOf(point)
	restartPoints.splice(index, 1)
}

const removeLeftBorder = function(x,y){
	if(!isCoordinateInGrid(x-1,1)) {return}
	grid[x][y].left = false
	grid[x-1][y].right = false
}

const removeRightBorder = function(x,y){
	if(!isCoordinateInGrid(x+1,1)) {return}
	grid[x][y].right = false
	grid[x+1][y].left = false
}

const removeTopBorder = function(x,y){
	if(!isCoordinateInGrid(x,y-1)) {return}
	grid[x][y].top = false
	grid[x][y-1].bottom = false
}

const removeBottomBorder = function(x,y){
	if(!isCoordinateInGrid(x,y+1)){return}
	grid[x][y].bottom = false
	grid[x][y+1].top = false
}


const visitSquare = function(x,y){
	if(!isCoordinateInGrid(x,y)){return}
	grid[x][y].visited = true
	visitor.x = x
	visitor.y = y
	// //Can remove 
	// showGrid()
}

const populateGrid = function(scale){
	for(let i=0; i<scale; i++){
		let newArray = []
		grid[i]= newArray
		for (let j=0; j<scale; j++){
			grid[i][j]={
				x: i,
				y: j,
				top: true,
				right: true,
				bottom: true,
				left: true,
				visited: false}
		}
	};
	visitSquare(0,0)
}

const isTopOpen = function(x,y){
	if (!isCoordinateInGrid(x,y-1)){return}
		return !grid[x][y-1].visited
}

const isBottomOpen = function(x,y){
	if (!isCoordinateInGrid(x,y+1)){return}
		return !grid[x][y+1].visited
}

const isLeftOpen = function(x,y){
if (!isCoordinateInGrid(x-1,y)){return}
	return !grid[x-1][y].visited
}

const isRightOpen = function(x,y){
if (!isCoordinateInGrid(x+1,y)){return}
	return !grid[x+1][y].visited
}

const isOpenNeighbor = function(x,y){
	if (isRightOpen(x,y) || isLeftOpen(x,y) || isTopOpen(x,y) || isBottomOpen(x,y)){return true}
		else {return false}
}

//For square at x,y, finds open neighbor and returns square object.
const pickOpenNeighbor = function(x,y){
	if (!isOpenNeighbor(x,y)){
	let randomIndex = Math.floor(Math.random()*restartPoints.length)
	visitor.x = restartPoints[randomIndex].x
	visitor.y = restartPoints[randomIndex].y
	return pickOpenNeighbor(restartPoints[randomIndex].x,restartPoints[randomIndex].y)
	}

	const openNeighbors = []
	if (isRightOpen(x,y)) {openNeighbors.push(grid[x+1][y])}
	if (isLeftOpen(x,y)) {openNeighbors.push(grid[x-1][y])}
	if (isTopOpen(x,y)) {openNeighbors.push(grid[x][y-1])}
	if (isBottomOpen(x,y)) {openNeighbors.push(grid[x][y+1])}

	const randomIndex = Math.floor(Math.random()*openNeighbors.length)
	return openNeighbors[randomIndex]
}

const hasVisitorBegun = function(){
	if (visitedSquares.length > 1) {return true
	} else {return false}
}

const showSquareWalls = function(object){
	let div = document.querySelector(`.x${object.x}.y${object.y}`)
	if (object.top === true) {div.classList.add("top")
		} else {div.classList.remove("top")};
	if (object.right === true) {div.classList.add("right")
		} else {div.classList.remove("right")};
	if (object.bottom === true) {div.classList.add("bottom")
		} else {div.classList.remove("bottom")};
	if (object.left === true) {div.classList.add("left")
		} else {div.classList.remove("left")};
}

const showVisited = function(object){
	let div = document.querySelector(`.x${object.x}.y${object.y}`)
	if (object.visited === true) {div.classList.add("visited")
		} else {div.classList.remove("visited")};
}

const showGrid = function(squareDim, destination){
	grid.forEach(function(array){
		array.forEach(function(object){
			let div = document.createElement("div");
			div.classList.add("square",`x${object.x}`,`y${object.y}`)
			div.style.top = object.y*squareDim + "px"
			div.style.left = object.x*squareDim + "px"
			destination.append(div)
			showSquareWalls(object);
			showVisited(object);
		})
		})
	}

const displayMazeGrid = function(dimension, squareDim, destination){
	populateGrid(dimension);
	while(visitedSquares.length < dimension*dimension){runVisitor(dimension,false)};
	showGrid(squareDim, destination);
	
}

const displayBlankGrid = function(dimension, squareDim, destination){
	populateGrid(dimension);
	showGrid(squareDim, destination);
}

const runVisitorAnimation = function(dimension, squareDim, interval){
	populateGrid(dimension);
	showGrid(squareDim, $landingpage);
	setInterval(el => {runVisitor(dimension,true)},interval)
}


