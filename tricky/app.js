
//1. Incase of array we push the item to array
//2. Incase of set we add the item to array

// For in vs For of

// For in used to get index of items in array
// For of is used to get items of the array

// var names = ['Dk', 'Jk', 'Sk', 'Bk']
// for (let i in names) {
//     console.log(i)   
// }

// for (let i of names) {
//     console.log(i)   
// }




// 1: setTimeout problems
// var , let

// 1st Case output : 0 1 2 3 4
// Reason : let is block scope , it can aquire space every time in
//           memory so its print 0 1 2 3 4

// for (let i = 0; i < 5; i++) {
    
//     setTimeout(() => {
//          console.log(i)
//     }, 2000);
    
// }



// 2nd Case output : 5 5 5 5 5
// Reason : va is bglobally scope , it can aquire space one time only in
//           memory so it's value doesn't change so its print 
//           5 5 5 5 5

// for (var i = 0; i < 5; i++) {
    
//     setTimeout(() => {
//         console.log(i)
//     }, 2000);
    
// }


/********** Closure Interview questions **********/

