
/******************** Checkin sum zero problem ********************/

// Explanation : [-5,-4,-3,-1,0,2,4,6,8]
// Find sum pair with any two data from the array
// output:  [-4,4] = 0 // -4+4 -5 , -4



// function sumZero(arr){

//            for (let n of arr) {          
//               for (let j = 1; j < arr.length; j++) {
//                 if(n + arr[j] === 0){
//                     return [n, arr[j]]
//                 }
                
//               }
            
//            }
// }

// console.log(sumZero([-5,-4,-3,-1,0,2,4,6,8]))



/******************** Count unique numbers in array ********************/

// Explanation : [1,2,2,2,2,3,4,4,5,6,7,8]
// take i, j i=0 , j=1  i strats with index 0 , j starts with
// element 1 in array
// arr[i] !== arr[j]
//  1. i++
//  2. arr[i]=arr[j]


// function uniqueNum(arr){
//                 if (arr.length) {
//                     let i=0;
//                     for (let j = 1; j < arr.length; j++) {
//                         if(arr[i] !== arr[j]){
//                             i++
//                             arr[i]=arr[j]
//                         }
                        
//                     }
//                     return i + 1;
//                 } else {
//                     return false
//                 }

// }

// console.log(uniqueNum([1,2,2,2,2,3,4,4,5,6,7,8,9,9]))



/******************** Longest Substring Without Repeating Characters  ********************/

// Explanation : "abcabcd"
// Output :  "abc" length : 3

