 //Частина 1
let number = prompt("Напишіть натуральне число");
let division = number % 2
if(division === 0){
    alert("Ви ввели парне число")
} else if(division !=0){
    alert("Ви ввели непарне число")
}


 //Частина 2
   let days = prompt("Hello!  Please write the number of days you need to rent a car!");
   let price_day = 40;
   let price_rent = (days * price_day);
   if(days>=7 && days<365){
       price_rent = price_rent - 50;
          alert("Price of rent is: "+price_rent+" $"+"  You have a discount -50$");

   } else if(days>3 && days<7){
       price_rent = price_rent - 20;
          alert("Price of rent is: "+price_rent+" $"+"  You have a discount -20$");
   } else if(days>=365 && days<700){
          alert("Price of rent is: "+price_rent+" $"+" You are rich))). I advise buying you a car! Have a nice day!");
   } else if(days<=0){
          alert("Please try again!");
   } else if(days>=700){
          alert("It is too much");
   } else {
          alert("Price of rent is: "+price_rent+" $");
   }



//Частина 3
let year = prompt("Hello! Please write the year!");

if(year<0){
    alert("You write uncorrect year! Please try again!");
} else if(year>=0 && year<=100){
    alert("The year "+year+" was at the first century!");
} else if(year>100 && year<=200){
    alert("The year "+year+" was at the second century!");
} else if(year>200 && year<=300){
    alert("The year "+year+" was at the third century!");
} else if(year>300 && year<=400){
    alert("The year "+year+" was at the fourth century!");
} else if(year>400 && year<=500){
    alert("The year "+year+" was at the fifth century!");
} else if(year>500 && year<=600){
    alert("The year "+year+" was at the sixth century!");
} else if(year>600 && year<=700){
    alert("The year "+year+" was at the seventh century!");
} else if(year>700 && year<=800){
    alert("The year "+year+" was at the eighth century!");
} else if(year>800 && year<=900){
    alert("The year "+year+" was at the ninth century!");
} else if(year>900 && year<=1000){
    alert("The year "+year+" was at the tenth century!");
} else if(year>1000 && year<=1100){
    alert("The year "+year+" was at the eleventh century!");
} else if(year>1100 && year<=1200){
    alert("The year "+year+" was at the twelfth century!");
} else if(year>1200 && year<=1300){
    alert("The year "+year+" was at the thirteenth century!");
} else if(year>1300 && year<=1400){
    alert("The year "+year+" was at the fourteenth century!");
} else if(year>1400 && year<=1500){
    alert("The year "+year+" was at the fifteenth  century!");
} else if(year>1500 && year<=1600){
    alert("The year "+year+" was at the sixteenth century!");
} else if(year>1600 && year<=1700){
    alert("The year "+year+" was at the seventeenth century!");
} else if(year>1700 && year<=1800){
    alert("The year "+year+" was at the eighteenth century!");
} else if(year>1800 && year<=1900){
    alert("The year "+year+" was at the nineteenth century!");
} else if(year>1900 && year<=2000){
    alert("The year "+year+" was at the twentieth century!");
} else if(year>2000 && year<=2100){
    alert("The year "+year+" is at the twenty-first century!");
} else {
    alert("It will be the future! And I'm tired to change numbers)-> I need a formula)) !")
}



