/**
 * Approach 1:
 * Note: First reverse the array,
 * then reverse again upto k-1,
 * then reverse again from k to n-1
 * Edge case: If k > array length; For this use modulus
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

  // now reverse same array till k-1
  i = 0;
  j = k - 1;
  while (i <= j) {
    let temp1 = arr[i];
    let temp2 = arr[j];
    arr[i] = temp2;
    arr[j] = temp1;
    i++;
    j--;
  }

  // now reverse same array from k to n-1
  i = k;
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
