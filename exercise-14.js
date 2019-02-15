function naikAngkot(arr){
    var rute = ['A', 'B', 'C', 'D', 'E', 'F']
    var output = []
    for (let i = 0; i < arr.length; i++){
        var orang = {}
        orang.penumpang = arr[i][0]
        orang.naikDari = arr[i][1]
        orang.tujuan = arr[i][2]
        var awal = 0
        var akhir = 0
        var total = 0
        for (var j = 0; j < rute.length; j++){
            if (rute[j] === arr[i][1]){
                awal = j
            }
            if (rute[j] === arr[i][2]){
                akhir = j
            }
        }
        total = akhir - awal
        orang.bayar = 2000 * total
        output.push(orang)
    }
    //     output.push({
    //         penumpang: arr[i][0],
    //         naikDari: arr[i][1],
    //         tujuan: arr[i][2]
    // }
    return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]