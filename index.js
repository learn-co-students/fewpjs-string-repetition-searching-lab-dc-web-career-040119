// Code your solution here
// let heyJude =  function(){
//   let str = "Na na na na na na na, na na na na, hey Jude.";
//   str.repeat(16);
// };
// heyJude();

const heyJude = function(str, num){
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16);
};

const prohibitedLanguage = userInput => {
  let regexps = /candycorn|brusselssprouts/i;
  
  return userInput.search(regexps);
}

