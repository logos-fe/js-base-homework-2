 
//  task = 1
 const number = prompt("Enter a number: ") 
 if(number % 2 == 0){
    alert ("The number is even.")
 }
 else { 
     alert("The number is odd.") 
}
//  task = 2
let number1 = prompt("Enter rental days: ")
let number2 = number1 * 40
if (number1 > 0 && number1 <= 3) {
    alert (`The cost of your rent: ${number2}$`)
}
else if (number1 <= 7) {
    alert(`The cost of your rent: ${number2 - 20}$`)
} 
else {    
    alert(`The cost of your rent: ${number2 -50}$`)
} 
// task = 3
let year = prompt("Enter your year: ")
let century = (year-year%100)/100;
if (year<=0) {
    alert("You entered the wrong year!")
}
else {
    alert(`It's the ${century+1}th century`)
}
