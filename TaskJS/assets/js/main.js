// //Array Filter Custom Function
// function arrayFilter(array, func) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (func(array[i])) {
//             result.push(array[i])
//         }
//     }
//     return result;
// }


// const arr = ['Seymur', 'Tural']
// const arrayTest = arrayFilter(arr, name => name.length > 5)
// console.log(arrayTest,arr)

////////////////////////////////////////////////////////////////////////////////////////////////

// //Array Map Custom Function
// function arrayMap(array, func) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(func(array[i]))
//     }
//     return result;
// }

// const arr = [10, 20]
// const arrayTest = arrayMap(arr, value => value * 2)
// console.log(arrayTest, arr)

////////////////////////////////////////////////////////////////////////////////////////////////



// //Array forEach Custom Function
// function arrayforEach(array, func) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (func(array[i])) {
//             result.push(array[i])
//         }
//     }
//     console.log(result.toString())
// }


// const arr = ['Seymur', 'Tural']
// arrayforEach(arr, value => value > 2)

///////////////////////////////////////////////////////////////////////////////////////////////////

// //Array some Custom Funnction
// function arraysome(array, func) {
//     for (let i = 0; i < array.length; i++) {
//         if (func(array[i])) {
//             return true
//         }
//     }

//     return false
// }


// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arraysome(arr, value => value > 5))

//////////////////////////////////////////////////////////////////////////////////////////////////

// //Array every Custom Funnction
// function arrayevery(array, func) {
//     for (let i = 0; i < array.length; i++) {
//         if (func(array[i]) === false) {
//             return false
//         }
//     }
//     return true
// }


// const arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9]
// console.log(arrayevery(arr, value => value > 0))



///////////////////////////////////////////////////////////////
// //Array reverse Custom Funnction
// function arrayreverse(array, func) {
//     const result = [];
//     for (let i = array.length - 1; i > -1; i--) {
//         result.push(array[i]);
//     }
//     return result;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arrayreverse(arr, value => value > 0))