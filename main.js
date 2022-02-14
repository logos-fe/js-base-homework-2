function showNumber() {
    let number = document.getElementById('date').value;

    if (number % 2 == 0) { alert('Ваше число парне') }

    else {
        alert('Ваше число непарне')
    }
}


function showDays() {
    let days = document.getElementById('days').value;
    if (days >= 7) {
        alert(days * 40 - 50 + ' Круто, твоя знижка 50 баксів')
    } else if (days > 3 && days < 7) {
        alert(days * 40 - 20 + ' Твоя знижка 20 баксів. ти можеш більше')
    }
    else if (days < 0) { alert('Нормально написано, введи кількість днів') }
    else { alert(days * 40 + ' Заплати і йди') }
}

function showYears() {
    let years = document.getElementById('years').value;

    if (years <= 0) {
        alert('не правильний рік')
    }

    else {
        alert(parseInt(years / 100) + 1 + ' століття нашої ери')
    }
}    