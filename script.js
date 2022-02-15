// 1


//function tryRepeat () {
    let num = prompt('Write even number')
    if (+num % 2 == 0) {
        alert("Nice! " + num)
    } else {
        alert("Try again " + num)
       
    }



/// 2


let rentalDays = prompt('Rental days')
let rentDay = 40

if (+rentalDays >= 7) {
    alert(`Your price  ${rentalDays*rentDay - 50}$`)
} else if (+rentalDays > 3 && +rentalDays < 7) {
    alert(`Your price  ${rentalDays*rentDay - 20}$`)
} else {
    alert(`Your price  ${rentalDays*rentDay}$`)
}


///3

 let userYear = prompt('What year U need?')

 if (Number(userYear) <= 0) {
    alert('No, other direction...')
 } else {
let century = Math.trunc((Number(userYear) / 100)) + 1 
alert('Століття ' + century)
 }
 //tryRepeat()
//}
//tryRepeat()