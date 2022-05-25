/**
 * Approach 1:
 * Note: Using Moore's voting algorithm.
 */

const solveA = (arr, B) => {
  let minCount = Math.floor(arr.length / 2);
  let elem = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
      elem = arr[i];
      count = 1;
    } else {
      if (elem === arr[i]) {
        count++;
      } else {
        count--;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (elem === arr[i]) {
      minCount--;
    }
  }

  if (minCount > 0) {
    return -1;
  }
  return Number(elem);
};
