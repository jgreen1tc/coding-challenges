function detectWord(str){
    let hiddenWord=""
    for(let i=0; i<str.length; i++){
        if(str[i]==str[i].toLowerCase()){
            hiddenWord+=str[i];
        }
    }
    return hiddenWord;
}
