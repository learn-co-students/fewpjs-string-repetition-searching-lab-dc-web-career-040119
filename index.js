// // Code your solution here
// function heyJude(){
//   let verse = "Na na na na na na na, na na na na, hey Jude"
//   let prohibitedLanguage = /candycorn|brusselssprouts/;
//   return verse.repeat(16);
// };
//  heyJude();


let heyJude = (verse) => {
  // an arrow function
  return verse.repeat(16)
}

let prohibitedLanguage = (string) => {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}
