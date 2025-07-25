function chunkArrayInGroups(arr, size) {
    let newArray = [];
    let i = 0;

    while(i < arr.length){
        newArray.push(arr.slice(i, i + size));
        i += size;
    }
    return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // return [[0, 1], [2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));  // return [[0, 1, 2, 3], [4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].