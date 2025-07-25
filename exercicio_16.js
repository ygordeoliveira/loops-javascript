function fearNotLetter(letters) {
    let Missingletter;                    
    let letter = letters.charCodeAt(0);  

    for (let i = 1; i < letters.length; i++) { 
        
        let code = letters.charCodeAt(i);
        

        if (code != letter + 1) {
            Missingletter = String.fromCharCode(letter + 1); 
                break;
        }
            letter ++; 
    }
    return Missingletter; 
}

console.log(fearNotLetter('abce')) // retorna 'd'
console.log(fearNotLetter('abcdefghjklmno')) // retorna 'i'
console.log(fearNotLetter('stvwx')) // retorna 'u'
console.log(fearNotLetter('bcdf')) // retorna 'e'
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz')) // retorna undefined 
