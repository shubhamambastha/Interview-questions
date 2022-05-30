/**
 * Approach 1:
 * Note: To get the minimum integer such that A[i] & B[i] should be minimum,
 * we need to get the right most set value of A[i] in bitwise form;
 * then push that into new array
 */

const solveA = (arr) => {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let iSet = 0;
      while (((arr[i] >> iSet) & 1) == 0) {
        iSet++;
      }
      resultArr.push(1 << iSet);
    } else {
      // for odd number, 2^0 will always be set
      resultArr.push(1);
    }
  }

  return resultArr;
};
