/**
 * Approach 1:
 * Note: Need to loop through array backward and check for current max,
 * push the element to result if it is greater than max.
 */

const solveA = (arr) => {
  let currentMax = arr[arr.length - 1];
  let result = [currentMax];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > currentMax) {
      currentMax = arr[i];
      result.push(currentMax);
    }
  }

  return result;
};
