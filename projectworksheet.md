# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 17th| Project Description | Complete
|Dec 17th| Wireframes / Priority Matrix / Functional Components | Complete
|Dec 17th| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 18th| Pseudocode / actual code | Complete
|Dec 18th| Navigatable Model  | Complete
|Dec 18th| Clock and Win/Lose logic | Complete
|Dec 19th| MVP | Complete
|Dec 19th| Randomizing Map Generator | Complete
|Dec 20th| Git Hub Stuff/Readme | Complete
|Dec 20th| Quicktime Vid | Complete
|Dec 21st| Present | Complete


## Project Description

Gameplay:
The player has one minute to guide their square with the arrowkeys from one corner to the opposite corner of the maze. As the player moves their square, the gameboard rotates but the directional controls remain the same, requiring the player to constantly reorient their sense of direction. In future versions, the gameboard spins faster as the user progresses from level to level.


Algorithm:
Every time the page refreshes, or a level is passed, a new solvable maze is generated with a subtractive algorithm. The alorithm begins with a complete grid. A "visitor" begins in the top left corner, selects an open "neighbor at random, and visits the neighbor, eliminating the wall between them. This process continues until the visitor has no open neighbors to visit. At this point, the visitor selects at random a previously visited square (one that DOES have open neighbor) from a contunuously updated array, and from that point restarts its process, creating a new branch in the maze. This process is more clearly visible when set to an interval, showing the animation that plays in the landing screen of this game (the landing screen is not part of the currently deployed model, but is visible in the attached quicktime video.


## Wireframes

Wireframes:
https://drive.google.com/drive/folders/1PdvKXWe-wIfAZmhueNoYQaFfcsBgebXu?usp=sharing

Wireframes of main MVP features and post-MVP features.

## Priority Matrix
https://drive.google.com/drive/folders/1PdvKXWe-wIfAZmhueNoYQaFfcsBgebXu?usp=sharing

Priority matrix of MVP, Post-MVP and Administrative features.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

-Create game board, and character that can navigate the game board
-Create maze barriers
-Create clock
-Create collision and win logic
-Create basic CSS styles and animations
-Create restart button.

#### PostMVP 

-Create a function that randomly generates the maze barriers in a way that is solvable, so additional levels can be infinite.
-Create a score keeping function
-Create 'chill pill' time bonuses
-Create more advanced css styles for character and maze.
-Create time sensitive game screen distortions, to mimic increasing panic.
-Create collapsing character animation, walking character animations, and a game over screen.


## Functional Components

### Landing Page
	Low priority.  Onload graphics, with a start button.
### Game Initialization
	Clicking start button renders the character, renders the maze, and starts the clock.
### Playing The Game 
	Player navigates Dougie through the maze
### Winning The Game
	case a) In the mvp, if I can only implement one level, the player's score will be the time it took to navigate the 			maze.
	case b) If i can implement an infinite loop of levels, the players score will be the number of levels they navigate until time runs out.  This score gets logged/displayed when time runs out.
### Resetting The Game
	Simple reset function, resetting the clock, and re-rendering the character and maze.
	
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Landing Page/start button | L | 1hrs| N/a | N/a |
| Creating game board, character| H | 2 hrs | N/a| N/a |
| Creating maze and collison logic | H | 4hrs| N/a | N/a |
| Create clock and win logic | H | 2hrs| N/a | N/a |
| Create basic art, CSS styles and animations | H | 4hrs | N/a | N/a |
| Create clock and win logic | H | 2hrs| N/a | N/a 
| Create clock and win logic | H | 2hrs| N/a | N/a |
| Create function that randomly generates mazes | M | 6hrs| N/a | N/a |
| Create Time dependent CSS styles | M | 3hrs| N/a | N/a |
| Create collapsing character/walking animation | L | 2 hrs? | NA | NA |
| Quicktime and Readme Stuff | H | 2 hrs | NA | NA |
| Total | H | 30hrs| 5hrs | 5hrs |

## Helper Functions


## Additional Libraries
See Randomscript.js for grid populating and maze generating functions.
 
 N/A

## Code Snippet

https://slack-files.com/T0351JZQ0-FF038JM9R-c3fe1e0ee2

populateGrid generates a two-dimentional array of 'square' objects, which are then manipulated by the 'visitor' to generate the maze.


## Issues and Resolutions
I had huge issues integrating my two seperate javascript files.  It was somewhat resolved by listing scripts sequentially in my html file, but im still working out the kinks.

