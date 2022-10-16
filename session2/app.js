
/***** Longest word ins string *****/

// function longest(str){
//     str  = str.split(" ")

//     let lonWord = ""
//     for (let i = 0; i < str.length; i++) {
//         if(str[i].length > lonWord){
//             lonWord=str[i].length
//         }
//     }
//     return lonWord
    
// }
// console.log(longest('My name is Deepak Kumar'))


/***** Math Sequences *****/

// Arithmetic--> a1 = a1-a2
// Geometric--> r = a2/a1

// function MathSeq(arr){
//     let arith = new Set()
//     let geo = new Set()

//     for (let i = 1; i < arr.length; i++) {
//            let num1 = arr[i] - arr[i-1]
//            arith.add(num1)
//            let num2 = arr[i] / arr[i-1]
//            geo.add(num2)
//     }
//     if(arith.size === 1) return 'Arithmetic'
//     if(geo.size === 1) return 'Geometric'
//     return -1;
// }

// console.log(MathSeq([2,4,6,8,10]))
// console.log(MathSeq([3,9,87]))


/***** Capitaize first letter or character in a string *****/

// function capitalize(str){
//     let   newStr = str.split(' ')
//     let res =  newStr.map((word)=>{
//         return word.charAt(0).toUpperCase() + word.slice(0)  
//     })
//     return res.join(' ');
// }

// console.log(capitalize('maa'))


/***** Unique values in a array,objects, string *****/
// using lastIndexOf()  : return the index of last item

// function unique(str){
         
//       for (let i = 0; i < str.length; i++) {
//            console.log(str[i])    
//            console.log(str.lastIndexOf(str[i] !== -1))
//            if(str.lastIndexOf(str[i]) !== i) return false

        
//       }
//       return true

// }

// console.log(unique('hello'))



/***** Find the repeated numbers *****/

// [2,5,6,7,5,2] // 2, 5




