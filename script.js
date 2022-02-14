// Task 1


let number = prompt ('Введіть ваше число')
if (number % 2) {alert ('Ваше число непарне')}

else {
    alert ('Ваше число парне')
}

// Task 2

let days = prompt(' ВВедіть кількість днів оренди автомобіля')

if (days >= 7) {
    alert(days * 40 - 50 + ' Круто, твоя знижка 50 баксів')
} else if (days > 3 && days < 7) {
    alert(days * 40 - 20 + ' Твоя знижка 20 баксів. ти можеш більше')
} else { alert(days * 40 + ' Заплати і йди') }

// Task 3

let years = prompt('ВВедіть будь-який рік нашої ери, щоб визначити століття')

if (years <= 0) {
    alert('не правильний рік')
}

else {
    alert (parseInt(years / 100) + 1 + ' століття нашої ери')
}
