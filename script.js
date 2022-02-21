 
//  task = 1
 const number = prompt("Enter a number: ") 
 if(number % 2 == 0){
    alert ("The number is even.")
 }
 else { 
     alert("The number is odd.") 
}
//  task = 2
let days = prompt("Enter rental days: ")
let price = days * 40
if (days > 0 && days <= 3) {
    alert (`The cost of your rent: ${price}$`)
}
else if (days <= 7) {
    alert(`The cost of your rent: ${price - 20}$`)
} 
else {    
    alert(`The cost of your rent: ${price -50}$`)
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
