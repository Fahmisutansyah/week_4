function cariMedian(arr) {
    var indexKe = 0
    if (arr.length % 2 !== 0){
        indexKe = Math.floor(arr.length / 2)
        return arr[indexKe]
    }else {
        var indexGenap = 0
        var temp = 0
        var temp1 = 0
        temp = arr.length / 2
        temp1 = arr[temp-1] + arr[temp]
        indexGenap = temp1/2
        return indexGenap
    }
   
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5