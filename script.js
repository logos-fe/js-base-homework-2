// #1

const number = prompt('Please enter any number')

if (number % 2) {
    alert('Your number is not even');
} else {
    alert('Your number is even');
}

// #2

const days = prompt('Haw many days did you rent a car?')

if (days > 3 && days <= 7) {
    alert(days * 40 - 20 + ' Your discaunt is 20 dollars')
} else if (days >= 7) {
    alert(days * 40 - 50 + ' Your discaunt is 50 dollars')
} else {
    alert(days * 40 + " Please pay the rent")
}

//  #3

const years = prompt('In what year are you interested in the century?')

if (years < 0) {
    alert('Sorry, this is not the right years)')
} else {
    alert(parseInt(years / 100) + 1 + ' century')
}