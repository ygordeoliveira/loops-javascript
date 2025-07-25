function filterNamesStartedByCapitalLetters(myArray){
    let arr = [];

    for(let name of myArray){
        if(name[0] === name[0].toUpperCase()){
            arr.push(name)
        }
    }
    return arr;
} 




