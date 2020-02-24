// Left Rotation Array question: 2
function rotLeft(a, d) {
    for (let j = 1; j <= d; j++) {
        a.shift(a.push(a[0]));
    }
    console.log("Left Rotation Array Here:");
    return a;
}

let ary = [1,2,3,4,5]

rotLeft(ary,2)