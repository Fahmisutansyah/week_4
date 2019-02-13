function cariModus(arr){
    var array = []
    
    
    for (let i = 0; i < arr.length; i++){
        var counter = 0
        var temp = []
        var ada = false
        for (let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]){
                counter++

            }
            
        }
        temp.push(arr[i],counter)
    
        for (let k = 0; k < array.length; k++){
            if (array[k][0] === temp[0]){
                ada = true
            }
        }
        if (!ada){
            array.push(temp)

        }
    }
    var angka = 0
    var number = 0
    var modus = []
    for (let i = 0; i < array.length; i++){
        if (array[i][1] > angka){
            angka = array[i][1]
            number = array[i][0]
        }
        modus.push(array[i][1])
    }
    var gaAdaBeda = false
    for (let j = 0; j < modus.length; j++){
        if (modus[0] === modus[j]){
            gaAdaBeda = true
        }else {
            gaAdaBeda = false
            break
        }
    }
    if (gaAdaBeda){
        return -1
    }else {
        return number

    }
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1