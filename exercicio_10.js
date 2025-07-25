function reverseStr(word) {
    let newString = "";

    for(let i = word.length - 1; i >= 0; i--){
        newString += word[i];
    }

    return newString;
}

function isPalindrome(word) {
    return  reverseStr(word).toUpperCase() === word.toUpperCase();
}
 

console.log(isPalindrome('anilina')) // true//
console.log(isPalindrome('osso')) // true//
console.log(isPalindrome('ygor')) // false//
console.log(isPalindrome('trabalho')) // false
console.log(isPalindrome('Osso')) // true
console.log(isPalindrome('Anilina')) // true