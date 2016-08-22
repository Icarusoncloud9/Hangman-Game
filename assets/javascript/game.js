//First name all the variables you think you're going to need.
	//var name.innerHTML = prompt("What is your name?");
	var country = "blank";
	var guess = [];
//kp is the number of times that a key was pressed.
	var kp = 0;
	var wins = 0;
	var losses = 0;
//cp is the amount of correct keys was pressed.
	var cp = 0;
//icp is the amount of incorrect keys pressed.
	var icp = 0;
//tempStorage is going to hold values temporarily



//Then event listener is going to be initiated.
	document.addEventListener("keypress", userInput);
		function userInput() {
			//Capture the user's input
			var a = String.fromCharCode(event.keyCode).toLowerCase();
			//Increases the count of keys pressed
			kp++;
			//Test the # of kp
			console.log(kp);
			//Push the key pressed into the guess array
			guess.push(a);
			//Check the elements of the guess array
			console.log(guess);
		}

