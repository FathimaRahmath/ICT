//1. Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.

var arr1 = [17,27,10,50,33,20,71];

checkPrime(arr1)

function checkPrime(arr) {
    let flag = 0;
    if (arr[0] === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (arr[0] > 1) {
        for (let i = 2; i < arr[0]; i++) {
            if (arr[0] % i == 0) {
                flag++;
                break;
            }
    
        }
        if (flag == 0) {
            console.log(`${arr[0]} is a prime number`);
        } else {
            console.log(`${arr[0]} is a not prime number`);
        }
    }    
}

//2.Write a JavaScript program to find the most frequent item of an array
arr2 = [ 1, 1, 3, 5, 7, 3, 8, 5, 7, 4, 7, 9, 0, 2, 7, 6, 8, 9, 5, ]; 
arr2.sort((a, b) => a - b); 
console.log(arr2)
let count = 1, max = 0, element;
for (let i = 1; i < arr2.length; ++i) { 
	if (arr2[i] === arr2[i - 1]) { 
		count++; 
	} else { 
		count = 1; 
	} 
	if (count > max) { 
		max = count; 
		element = arr2[i]; 
	} 
} 
console.log("The most occured element is: " + element);


//3. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check the current number is odd or even, and display it.

for (let i = 0; i <= 15; i++){
    
    if (i % 2 == 0) {
        console.log(`${i} is even` )
    }
    else {
        console.log(`${i} is odd`)
    }
}

//4.Write a JavaScript program to find the sum of squares of the elements of an array.
var arr3 = [5, 7, 9, 12];
let sum = 0;
for (let j = 0; j < arr3.length; j++){
    sum = sum + arr3[j] * arr3[j];
    console.log(`${arr3[j]} * ${arr3[j]} = ${arr3[j] * arr3[j]}`)
}
console.log(`sum is ${sum}`)