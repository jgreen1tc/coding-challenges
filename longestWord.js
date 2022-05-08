function LongestWord(sen) { 
  let array = sen.split(' ');
  let tempWord = '';
  for (let i=0; i<array.length; i++){
    array[i] = array[i].replace(/[^\w\s\']|_/g, '')
    if (tempWord.length < array[i].length){
      tempWord = array[i];
    
    }
  }
  sen = tempWord;
  // code goes here  
  return sen; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));
