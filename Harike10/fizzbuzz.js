// fizzbuzz
// const fizzBuzz = (num) => {
//     for (let i = 1;i <= num; i++)
//     {
//         if (i %15 == 0){
//             console.log('FizzBuzz')
//         }
//         else if (i % 3 === 0) {
//             console.log('Fizz');
//         } 
//         else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// };
// fizzBuzz(20); 


// fibo
// const fibo = (urut) => {
//     var arr = []
//     for (let i = 0; i< urut; i++)
//     {
//         if(arr.length == 0)
//         {
//             arr.push(i+1)
//         }
//         else if(arr.length == 1)
//         {
//             arr.push(arr[0]);
//         }
//         else 
//         {
//             arr.push(arr[i-2]+ arr[i-1]);
//         }
//     }
//     return arr;
// }
// console.log(fibo(10))

//another Fibo
// const fibo = (urut) => {
//     var dataSebelum1 = 1;
//     var dataSebelum2 = 1;
//     for(var i = 2; i < urut; i++)
//     {
//         var dataBaru = dataSebelum1 + dataSebelum2;
//         dataSebelum1 = dataSebelum2;
//         dataSebelum2 = dataBaru;
//     }
//     return dataSebelum2;
// }
// console.log(fibo(10));

//reverse array
// const reverseArray = (arr) =>{
//     for (let i = 0, j = arr.length-1; i<Math.floor(arr.length/2); i++,j--)
//     {
//         const temparr = arr [i]
//         arr[i]= arr [j]
//         arr [j] = temparr
//     }
//     return arr
// }
// console.log(reverseArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))

// function reverseArr(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }

// var a = [1,2,3,4,5,6,7,8,9]
// var b = reverseArr(a);

// console.log (b)

// bubbe sort
// var x = [5, 1, 4, 2, 8];
// const bubbeSort = (array) => {
//     for(let i = array.length-1; i > 0; i--){
//         for(let j = 0; j < i; j++){
//             if(array[j] > array[j+1]){
//                 const temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp
//             }
//          }   
//     }
//     return array;
// }
// console.log(bubbeSort(x))

//mean
// var x = [1,2,3,2,5,2,7,2]
// const mean = (array) => {
// var total = 0,i;
// for (i = 0; i < array.length; i += 1) {
//     total += array[i];}
//     return total / array.length;
// }
// console.log (mean(x))

//meadian
// var x = [1,2,3,2,5,2,7,2];
// const median = (array) => {
//         array.sort( function(a,b) {return a - b;} );
    
//         var half = Math.floor(array.length/2);
    
//         if(array.length % 2)
//             return array[half];
//         else
//             return (array[half-1] + array[half]) / 2.0;
//     }
// console.log(median(x))

//modus


    