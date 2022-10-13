/***** Reverse a string *****/

// function rev(str) {

//     var result = ''
//     for(let i = str.length-1; i>=0;i--){
//           result = result + str[i]
//     }
//     return result
// }

// console.log(rev('banglore'))

/***** Palindrome a string *****/
// madam = m a d a m

// function palindrome(str){
//     var l = str.length

//     for (let i = 0; i < l/2; i++) {
//         if(str[i] !== str[l-1-i]){
//             return 'Not a palindrome'
//         }        
//     }

//     return 'Palindrome'
// }

// console.log(palindrome('madam'))




/***** Find the characters that appears the most and also
 * find total number of times it appears *****/


// function cha_Find(str){
          
//     var res = str.split('')
//     var myChar = {}
//     res.forEach(element => {  
//            myChar[element] = myChar[element] ? myChar[element] + 1 : 1;
//     });

//     return myChar;
          
// }

// console.log(cha_Find('hello'))



/***** Reverse an Integer *****/


// function rev_Int(num){
//     var num = num.toString();
//     var res = []
//     for (let i = num.length-1; i>=0; i--) {
        
//           res = res +  num[i]
        
//     }
//     return res
// }

// console.log(rev_Int(987))