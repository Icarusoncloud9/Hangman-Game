//Jquery
$('#word').html(useableArray);
$('#guesses').html(userChoice);
$('#games').html(game);
$('#wins').html(wins);
$('#losses').html(losses);

//Stating my variables first and forthmost

var game = 0;
var wins = 0;
var losses = 0;
var chances = 0;
var keysPressed = 0;
var correctKeys = 0;
var incorrectKeys = 0;
var userChoice = [];
var useableArray = [];
var country =  chance.country({ full: true }).toLowerCase();
var tempStorage;


//Convert strings into useable arrays
//a being country and b being the size of useableArray
function convertToArray(a, b) {
	for(var i = 0, length1 = a.length; i < length1; i++){
		b.push("_");
	}
}

convertToArray(country, useableArray);
country = country.split("");
chances = 10;

// console.log(country);
// console.log(useableArray);

//This is used to convert country into an array
//console.log("LINE 29 COUNTRY: " + country);


//This is going to determine the amount of chances left.


//Stating my reuseable functions second
//a = incorrectKeys; b = keysPressed; c = correctKeys
function wrongCount(a, b, c) {
	a = b - c;
}

//record is used to push correct user guesses from the word in the same position of the useableArray
//So that when the right word has been figured out, the computer can perform an action
//a being country and b being useableArray 
function compareAndPush(a, b) {
	for(var i = 0, length1 = a.length; i < length1; i++){
		if (a[i] === b) {
		 	b.indexOf(i).push(a[i]);
		 	correctKeys++;
		 	if (a[i] !== b) {
		 		incorrectKeys++;
		 		wrongCount(incorrectKeys, keysPressed, correctKeys);
		 		return;
		 	}
		} 
	}
}


//Use this function when using addEventListener("keypress", record)
function recordKey(letter) {
	userChoice.push(tempStorage);
	keysPressed++;
	// console.log(userChoice);
	// console.log(keysPressed);
	
	// console.log(chances);
}

//Use this function for wins
//a for useableArray; b for country
function winning(a, b) {
	var matches = 0;
	for (i=0;i<a.length;i++) {
        if (b.indexOf(a[i]) != -1)
            matches++;
        	if (matches == country.length) {
        		//alert("You won!");
    			wins++;
    			game++;
				chances = 0;
				keysPressed = 0;
				correctKeys = 0;
				incorrectKeys = 0;
				userChoice = [];
				useableArray = [];
				country =  chance.country({ full: true }).toLowerCase();
				tempStorage;
				convertToArray(country, useableArray);
				country = country.split("");
				chances = 10;
        	}
    	}
	}


//Use this function for losses
//Function lost is to check if a user has lost or is still in the game.
//a is chances;
function lost(a, b) {
	
	if (b.indexOf(a) == -1) {
			chances--; 
	
			}
		
	if (chances == 0) {
	//alert("lost");
	losses++;
	game++;
	chances = 0;
	keysPressed = 0;
	correctKeys = 0;
	incorrectKeys = 0;
	userChoice = [];
	useableArray = [];
	country =  chance.country({ full: true }).toLowerCase();
	tempStorage;
	convertToArray(country, useableArray);
	country = country.split("");
	chances = 10;
	}	
}


//a is chances; b is country; c is keysPressed;
function chancesCounter(a, b, c) {
	a = b.length;
	a = a-c;
}


function checkKeys(letter){

	//console.log("LETTER IS: " + letter)

	var letterExists = false;

	for (var i =0; i<country.length; i++){

		// console.log("COUNTRY IS " + country)
		// console.log(country[i])

		if(letter == country[i]){
			//alert("Letter exists");
			letterExists = true;
		}

	}

	for (var i = 0; i<country.length; i++){

		if(letter == country[i]){

			useableArray[i] = letter;
			correctKeys++;
		} 

	} 

	//console.log("Useable Array", useableArray);
}




document.onkeyup = function(event){

	tempStorage = String.fromCharCode(event.keyCode).toLowerCase();
	recordKey(tempStorage);
	checkKeys(tempStorage);
	lost(tempStorage, country);
	winning(useableArray, country);
	$('#word').html("Name of Country: " + useableArray.join(""));
	$('#guesses').html("Letters picked by player: " + userChoice);
	$('#games').html("Number of Games: " + game);
	$('#wins').html("Number of Wins: " + wins);
	$('#losses').html("Number of Losses: " + losses);

}



