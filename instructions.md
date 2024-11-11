Title: Shuffle the Array Algorithm Challenge
Objective:
In this coding exercise, you will create a JavaScript function to shuffle an array in a specific way. Given an array with elements [x1, x2, ..., xn, y1, y2, ..., yn], you need to shuffle the array to become [x1, y1, x2, y2, ..., xn, yn]. 

Create a function named `shuffleArray(arr)` that takes an array of integers (`arr`) as input and returns the shuffled array.

When using the following input:
```js
const arr = [1, 2, 3, 4, 5, 6];
console.log(`Original array: [${arr}]`);
console.log(`Shuffled array: [${shuffleArray(arr)}]`);
```

For example, after implementing the function, you should be able to produce the following output:
```js
Original array: [1, 2, 3, 4, 5, 6]
Shuffled array: [1, 4, 2, 5, 3, 6]
```

Helpful resources:
- The for...of loop documentation on the Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Template literals documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<details>
<summary>Hints</summary>
  
1. Create a function `shuffleArray(arr)` that accepts an array `arr`.
2. Calculate the mid-index of the array (rounding down if necessary).
3. Initialize an empty array named `shuffledArray` to store the shuffled elements.
4. Use a for...of loop to iterate through each element from 0 to the mid-index.
5. Inside the loop, push the current element `arr[i]` and the corresponding element from the second half of the array `arr[i + midIndex]` to the `shuffledArray`.
6. If the length of the original array is odd, there will be one element left in the second half. Add this element to the `shuffledArray`.
7. Return the `shuffledArray`.
8. Call the function with an appropriate input array and log the original array and the shuffled array using template literals.
9. Make sure to use camel case for variable names.
10. Use template literals when logging the output to the console.
</details>