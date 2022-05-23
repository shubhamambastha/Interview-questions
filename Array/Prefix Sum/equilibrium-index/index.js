/**
 * Approach 1:
 * Note: Looping through to elements, get sum all left and right elements. And then check
 */

const solveA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;
    for (let j = i - 1; j >= 0; j--) {
      left = left + arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      right = right + arr[j];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};

/**
 * Approach 2:
 * Note: Using prefix and sufix sum method, get prefix & sufix sum. And then check sum of that index,
 * if both sum is equal then return index
 */

const solveB = (arr) => {
  let pfArray = [];
  let sfArray = [];

  pfArray[0] = arr[0];
  sfArray[arr.length - 1] = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    pfArray[i] = arr[i] + pfArray[i - 1];
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    sfArray[i] = arr[i] + sfArray[i + 1];
  }

  for (let i = 0; i < arr.length; i++) {
    let left = pfArray[i];
    let right = sfArray[i];

    if (left === right) {
      return i;
    }
  }
  return -1;
};

/**
 * Approach 3:
 * Note: Using only prefix sum. And then get lower and higher sum of that index,
 * if both sum is equal then return index
 */

const solvec = (arr) => {
  let pfArray = [];
  pfArray[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    pfArray[i] = arr[i] + pfArray[i - 1];
  }

  for (let i = 0; i < pfArray.length; i++) {
    let left = 0;
    let right = 0;

    if (i === 0) {
      left = 0;
    } else {
      left = pfArray[i - 1];
    }

    right = pfArray[pfArray.length - 1] - pfArray[i + 1 - 1];

    if (left === right) {
      return i;
    }
  }
  return -1;
};
