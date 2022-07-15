function arrayPreviousLess(items: number[]): number[] {
  const lessThanLits: number[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        lessThanLits.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanLits.unshift(-1);
      }
    }
  }
  return lessThanLits;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
