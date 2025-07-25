function sumAll(arr) {  
    let sum = 0;

    arr.sort();
    const [start, end] = arr;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    } 
    return sum;
}

console.log(sumAll([1, 4])) // retorna 10
console.log(sumAll([4, 1])) // retorna 10
console.log(sumAll([2, 7])) // retorna 27
console.log(sumAll([7, 2])) // retorna 27
console.log(sumAll([0, 0])) // retorna 0
console.log(sumAll([0, -1])) // retorna -1