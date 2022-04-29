function FirstReverse(str) {
  let newStr = "";
  for(let i=str.length-1; i>=0; i--){
    newStr+=str[i];
  }
  str=newStr;
  // code goes here  
  return str; 
;
}
   
// keep this function call here 
console.log(FirstReverse(readline()))
