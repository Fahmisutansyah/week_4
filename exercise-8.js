function tukarBesarKecil(string){
    var output = ''
    for (let i = 0; i < string.length; i++){
        if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()){
            output += string[i].toLowerCase()
        }else{
            output += string[i].toUpperCase()
        }
    }
    return output
}
//TEST CASE
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"