/**
 * Approach 1:
 * Note: Need to find min and then max of the array.
 * Then loop through array and if min found then check nearest max and vice versa
 */

const solveA = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let minMax = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  if (min === max) {
    return 1;
  }

  // now iterate to find minMax
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === max) {
          break;
        }
        if (arr[j] === min) {
          minMax = Math.min(minMax, j - i + 1);
          break;
        }
      }
    } else if (arr[i] === min) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === min) {
          break;
        }
        if (arr[j] === max) {
          minMax = Math.min(minMax, j - i + 1);
          break;
        }
      }
    }
  }

  return minMax;
};

/**
 * Approach 2:
 * Note: Need to loop through array and check min/max indexs,
 * each time we have both index, we add the min to answer.
 */

const solveB = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let minMax = arr.length;
  let minIdx = -1;
  let maxIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  if (min === max) {
    return 1;
  }

  // now iterate to find minMax
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      minIdx = i;
      if (maxIdx > -1) {
        minMax = Math.min(minMax, Math.abs(minIdx - maxIdx) + 1);
      }
    } else if (arr[i] === max) {
      maxIdx = i;
      if (minIdx > -1) {
        minMax = Math.min(minMax, Math.abs(minIdx - maxIdx) + 1);
      }
    }
  }

  return minMax;
};
