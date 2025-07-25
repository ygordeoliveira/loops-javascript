function titleCase(phrase) {
 wordsLowerCase = phrase.toLowerCase().split(" ");

  for(let i = 0; i < wordsLowerCase.length; i++){
    wordsLowerCase[i] = wordsLowerCase[i].charAt(0).toUpperCase() + wordsLowerCase[i].slice(1);
  }
  return wordsLowerCase.join(" ");
}

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout