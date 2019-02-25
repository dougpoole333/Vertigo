
Vertigo: A dizzying maze game.<br><br>

Game:<br>
https://pages.git.generalassemb.ly/dougpoole333/project-1/dougpoole/index.html
<br><br>
Quicktime video:<br>
https://drive.google.com/file/d/1u9b-HpE6pUciAqkyNBN1urJjuZMnGFZb/view?usp=sharing
<br><br>
Gameplay:<br>
The player has one minute to guide their square with the arrowkeys from one corner to the opposite corner of the maze.  As the player moves their square, the gameboard rotates but the directional controls remain the same, requiring the player to constantly reorient their sense of direction.  In future versions, the gameboard spins faster as the user progresses from level to level.<br><br>

Algorithm:<br>
Every time the page refreshes, or a level is passed, a new solvable maze is generated with a subtractive algorithm.  The alorithm begins with a complete grid.  A "visitor" begins in the top left corner, selects an open "neighbor at random, and visits the neighbor, eliminating the wall between them.  This process continues until the visitor has no open neighbors to visit.  At this point, the visitor selects at random a previously visited square (one that DOES have open neighbor) from a contunuously updated array, and from that point restarts its process, creating a new branch in the maze.  This process is more clearly visible when set to an interval, showing the animation that plays in the landing screen of this game (the landing screen is not part of the currently deployed model, but is visible in the attached quicktime video.
