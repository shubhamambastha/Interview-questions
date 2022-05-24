/**
 * Approach 1:
 * Note: Construct prefix even and odd array, and then check sum of evens == sum of odds
 * even indices will became odd after deleted element and vice vera
 */

const solveA = (arr) => {
  let count = 0;
  let pfEven = [];
  let pfOdd = [];
  pfEven[0] = arr[0];
  pfOdd[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 !== 0) {
      pfEven[i] = pfEven[i - 1];
    } else {
      pfEven[i] = arr[i] + pfEven[i - 1];
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      pfOdd[i] = pfOdd[i - 1];
    } else {
      pfOdd[i] = arr[i] + pfOdd[i - 1];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let evenTotal = 0;
    let oddTotal = 0;

    if (i === 0) {
      evenTotal = pfOdd[arr.length - 1] - pfOdd[i];
      oddTotal = pfEven[arr.length - 1] - pfEven[i];
    } else {
      evenTotal = pfEven[i - 1] + pfOdd[arr.length - 1] - pfOdd[i];
      oddTotal = pfOdd[i - 1] + pfEven[arr.length - 1] - pfEven[i];
    }

    if (evenTotal === oddTotal) {
      count++;
    }
  }

  return count;
};
