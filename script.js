const number = prompt("Введіть число")
if(number %2){
    alert("Ваше число непарне")
}else{
    alert("Ваше число парне")
}


const days = prompt("Вкажіть кількість днів оренди")
if(days >= 7){
    alert(days * 40 - 50 + "$ " + "Твоя знижка 50$")
} else if (days < 3 && days > 7) {
    alert(days * 40 - 20 + "$ " + " Твоя знижка 20$")
} else { alert(days * 40  + "$ " + "Сума до оплати") 
}

const years = prompt("Введіть рік, щоб визначити століття")
if (years <= 0) {
    alert("Ви ввели не правильний рік")
}else {
    alert (parseInt(years / 100) + 1 + " століття")
}



