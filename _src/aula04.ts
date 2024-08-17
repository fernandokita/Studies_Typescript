// Learning and exploring more about array and Readonly array..
let arrayNumber: number[] = [100,200,300,400] // Only works assignment's numeric values
arrayNumber.push(500) // It will inserts 500 in last index of array
console.log(arrayNumber)

arrayNumber.unshift(50) // It will inserts 50 in first index of array
console.log(arrayNumber)

arrayNumber.pop() // It will removes the last element of array
console.log(arrayNumber)

arrayNumber.shift() // It will removes the first element of array
console.log(arrayNumber)

let arrayNumber_ro : ReadonlyArray<number> = [1000,2000,3000] // Only will reads the array

console.log(arrayNumber_ro) 

