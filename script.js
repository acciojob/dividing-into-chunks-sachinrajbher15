const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
	
	const result = [];
	let currSubarray = []; 
	let currSum = 0;

	for (const num of arr) {
	    if (currSum + num > n) {
		    result.push(currSubarray);
		    currSubarray = [num];
		    currSum = num;
	    } 
		else {
		    currSubarray.push(num);
		    currSum += num;
	    }
	}
	if (currSubarray.length > 0) {
		result.push(currSubarray);
	}
	return result;
};

// Prompt user input for n
const n = parseInt(prompt("Enter n: "), 10); // Parse the input to ensure it's an integer
alert(JSON.stringify(divide(arr, n))); // Display the result as a JSON string
