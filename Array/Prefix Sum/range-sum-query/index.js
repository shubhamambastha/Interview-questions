/**
 * Approach 1:
 * Note: Using nested loop, get sum of range from each element from queries and return their sum.
 */

const solveA = (arr, queries) => {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
      sum = sum + arr[j];
    }
    result.push(sum);
  }
  return result;
};

/**
 * Approach 2:
 * Note: Using prefix sum method, get prefix sum of all element. And then get sum in given range [L-R],
 * Where [L-R] = pf[R] + pf[L-1]
 */

const solveB = (arr, queries) => {
  let result = [];
  let pfArray = [];
  pfArray[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    pfArray[i] = arr[i] + pfArray[i - 1];
  }

  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0] - 1;
    let r = queries[i][1] - 1;
    let sum = 0;
    if (l === 0) {
      sum = pfArray[r];
    } else {
      sum = pfArray[r] - pfArray[l - 1];
    }
    result.push(sum);
  }
  return result;
};
