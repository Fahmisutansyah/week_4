function shoppingTime(memberID, money){
    var output = {}
    var list = [['Sepatu Stacattu', 1500000],['Baju Zoro', 500000],['Baju H&N', 250000],['Sweater Unikloh', 175000],['Casing Handphone', 50000]]
    output.memberID = memberID
    output.money = money
    var array = []
    for (let i = 0; i < list.length; i++){
        if (money - list[i][1] >= 0){
            array.push(list[i][0])
            money = money - list[i][1]
        }
    }
    output.listPurchased = array
    output.changeMoney = money
    if (memberID === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if (array.length === 0){
        return 'Mohon maaf, uang tidak cukup'
    }else if (memberID.length === 0){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    return output
    
}



// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja