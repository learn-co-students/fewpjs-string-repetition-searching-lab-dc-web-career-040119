// Create a function called heyJude that repeats the lyric "Na na na na na na na, na na na na, hey Jude." 16 times.
let heyJude = () => {
  const lyric = "Na na na na na na na, na na na na, hey Jude.\n"
  return lyric.repeat(16)
}

// Create a function called prohibitedLanguage that will prevent usernames with the Strings "candycorn" and/or "brusselssprouts"
let prohibitedLanguage = (username) => {
  const regex = /candycorn|brusselssprouts/;
  return username.search(regex);
}
