function findLongestWordLength(str) {
   let words = str.split(" ");
   let sizeBiggerWord = 0;

   for (let word of words) {
      if (word.length > sizeBiggerWord) {
          sizeBiggerWord = word.length;
      }
   }
   return sizeBiggerWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // retorna 6
console.log(findLongestWordLength("May the force be with you")); // retorna 5
console.log(findLongestWordLength("Google do a barrel roll")); // retorna 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // retorna 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // retorna 19