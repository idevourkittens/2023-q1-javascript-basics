let btn = document.getElementById("advice-button");
let output = document.getElementById("advice");

let advisors = [
	"A wise man once told me",
	"Mother always says",
	"My Uncle Rupert once said",
];

let howOften = ["never", "always", "as often as you can", "never ever"];

let verbs = ["run with", "swim with", "eat a", "climb a", "dance with"];

let adjectives = [
	"spiky",
	"furry",
	"funny",
	"spicy",
	"odd",
	"loud",
	"scary",
	"goofy",
	"fun",
	"colorful",
];

let nouns = [
	"Elephants",
	"Humans",
	"Chainsaws",
	"Nuclear Bombs",
	"Couches",
	"Computers",
	"Backpacks",
	"Teachers",
	"Video Games",
	"Losers",
];
let getRandomIndex = function (a) {
	let rand = Math.random() * a.length;
	return Math.floor(rand);
};

let getRandomWord = function (a) {
	return a[getRandomIndex(a)];
};

let generateAdvice = function (ad, ho, ve, adj, no) {
	let randomAdvice =
		getRandomWord(ad) +
		" " +
		getRandomWord(ho) +
		" " +
		getRandomWord(ve) +
		" " +
		getRandomWord(adj) +
		" " +
		getRandomWord(no);

	console.log(randomAdvice);
	return randomAdvice;
};

let rand = getRandomIndex(advisors);

btn.addEventListener("click", function () {
	//console.log("Clicked!")
	let advice = generateAdvice(advisors, howOften, verbs, adjectives, nouns);
	output.textContent = advice;
});
