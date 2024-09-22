const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
	// Write your code here
	const result = [];
	let currSubarray = [];
	let currSum = 0;
	for (const num of arr) {
		if (currentSum + num > n) {
			// Push the current subarray to the result
			result.push(currentSubarray);
		    // Start a new subarray
		    currentSubarray = [num];
			currentSum = num; // Reset current sum to the new number
		} 
		else {
		    currentSubarray.push(num);
		    currentSum += num;
		}
	}
	if (currentSubarray.length > 0) {
		result.push(currentSubarray);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));