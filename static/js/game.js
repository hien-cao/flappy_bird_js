// game.js contain all the logic for the game

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// load images
const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

bird.src = 'static/images/bird.png';
bg.src = 'static/images/bg.png';
fg.src = 'static/images/fg.png';
pipeNorth.src = 'static/images/pipeNorth.png';
pipeSouth.src = 'static/images/pipeSouth.png';

// load audio
const fly = new Audio();
const scor = new Audio();

fly.src = 'static/sounds/fly.mp3';
scor.src = 'static/sounds/score.mp3';

// some varaibles
const gap = 85;
let constant;

let bX = 50; // initial position of the bird
let bY = 150; // initial position of the bird

const gravity = 1.5;
const velocity = 25;
let score = 0;

// press the key board
document.addEventListener('keydown', (e) => {
	if (e.keyCode == 65 || e.keyCode == 32 || e.keyCode == 38) {
		bY -= velocity;
		fly.play();
	}
});

// pipe coordinates
const pipes = [];

function getRandomPipeY() {
	const value = Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height;
	return value >= -190 ? value : -190;
}
// draw images
function draw() {
	// add the background
	context.drawImage(bg, 0, 0);
	// add pipes
	if (pipes.length == 0) {
		pipes[0] = {
			x: canvas.width - 500,
			y: 0
		};

		pipes[1] = {
			x: canvas.width - 250,
			y: -100
		};
	}
	for (let i = 0; i < pipes.length; i++) {
		constant = pipeNorth.height + gap;
		context.drawImage(pipeNorth, pipes[i].x, pipes[i].y);
		context.drawImage(pipeSouth, pipes[i].x, pipes[i].y + constant);
		pipes[i].x--;
		if (pipes[i].x == 549) {
			pipes.push({
				x: canvas.width,
				y: getRandomPipeY()
			});
		}
		// collision
		if (
			(bX + bird.width >= pipes[i].x &&
				bX <= pipes[i].x + pipeNorth.width &&
				(bY <= pipes[i].y + pipeNorth.height || bY + bird.height >= pipes[i].y + constant)) ||
			bY + bird.height >= canvas.height - fg.height
		) {
			location.reload();
		}
		// score
		if (pipes[i].x == 8 && bX <= canvas.height - fg.height) {
			score++;
			scor.play();
		}
	}
	// add ground
	context.drawImage(fg, 0, canvas.height - fg.height);
	// add the bird
	context.drawImage(bird, bX, bY);

	// bird affected by gravity
	bY += gravity;

	// print the score to canvas
	context.fillStyle = '#000';
	context.font = ' 20px Verdana';
	context.fillText('Score : ' + score, 10, canvas.height - 20);

	requestAnimationFrame(draw);
}

draw();

/* // game.js contain all the logic for the game

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// load images
const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

bird.src = 'static/images/bird.png';
bg.src = 'static/images/bg.png';
fg.src = 'static/images/fg.png';
pipeNorth.src = 'static/images/pipeNorth.png';
pipeSouth.src = 'static/images/pipeSouth.png';

// load audio
const fly = new Audio();
const scor = new Audio();

fly.src = 'static/sounds/fly.mp3';
scor.src = 'static/sounds/score.mp3';

// some varaibles
const gap = 85;
let constant;

let bX = 50; // initial position of the bird
let bY = 150; // initial position of the bird

const gravity = 1.5;
const velocity = 25;
let score = 0;

// press the key board
document.addEventListener('keydown', moveUp);

function moveUp(e) {
	if (e.keyCode == 65) {
		bY -= velocity;
		fly.play();
	}
}

// pipe coordinates
const pipes = [];

function getRandomPipeY() {
	return Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height > -200
		? Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
		: -200;
}
// draw images
function draw() {
	// add the background
	context.drawImage(bg, 0, 0);
	// add pipes
	if (pipes.length == 0) {
		pipes[0] = {
			x: canvas.width - 500,
			y: 0
		};

		pipes[1] = {
			x: canvas.width - 250,
			y: -100
		};
	}
	for (let i = 0; i < pipes.length; i++) {
		constant = pipeNorth.height + gap;
		context.drawImage(pipeNorth, pipes[i].x, pipes[i].y);
		context.drawImage(pipeSouth, pipes[i].x, pipes[i].y + constant);
		pipes[i].x--;
		if (pipes[i].x == 549) {
			pipes.push({
				x: canvas.width,
				y: getRandomPipeY()
			});
		}
		// collision
		if (
			(bX + bird.width >= pipes[i].x &&
				bX <= pipes[i].x + pipeNorth.width &&
				(bY <= pipes[i].y + pipeNorth.height || bY + bird.height >= pipes[i].y + constant)) ||
			bY + bird.height >= canvas.height - fg.height
		) {
			location.reload();
		}
		// score
		if (pipes[i].x == 8 && bX <= canvas.height - fg.height) {
			score++;
			scor.play();
		}
	}
	// add ground
	context.drawImage(fg, 0, canvas.height - fg.height);
	// add the bird
	context.drawImage(bird, bX, bY);

	// bird affected by gravity
	bY += gravity;

	// print the score to canvas
	context.fillStyle = '#000';
	context.font = ' 20px Verdana';
	context.fillText('Score : ' + score, 10, canvas.height - 20);

	requestAnimationFrame(draw);
}

draw();
 */
