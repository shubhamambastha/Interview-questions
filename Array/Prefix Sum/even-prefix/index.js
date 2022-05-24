/**
 * Approach 1:
 * Note: Construct prefix array, add number only if index is even
 */

const solveA = (arr) => {
  let pfArray = [];
  pfArray[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 !== 0) {
      pfArray[i] = pfArray[i - 1];
    } else {
      pfArray[i] = arr[i] + pfArray[i - 1];
    }
  }
  return pfArray;
};
