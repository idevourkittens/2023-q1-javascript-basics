let btn = document.getElementById("advice-button");
let output = document.getElementById("Advise");

let advisors = [
    "A wise man once told me",
    "Mother always says",
    "My Uncle Rupert once said"
]

let howOften = [
    "never",
    "always",
    "as often as you can",
    "never ever"
]

let verbs = [
    "run with",
    "swim with",
    "eat a",
    "climb a",
    "dance with"
]

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
    "colorful"
]

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
    "Losers"
]
let getRandomIndex = function (a) {
    let rand = Math.random() * a.length;
    return Math.floor(rand);
};

let getRandomWord = function (a) {
    return a[getRandomIndex(a)];
};

let generateAdvice = function (ad,ho,ve,adj,no) {
    console.log(
        getRandomWord(ad),
        getRandomWord(ho),
        getRandomWord(ve),
        getRandomWord(adj),
        getRandomWord(no)
     )
};



let rand = getRandomIndex(advisors);
//let rand = Math.floor( Math.random() * advisors.length);

// let randAdvisor = advisors[rand];
// rand = Math.floor( Math.random() * howOften.length);

// let randHowOften = howOften[rand];
// rand = Math.floor( Math.random() * verbs.length);

// let randVerbs = verbs[rand];
// rand = Math.floor( Math.random() * adjectives.length);

// let randAdjectives = adjectives[rand];
// rand = Math.floor( Math.random() * nouns.length);

// let randNouns = nouns[rand];
// console.log(randAdvisor, randHowOften, randVerbs, randAdjectives,randNouns);

btn.addEventListener("click", function() {
    //console.log("Clicked!")
    generateAdvice(advisors,howOften,verbs,adjectives,nouns);
})