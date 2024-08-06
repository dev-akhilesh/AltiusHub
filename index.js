// Given an array of integers, implement a function to find the maximum sum of a contiguous subarray.Describe your approach and the time complexity of your solution.
//     a.Score 0: No / Incorrect implementation.
//         b.Score 1: Brute - force approach with O(n ^ 3) time complexity.
//             c.Score 2: Improved brute - force approach with O(n ^ 2) time complexity.
//                 d.Score 3: Implementation using a divide and conquer approach with O(n log n) time complexity.
//                     e.Score 4: Efficient solution using Kadane's Algorithm with O(n) time complexity.
// f.Score 5: Optimized Kadane's Algorithm with clear explanation and handling of edge cases.



// let arr = [-2, -1, -3, 4, -1, 2, 1, -5, 4];
// output = 6;

function solution(arr) {
    let maxSum = -Infinity;  // initilize maxsum to smallest number
    let n = arr.length;

    for (let i = 0; i < n; i++) { // nested loop to find all subarrays
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k < j; k++) { // calculate sum of subarray
                sum += arr[k];
            }
            maxSum = Math.max(maxSum, sum); //update maxsum if current sum is greater
        }
    }
    return maxSum;
}

let arr = [-2, -1, -3, 4, -1, 2, 1, -5, 4];
console.log(solution(arr)) // 6 
// T.C = O(n ^ 3)
// S.C = O(1)



// Kadanes algorithm
function optimisedSolution(arr) {
    let n = arr.length;
    let prev = 0;
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        // compare previous contiguos sum with current number
        prev = Math.max(prev + arr[i], arr[i]);
        // check if current prev is gretest sum
        max = Math.max(max, prev);
    }
    return max;
}
let arr1 = [-2, -1, -3, 4, -1, 2, 1, -5, 4];
console.log(optimisedSolution(arr1)) // 6 
// T.C = O(n)
// S.C = O(1)
