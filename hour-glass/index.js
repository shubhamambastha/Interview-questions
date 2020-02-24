// 2-D HourGlass question: 3
function hourGlass(arr) {
    let result = -63;  // because minimun sum would be -9*7 = 63
  
    for (let row = 0; row <= 3; row++) {
        for (let col = 0; col <= 3; col++) {
        
            // sum the of hourglass
            let sum = arr[row][col] + arr[row][col+1] + arr[row][col+2] + arr[row+1][col+1] + arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];
        
            // comparing result with sum to find maximum
            if (result <= sum){
                result = sum;
            }
        }
    }
    console.log("HourGlass Result Here:");
    return result;
}
  
let arry = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
  
hourGlass(arry)