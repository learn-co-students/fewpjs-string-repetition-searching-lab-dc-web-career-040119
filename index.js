// Code your solution here
function heyJude(string){
  return string.repeat(16)
}
let bannedWords = /candycorn|brusselssprouts/;
function prohibitedLanguage(string){
    return string.search(bannedWords)
}
