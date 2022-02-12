const number = prompt("КАЖИ ЧИСЛО")
if (number % 2 ===0){
	alert ("ТВОЄ ЧИСЛО ПАРНЕ (МАААГІЯ)")
} else{
	alert("ТВОЄ ЧИСЛО НЕПАРНЕ (МАААГІЯ)")
}




const days = prompt("СКІЛЬКИ ХОЧЕШ ГАНЯТИ (днів)")
const price = 40

if(days >= 7){
	alert(days * 40 - 50 + '$ - ГОНИ (знижка50$)')
}else if(days > 3 && days < 7){
	alert(days * 40 - 20 + '$ - ГОНИ (знижка20$)')
}else if(days > 0 && days < 3){
	alert(days * 40 + '$ - ГОНИ (НЕМА ЗНИЖКИ ЖМОТ)')
}





const years = prompt("ЯКИЙ РІК")
if (years<0){
	alert("НЕЕЕЕЕЕЕЕ ДАВАЙ ПА НОВОЙ НЕ ПРАВИЛЬНИЙ РІК ")
}else{
	alert(parseInt(years/100 +1)  + " СТОЛІТТЯ")
}