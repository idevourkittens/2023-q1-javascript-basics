//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore we know ctx is not null
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

class ClickShape {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.xDirection = 0;
		this.yDirection = 1;
		this.speed = 5;
		this.isVisible = true;
		this.isClicked = true;
		this.color = "silver";
		this.w = 10;
		this.h = 10;
	}
	directionThatSoHappensToBeMoving() {
		if (this.xDirection === 0 && this.yDirection === 1) {
			return "down";
		}
		if (this.xDirection === 0 && this.yDirection === -1) {
			return "up";
		}
		if (this.xDirection === 1 && this.yDirection === -1) {
			return "right";
		}
		return "left";
	}
	update() {
		if (!this.isVisible) {
			return;
		}
		switch (this.directionThatSoHappensToBeMoving()) {
			case "down":
				this.isVisible = this.y < canvas.height;
				break;
			case "up":
				this.isVisible = this.y + this.h > 0;
				break;
			case "right":
				this.isVisible = this.x < canvas.width;
				break;
			case "left":
				this.isVisible = this.x + this.w > 0;
				break;
		}
		this.x += this.xDirection * this.speed;
		this.y += this.yDirection * this.speed;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}

class Game {
	constructor() {
		this.score = 0;
		this.colors = [
			"red",
			"orange",
			"yellow",
			"green",
			"blue",
			"purple",
			"pink",
		];
		this.targetColor = this.getRandomColor();
		/** @type {Array<ClickShape>}*/
		this.shapes = [];
		this.spawnInterval = 500; //milliseconds
		this.lastSpawnTime = 0;
	}
	getRandomColor() {
		let randomIndex = Math.floor(Math.random() * this.colors.length);
		return this.colors[randomIndex];
		console.log();
	}

	spawnShape(elapsedTime) {
		this.lastSpawnTime += elapsedTime;
		if (this.lastSpawnTime < this.spawnInterval) {
			return;
		}
		this.lastSpawnTime = 0;
		let s = new ClickShape();
		s.color = this.getRandomColor();
		s.y = 0 - s.w;
		// # 0 - 7o
		let randX = Math.floor(Math.random() * (canvas.width / s.w) - s.w);
		s.x = randX * s.w;
		this.shapes.push(s);
		console.log();
	}
	update(elapsedTime) {
		this.spawnShape(elapsedTime);
		this.shapes.forEach((s) => {
			s.update();
			s.draw();
		});
		console.log();
	}
	draw() {
		this.shapes.forEach((s) => {
			s.update();
		});
		console.log();
	}
}

let game = new Game();
console.log(game);

let currentTime = 0;

let gameLoop = function (timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timestamp - currentTime;
	currentTime = timestamp;
	game.update(elapsedTime);
	game.draw();
	window.requestAnimationFrame(gameLoop);
	console.log();
};
window.requestAnimationFrame(gameLoop);
