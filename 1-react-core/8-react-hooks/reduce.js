const array1 = [1, 2, 3, 4]; // state
const reducer = (accumulator, currentValue) => accumulator + currentValue; // 
// let newState = array1.reduce(reducer)
let newState = array1.reduce(reducer, 5)
console.log(newState)

//-----------------------------------------