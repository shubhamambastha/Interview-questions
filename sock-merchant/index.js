// Sock Merchat question: 1
function socksForSale(socks){
    socks.sort(function(a, b){
        return a - b;
    });

    let pair= 0;
    for(let i =0; i<socks.length-1;i++){
        if(socks[i]===socks[i+1]){
            i++;
            pair+=1;
        }
    }
    console.log("Sock Merchat Sol 1 Here:");
    return pair;
}

socksForSale([10, 20, 20, 10, 10, 30, 50, 10, 20,50,50])

function sockMerchant(socks){
    let obj = {};
    let pair = 0;
    socks.forEach(sock=>{
        if(!obj[sock]){
            obj[sock] = 1
        } else{
            pair++;
            delete obj[sock]   //this is new to me
        }
    })
    console.log("Sock Merchat Sol 2 Here:");
    return pair;
}
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20,50,50])