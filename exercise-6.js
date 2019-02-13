function digitPerkalianMinimum(angka){
    var string = ''
    var array = []
    for (let i = 1; i <= angka; i++){
        var hasilBagi = 0
        var faktor = []
        if (angka % i === 0){
            hasilBagi = angka/i
            faktor.push(i, hasilBagi)
            array.push(faktor)
            if (array.length > 1){
                if (array[array.length-1][0] === array[array.length-2][1] || array[array.length-1][0] === array[array.length-1][1]){
                return array[array.length-1].join('').length
                }
            }
        }
        
    }
    if (array.length < 2){
        return array[array.length-1].join('').length
    }
   
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2