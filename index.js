// // qus 1 

// let income=+prompt("Enter your income");
// let tax=0;
// if(income>0 && income<=10000){
//     tax=income*5/100;
//     console.log("tax :",tax);
// }else if(income>10000 && income<=20000){
//     tax=income*10/100;
//     console.log("tax :",tax);
// }else if(income>20000 && income<=30000){
//     tax=income*15/100;
//     console.log("tax :",tax);
// }else if(income>30000){
//     tax=income*20/100;
//     console.log("tax :",tax);
// }





// // qus 2 


// let month=+prompt("Enter a number ");

// switch(month){
//     case 1:console.log("january");
//     break;
//     case 2:console.log(("feb"));
//     break;
//     case 3:console.log("march");
//     break;
//     case 4:console.log(("april"));
//     break;
//     case 5:console.log("may");
//     break;
//     case 6:console.log(("june"));
//     break;
//     case 7:console.log("july");
//     break;
//     case 8:console.log(("aug"));
//     break;
//     case 9:console.log("september");
//     break;
//     case 10:console.log(("octber"));
//     break;
//     case 11:console.log("november");
//     break;
//     case 12:console.log(("december"));
//     break;
//     default:console.log("not valid month")
// }



// // qus 3 

// let price=+prompt("Enter Price");
// let discount=0;
// let afterdiscount=0;
// if(price>0 && price<100){
//     discount=price*5/100;
//     afterdiscount=price-discount;
//     console.log("After discount",afterdiscount);
// }else if(price>=101 && price <500){
//     discount=price*10/100;
//     afterdiscount=price-discount;
//     console.log("After discount",afterdiscount);
// }else if(price>=500){
//     discount=price*15/100;
//     afterdiscount=price-discount;
//     console.log("After discount",afterdiscount);
// }




// // qus 4 

// let weight=+prompt("Enter Your Weight ");
// let height=+prompt("Enter Your Height in meter");
// let BMI=weight/(height*height);
// if(BMI<18.5){
//     console.log("Underweight");
// }else if(BMI>=18.5 && BMI <=24.9){
//     console.log("Normal");
// }else if(BMI>=25 && BMI<=29.9){
//     console.log("Overweight");
// }else{
//     console.log("Obese");
// }