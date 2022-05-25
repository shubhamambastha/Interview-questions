/**
 * Approach 1:
 * Note: Need to loop through array backward and check G count, add to mainCount if founf A.
 */

const solveA = (arr) => {
  let count = 0;
  let gCount = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "G") {
      gCount++;
    } else if (arr[i] === "A") {
      count += gCount;
    }
  }

  return count;
};

/**
 * Approach 2:
 * Note: Need to loop through array and check A count, add to mainCount if founf G.
 */

const solveB = (arr) => {
  let count = 0;
  let aCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      aCount++;
    } else if (arr[i] === "G") {
      count += aCount;
    }
  }

  return count;
};
