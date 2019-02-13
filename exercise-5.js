function ubahHuruf(kata) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''
    for (let i = 0; i < kata.length; i++){
        if (kata[i] === 'z'){
            output += 'a'
        }else{
            for (let j = 0; j < alphabet.length; j++){
                if (kata[i] === alphabet[j]){
                output += alphabet[j+1]
                }
            }
        }
    }
    return output

} 



// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu