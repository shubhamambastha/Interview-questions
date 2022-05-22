/**
 * Approach 1:
 * Note: First reverse the array,
 * then reverse again upto n-k
 * then reverse again from n-k+1 to n-1
 * Edge case: If k > array length; For this use modulus
 * Starting k will go to end.
 */

const solveA = (arr, kTimes) => {
  //edge case
  let k = kTimes % arr.length;

  if (k === 0) {
    return arr;
  }

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

  // now reverse same array upto n-k
  i = 0;
  j = arr.length - k - 1;
  while (i <= j) {
    let temp1 = arr[i];
    let temp2 = arr[j];
    arr[i] = temp2;
    arr[j] = temp1;
    i++;
    j--;
  }

  // now reverse same array from n-k+1 to n-1
  i = arr.length - k;
  j = arr.length - 1;
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
