let prompt = require("prompt-sync")()
console.log("**********************{ Welcome to Apna Bank app }***********************")
console.log("Press 1 to register new user:");
console.log("Press 2 to deposit money:"); 
console.log("Press 3 to withdraw money: ");
console.log("Press 0 to Exit")
var a = 0;
let x = prompt("=> ");

function userDetails(){
let name = prompt("Enter your full name: ");
var fullName = /^[a-z,',-]+(\s)[a-z,',-]+$/;
if(!name.match(fullName)){
   console.log("Please enter your First and last name");
}

let id = prompt("Enter your email id: ")
var validId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!id.match(validId)){
   console.log("Invalid Email");
}

let phone = prompt("Enter your phone number: ");
var validPh = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
if(!phone.match(validPh)){
  console.log("Your entered phone number is invalid ")
}

let address = prompt("Enter your address: ");
var validAd = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/;
if(!address.match(validAd)){
  console.log("Enter your valid address: ")
}

let pincode = prompt("Enter your area pincode: ");
var validPin = /^[0-9]{6}?$/;
if(!pincode.match(validPin)){
  console.log("Enter your valid area Pincode: ")
}
}
function deposit(){   
    let b = prompt("Enter amount for deposit: ");
    a = a+b;
    console.log("Balance",a);
}
function withdraw(){     
     if(a!==0){
     let c = prompt("Enter amount for withdraw: ");
        a = a - c;
     console.log("Balance: ", a );
     }
     else{
      console.log("insufficient balance: ");
     }    
    }
switch (x) {
  case '0':
    break;
  case '1':
    userDetails();
    break;
  case '2':
    deposit();
    break; 
  case '3':
    withdraw();
  break;
  default:
    console.log("Invalid button! Thanks for using Apna Bank app");
}


