function avoidObstacles (inputArray: number[]): number {

    inputArray = inputArray.sort(( a,b ) => a - b)
    const largestArrayVal = inputArray[inputArray.length - 1]

    for(let i = 1; i <= largestArrayVal + 1; i++) {
        if(inputArray.every((element) => element % i !== 0)){
            return i;
        }
    }
    return 0
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))