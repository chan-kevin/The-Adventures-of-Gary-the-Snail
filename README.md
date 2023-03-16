# The Adventure of Gary the Snail
## LIVE SITE: (https://kchannn13.github.io/Javascript_Project/)

<img src="./assets/image/Level1.png">

# **Background:**

<p>
The Adventure of Gary the Snail is a 2D interactive puzzle game where Gary the snail is lost underwater. The main objective of the game is to help Gary get to home to Spongebob in Bikini Bottom. 

There are 6 frames in a 2x3 formation in every scene which can be moved around to help Gary get from the starting frame to the frame where the bubble is at. Each bubble leads to the next scene/level. Gary moves in one fixed direction until he hits an obstacle, where he will either lose a life (jellyfish) or start moving in the opposite direction (rock).

The game intends to introduce functionalities slowly to allow users to get the hang of it. There will be approximately 3-5 levels in this game.
</p>

<br />

# **Functionalities:**

In The Adventure of Gary the Snail, user will be able to:
1. Swap the position of two frames by clicking consecutively on both frames.
2. Obstacles that cause the character to lose their lives will result in the level restarting.
3. Upon touching bubble, Gary floats away in it and next level starts
4. Upon reaching SPongebob's house (pineapple) in final level, Spongebob appears
5. A rule page will also be provided to the users

<br />

# **Feature Implementation** #

<img src="./assets/image/code.png">

<br />

> ### While going into next level, the above code using async to make sure Gary won't starting moving while player is in the loading page.

<br />

<img src="./assets/image/code2.png">

<br />

> ### Collision detection for jellyfish and gary. While the collision happens, the jellyfish will start another animation and plays the sound. And also setting game to gameover, using setTimeout to make sure the animation is done.

<br />

# **Wireframe:**

![The Adventure of Gary the Snail Wireframe](./assets/readme/wireframe.jpg)

> - Nav links include links to this project's Github repo and my LinkedIn

## **Instruction and Explanation will be the follow:** 
### Help Gary get back home! Swap the position of frames by clicking consecutively on two frames, while making use of, or avoiding some obstacles: 
> - Rock: Changes the direction that Gary is moving in.
> - Jellyfish: Zaps Gary (Game Over) 

<br />

# **Technologies, Libraries, APIs**

This project will be implemented with the following technologies:
- The Canvas API to render the game board
- Collisions Detection

<br />

# **Implementation Timeline**

- **Friday Afternoon & Weekend:** Setup project. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. Create Board and one tile to test out. Create Gary and get him automaticlly moving one direction.

<br />

- **Monday:** If one tile and Gary works and Gary can automatically moving one direction and moving in oppsite direction when hitting a wall. Try to create another tile and making two tiles connect and make Gary move smoothly on them. Once done, create a obstactle and a goal to test out game over and collisions detect.

<br />

- **Tuesday:** Adding user interaction and swapping two tiles. Make sure Gary can move the same after swapping. Next, add a tile with a hole to make Gary fall to the tile right below if the tile is at the uppper level.

<br />

- **Wednesday:** Start styling the page. Adding those nav links and make the page looks better.

<br />

- **Thursday Morning:** Deploy to GitHub pages. If time, rewrite this proposal as a production README.