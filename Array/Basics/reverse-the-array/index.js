/**
 * Approach 1:
 * Note: Loop till the middle, and sway element to its opposite elements.
 * Using temp variables
 * Two pointer appraoch
 */

const solveA = (arr) => {
  let i = 0; // first element
  let j = arr.length - 1; // last element
  while (i <= j) {
    let temp1 = arr[i];
    let temp2 = arr[j];
    arr[i] = temp2;
    arr[j] = temp1;
    i++;
    j--;
  }
  return arr;
};
