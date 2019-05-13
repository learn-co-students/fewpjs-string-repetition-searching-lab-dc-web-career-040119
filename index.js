// Code your solution here

// const heyJude = "Na na na na na na na, na na na na, hey Jude."
// heyJude.repeat(16)

let heyJude = (verse) => {
  return verse.repeat(16)
}

// let myRegExp = /pinapplepizza/;
// Create a function called prohibitedLanguage that will prevent usernames with the Strings "candycorn" and/or "brusselssprouts"

let prohibitedLanguage = (string) => {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}

// if prohibitedLanguage, prevent/destroy name. Disallow? Reject?
