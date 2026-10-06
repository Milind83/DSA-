//1. Move Zeroes to the End: Given an array arr = [0, 1, 0, 3, 12], move all 0s to the end of the array while maintaining the relative order of the non-zero elements. Time Complexity: O(n), Space Complexity: O(1).

//  let arr =[0,1,0,3,12]
// let k = 0;
// for(let i=0; i< arr.length; i++){
//   if(arr[i] !== 0){
//     let val = arr[i]
//     arr[i]=arr[k]
//     arr[k]=val;
// // console.log(arr,"mmm")
//     k++
//   }
// console.log(arr)
// }


// 2. Separate Even and Odd Elements: Given an array arr = [3, 1, 2, 4], rearrange the array so that all even numbers appear before all odd numbers. Time Complexity: O(n), Space Complexity: O(1).

// let arr = [3, 1, 2, 4]; let k = 0;
// for(let i=0; i< arr.length; i++){
//   if(arr[i] % 2 === 0){
//     let val = arr[k]
//       arr[k] = arr[i]
//       arr[i] =val;
//     k++
//   }
//   console.log(arr)
// }

// 3. Remove Elements: Given an array arr = [3, 2, 2, 3] and a value val = 3, remove all occurrences of val in-place and return the number of remaining elements. Time Complexity: O(n), Space Complexity: O(1).// let arr = [3, 2, 2, 3];let val = 3

// let k=0;
// for(let i=0; i< arr.length; i++){
  
//   if(arr[i] !== val){
//     console.log(arr[i])
//     arr[k] = arr[i]
//     k++
//   }
//   console.log(arr,k)
// }


// 4.Remove Duplicates from Sorted Array : Given a sorted array arr = [1, 1, 2, 2, 3, 4, 4], remove the duplicate elements in-place and return the array containing only unique elements.
// Input: [1, 1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]
// Time Complexity: O(n)
// Space Complexity: O(1)

// let arr= [1, 1, 2, 2, 3, 4, 4] ;
// function removeDuplicateInArray(arr) {
//     let k = 0;
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] !== arr[index - 1]) {
//             arr[k] = arr[index];
//             k++;
//         }
//     }
//     arr.length = k;
//     return arr;
// }

// console.log(removeDuplicateInArray(arr));

// 5. Best Time to Buy and Sell Stock
// Given an array prices, where prices[i] is the stock price on day i.
// Choose one day to buy and a later day to sell. Find the maximum profit.

//  let arr = [7, 1, 5, 3, 6, 4,7]

//  function maxProfit(prices) {
//     let profit=0
//     let minStock = prices[0]
//     for (let i = 1; i < prices.length; i++) {
//        if (prices[i] < minStock && prices[i] !== 0) {
//          minStock = prices[i]
//        }else{
//          let tempProfit = prices[i] - minStock;
//          if (tempProfit > profit) {
//             profit = tempProfit
//          }
//        }
//     }
//     return profit
// }
// console.log(maxProfit(arr))

