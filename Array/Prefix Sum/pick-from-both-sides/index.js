/**
 * Approach 1:
 * Note: Using prefix and sufix sum method, get sum upto B from left.
 */

const solveA = (arr, B) => {
  let pfArray = [];
  let sfArray = [];
  let maxSum = Number.NEGATIVE_INFINITY;

  pfArray[0] = arr[0];
  sfArray[arr.length - 1] = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    pfArray[i] = arr[i] + pfArray[i - 1];
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    sfArray[i] = arr[i] + sfArray[i + 1];
  }

  for (let i = 0; i <= B; i++) {
    let sum = 0;
    if (i === 0) {
      sum = sfArray[arr.length - B + i];
    } else if (i === B) {
      sum = pfArray[i - 1];
    } else {
      sum = pfArray[i - 1] + sfArray[arr.length - B + i];
    }
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

/**
 * Approach 2:
 * Note: Using sliding window method, get sum of first window. And then remove last and add from last index.
 */

const solveB = (arr, B) => {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < B; i++) {
    sum += arr[i];
  }

  maxSum = sum;

  let i = B - 1;
  let j = arr.length - 1;

  while (i >= 0) {
    sum = sum - arr[i] + arr[j];
    maxSum = Math.max(maxSum, sum);
    i--;
    j--;
  }

  return maxSum;
};
