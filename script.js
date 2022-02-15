 //Частина 1
let number = prompt("Напишіть натуральне число");
let division = number % 2;
if(number == 0){
    alert("Ви ввели ні парне, ні непарне  число!")
} else if(division != 0){
    alert("Ви ввели непарне число!")
} else{
    alert("Ви ввели парне число!")
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
let years = prompt("Hello! Please write the year!");

if (years <= 0){
    alert("You write uncorrect year");
}else if(years>=1 && years <=100){
    alert ("The year "+years+" is the 1 century of our era");
}else{
    alert ("The year "+years+" is the "+parseInt((years / 100)+ 1)  + " century of our era!");
}




