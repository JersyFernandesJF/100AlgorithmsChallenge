function addTwoDigits(n: any): number {
    const nums = n.toString().split('');

    return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(23))