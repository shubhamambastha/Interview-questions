var charArray = [];
function recurringCharacter (string){
  for (var i =0 ; i<string.length; i++){
    if(!charArray.includes(string.charAt(i))){
      charArray.push(string.charAt(i));
    } else{
      console.log(string.charAt(i));
      break;
    }
  };
}
recurringCharacter("ABCDABEC");