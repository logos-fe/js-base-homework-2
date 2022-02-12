// Task 1

let number = prompt ('Введіть ваше число')

if (number % 2) {
    alert ('Ваше число непарне')
}   else {
    alert ('Ваше число парне')
}

// Task 2

let days = prompt('Введіть кількість днів оренди: ')

const rentalDay = 40

if (days >= 7) {
    alert(days * rentalDay - 50 + ' - знижка 50 бачей')
} else if (days > 3 && days < 7) {
    alert(days * rentalDay - 20 + ' - знижка 20 бачей')
} else { alert(days * 40 + ' - плати') }

// Task 3

let years = prompt('Введи рік')

if (years <= 0) {
    alert('Нема такого року')
}

else {
    alert (parseInt(years / 100) + 1 + ' століття')
} 