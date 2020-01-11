// Making the use Algo

// Ques: Write a function which accepts two arrays and return true values
//if every value in the array has it's corresponding value squared in the
//second array. The frequency of values must be same.

function checker(array1, array2){
    var array1Length = array1.length;
    var array2Length = array2.length;
    if(array1Length !== array2Length) return false;

    let object1 = {};
    let object2 = {};
    for(let i = 0; i< array1Length; i++){
        object1[array1[i]] = (object1[array1[i]] || 0) + 1;
    }
    for(let i = 0; i< array2Length; i++){
        object2[array2[i]] = (object2[array2[i]] || 0) + 1;
    }
    console.log(object1, object2);
    for(let key in object1){
        if(!(key**2 in object2)){
            return false;
        }
        if(object2[key] !== object1[key**2]){
            return false;
        }
    }
    return true;
}

var arr1 = [2,5,2,8];
var arr2 = [25,4,64,4];

checker(arr1,arr2);