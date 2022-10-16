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



/***** Find chunked array  chunk(arr,n) of size n at least *****/

// var arr =  [1,2,4,5,12,33,6,0,23] n = 3
// Output :    [[1,2,4], [5,12,33], [6,0,23]]

// var arr =  [1,2,4,5,12,33,6,0,23] n = 4
// Output :    [[1,2,4,5], [12,33,6,0], [23]]

// Steps 1 : Create a empty chunked array i.e : arr_chunk = []
// Steps 2 : Get the last arr of chunked array
// Steps 3 : Check last chunk arr exist OR if size of last chunk arr 
// is equal to n (size of arr). If does exist then push into empty chunked array
// Else push into last chunked arr 
// Step 4 : return chunked array


// var a = [[1,2,4], [5,12,33], [6,0,23]] // length = 3 
// var b =    a[[a.length-1]]
// console.log(b)


// function chunk_Arr(arr,n){

//             var chunked = []
             
//             var last = chunked[chunked.length-1]


//             for (let i = 0; i < arr.length; i +=n) {
//                   if(!last || last.length === n){
//                     chunked.push(arr.slice(i, i+n))
//                   }else{
//                     last.push(arr.slice(i, i+n))
//                   }
                
//             }
//             return chunked

// }

// console.log(chunk_Arr([1,2,4,5,12,33,6,0,23], 3))



/***** Implement an algorithm to determine a string has all unique
 * characters init *****/

// STEPS:   STRING ---> OBJECT ---> COUNT THE VALUE INTHE OBJECT

// function unique(str){
//      var obj = {}
//      for (let i = 0; i < str.length; i++) {
//          if(obj[str[i]]){
//             return false
//         }else{
//             obj[str[i]] = true
//         }
        
//      }

//      return true

// }

// console.log(unique('Hello world'))




/***** Given two strings, write a method to decide if one is 
 * permutation of the other *****/

// Steps: Check both strings exact same else
// Steps: Check both strings has same length else
// Steps: Create object of each one 
// Steps: Check if the objects character count are equal else
// Steps: return true


// const IsObj = (str)=>{
//     let obj ={}
//     for(let i of str){
//         (!obj[i] ? obj[i] = 1 : obj[i]++)
//     }
//     return obj
// }

// function perm(str1,str2){
//     if(str1 === str2) {
//         return true
//     }else{

//         if(str1.length !== str2.length){
//             const obj1 = IsObj(str1)
//             const obj2 = IsObj(str2)

//             for(let i in obj1){
//                 if(obj1[i] === obj2[i]){
//                     return false
//                 }
//             }
            
//         }
//     }
//     return true;
// }

// console.log(perm('hello','lloeh'))



/***** URLify algorithm : 
 * Write a method to replace all spaces in a string with "%20" *****/

// input : "Mr Deepak Kumar"
// Output:  "Mr%20Deepak%20Kumar"


// function URLify(str,n){
//     var res = ""
//     for (let i = 0; i < n; i++) {
//            if(str[i]===" "){
//             res +="%20"
//            }else{
//             res += str[i]
//            }
        
//     }
//     return res
// }
// console.log(URLify("Mr Deepak Kumar", 15))




/***** Find Palindrome permutation of string *****/
// Means left to right & vice-versa it should be a palindrome
// input:  "tac coa"
// output : true
// tacocat, atcocta , catotac
// input : "TPOPTO" -> true
// pottop, opttpo, toppot

// Steps 1: Remove white spaces
// Steps 2: Create object map
// Steps 3: check if string odd return false if there is more than 
//          one odd number character count
// Steps 4: check if string even return false if there is not an even number
//           character count of each character
// Steps 5: return TRUE

// {
           a: 2 
           c: 2
           o : 1
           t: 2
//   }

// here  o is even which is not > 1
// here  character is even so return true



// function perm_Palindrome(str){
  
//           str = str.toLowerCase()
//           console.log(str)
//           const charMap = {}
//           for (let i = 0; i < str.length; i++) {
              
//              const char  = str[i]
//              if(char !== " "){
//                 charMap[char] = charMap[char] ? charMap[char]+1 : 1;
//              }

//           }

//          let hasOdd = false
//          for(let char in charMap){
//            const freq = charMap[char]
//             if(freq % 2 !== 0){
//                 if(hasOdd){
//                     return false
//                 }else{
//                     hasOdd = true
//                 }
//             }
//          }  
    
//   return true

//}

// perm_Palindrome('tac coa')


/***** String compression *****/
// input :  aabbcc -> a2b2c2

// function compression(str){
//            let n = str.length
//            let count = 1, output = "", uniqueCount = 0
//            for (let i = 0; i < n; i++) {
//             if(str[i] === str[i+1]){
//                 count++
//             }else{
//                 output += str[i] + count
//                 count = 1
//                 uniqueCount++
//             }
            
//            }
//            if(uniqueCount === n) return str
//            else return output

// }

// console.log(compression('aabbccdd'))


/*****Given two  Strings, write a method to determine
 * if they are one edit away from each other *****/

// insert,repplace,remove 
// (pale, ple) --> true -- insert 'a'
// (pale, kale) --> true -- replace 'k' with 'p'
// (pale, pales) --> true -- remove 's'

// Step 1 :Check strings are same
// Step 2 :Create character map of both string
// Step 3 :Check each character of same type and value
            // if they are not, increase the counter
// Step 4: If the counter is 2 or more, return false
// step 5: return true 

// const isObj = (str)=>{
//     let obj ={}
//     for(let i of str){
//         (!obj[i] ? obj[i] = 1 : obj[i]++)
//     }
//     return obj
// }

// function oneway(str1, str2){
//     if(str1=== str2) return false

//      const obj1 = isObj(str1)
//      const obj2 = isObj(str2)
//      let counter = 0

//      for(let i in obj1){
//         if(obj1[i] !== obj2[i])
//         {
//             counter++
//         }
//         else if(counter >= 2)
//           {
//             return false
//           }
//      }

//      return true
    

// }

// console.log(oneway('pale', 'ple'))