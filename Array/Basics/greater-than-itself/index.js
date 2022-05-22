/**
 * Approach 1:
 * Note: First loop to get max element, then loop to count elements which are smaller than max.
 */

const solveA = (arr) => {
  let max = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
      count++;
    }
  }
  return count;
};

/**
 * Approach 2:
 * Note: Loop to check if element is greater than max, if so then mark that element as max.
 * Always increase count other than if element is equal to max
 */
const solveB = (arr) => {
  let max = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      count++;
    } else if (arr[i] < max) {
      count++;
    }
  }
  return count;
};
