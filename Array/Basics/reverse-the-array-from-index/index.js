/**
 * Approach 1:
 * Note: Loop till the middle, and swap element to its opposite elements.
 * Using temp variables
 * Two pointer appraoch
 */

const solveA = (arr, si, ei) => {
  let i = si; // first element
  let j = ei; // last element
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
