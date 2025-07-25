function reverseString(str) {
    let newString = "";

    for(let i = str.lenght - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("rodrigo")); // ogirdor
console.log(reverseString("Howdy")); //ydwoH
console.log(reverseString("Greetings from Earth"));