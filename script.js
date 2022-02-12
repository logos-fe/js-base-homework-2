let number = prompt('Enter the number', 0);
if (number%2==0 ) {
    alert(`Your number is an even number`);
} else if (number%2==1 || number%2==-1) {
    alert(`Your number is an odd number`);
} else {
    alert(`Your number isn't an integer`);
}

//-----

let rentDays = prompt('Enter the number of days', 1);
if (rentDays<=3) {
    alert(`Renting price: ${rentDays*40}$`);
} else if (rentDays>3 && rentDays<7) {
    alert(`Renting price: ${rentDays*40-20}$`);
} else {
    alert(`Renting price: ${rentDays*40-50}$`);
}

//-----

let year = prompt('Enter the year', 2022);
let century = (year-year%100)/100;
if (year<=0) {
    alert('Incorrect data');
} else if (year%100==0) {
    alert(`It's the ${century}th century`);
} else {
    alert(`It's the ${century+1}th century`);
}

