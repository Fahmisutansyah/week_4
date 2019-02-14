function urutkanAbjad(string){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''
    for (let i = 0; i < alphabet.length; i++){
        for (let j = 0; j < string.length; j++){
            if (alphabet[i] === string[j]){
                output += alphabet[i]
            }
        }
    }
    return output
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'