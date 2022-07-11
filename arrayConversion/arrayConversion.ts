import { is } from "@babel/types"

function arrayConversion(inputArray: number[]): number {
    let isOdd = true

    while(inputArray.length !== 1){
        console.log(inputArray.length)
        inputArray = sumProduct(inputArray, isOdd)
        isOdd = !isOdd
    }

    return inputArray[0]
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
     const sumProducts: number[] = []

     if(isOdd){
        for (let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] + nums[i])
        }
     } else {
        for(let i = 0; i < nums.length; i += 2) {
            sumProducts.push(nums[i] * nums[ 1 + 2])
        }
     }
    
     return sumProducts
}

console.log(arrayConversion([ 1, 2, 3, 4, 5, 6, 7, 8 ]))