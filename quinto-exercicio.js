function filterNamesStartedByCapitalLetters(myArray){
let arr = myArray.filter((name)=>{
   name[0] === name[0].toUpperCase();
 })
  return arr;
}

