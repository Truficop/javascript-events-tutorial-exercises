// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	let numberA = parseInt(stringA);
	let numberB = parseInt(stringB);
	let sum = numberA + numberB;
	document.getElementById('resultNumber').value = sum;
};
