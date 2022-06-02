/**
 * Approach 1:
 * Note: Create hasmap, and add alphabets sequence with keys,
 * check adjacent array elements in loop through the strings of both.
 * If it's not acc to hashmap  or sub-element not present, return 0
 */

const solveA = (arr, alphabet) => {
  if (alphabet.length < 26) {
    return 0;
  }

  let hashmap = new Map();

  for (let i = 0; i < alphabet.length; i++) {
    hashmap.set(alphabet[i], i + 1);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === arr[i + 1][j]) {
        continue;
      }
      if (
        hashmap.get(arr[i][j]) > hashmap.get(arr[i + 1][j]) ||
        arr[i + 1][j] == undefined
      ) {
        return 0;
      } else {
        break;
      }
    }
  }

  return 1;
};
