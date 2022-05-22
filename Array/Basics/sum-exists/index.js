/**
 * Approach 1:
 * Note: Using nested loop, get all pairs and check their sum.
 */

const solveA = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Approach 2:
 * Note: Using nested loop, get all upper triangle pairs and check their sum.
 */

const solveB = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
};
