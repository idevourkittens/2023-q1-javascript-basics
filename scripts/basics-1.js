//console.log("Heellooo woooororrllllldddd");

//keyword for declaring

//String
// let firstName = "Attacus";
let favoriteSongRightNow = "Deli by Ice Spice";

//Numbers
let age = 12;
let money = 20;

//Booleans
let isGameOver = false;

//Arrays -- A variable that holds a list of values
let namesOfFruit = ["Apple", "Banana", "Pear", "Orange"];

//console.log(namesOfFruit[2]);

//objects //have properties and methods

let classRoom = {
	roomNumber: 129,
	seats: 35,
	teacher: {
		firstName: "Robert",
		lastName: "Hardy",
	},
	students: [
		{ firstName: "Cade", lastName: "Arney", grade: 8 },
		{ firstName: "Lana", lastName: "Krakow", grade: 8 },
		{ firstName: "Attacus", lastName: "Brown", grade: 8 },
	],
	lightsOn: true,
	turnLightsOff: function () {
		this.lightsOn = false;
		return;
	},
};
console.log(classRoom);
classRoom.turnLightsOff();
console.log(classRoom);
