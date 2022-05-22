function detectWord(word){
    let hiddenWord=""
    for(let i=0; i<word.length; i++){
        if(i==i.toLowerCase){
            hiddenWord+=word[i];
        }
    }
    return hiddenWord;
}