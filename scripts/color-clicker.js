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
	}
	getRandomColor() {
		let randomIndex = Math.floor(Math.random() * this.colors.length);
		return this.colors[randomIndex];
	}
}

let game = new Game();
console.log(game);