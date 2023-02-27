let prompt = require("prompt-sync")()
console.log("<**********************{ Welcome to Apna Bank app }***********************>")

let choice;
let name;
let id;
let phone;
let address;
let pincode;
let Bank_bal = 0;
let amount;
var interestRate;
var years;
var monthlyInterestRate;
var months;
var monthlyPayment; 

function getAccNumber() {
  return Math.floor(Math.random() * 10);
  }

const accountNo = getAccNumber();
 
// ---------------------------------------------------------Creating new account-------------------------------------------

function userDetails(){

name = prompt("Enter your full name:             ");
var fullName = /^[a-z,',-]+(\s)[a-z,',-]+$/;
if (!name.match(fullName)){
   console.log("Please enter your First and last name");
}

id = prompt("Enter your email id:              ")
var validId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!id.match(validId)){
   console.log("Invalid Email");
}

phone = prompt("Enter your phone number:          ");
var validPh = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
if(!phone.match(validPh)){
  console.log("Your entered phone number is invalid ")
}

address = prompt("Enter your address:               ");
var validAd = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/;
if(!address.match(validAd)){
  console.log("Enter your valid address: ")
}

pincode = prompt("Enter your area pincode:          ");
var validPin = /^[0-9]{6}?$/;
if(!pincode.match(validPin)){
  console.log("Enter your valid area Pincode: ")
}
}
function userAcc(){

  console.log("<===================={  User Details  }==================>")
  console.log("Name:            ",name);
  console.log("your Account no  ",accountNo);
  console.log("Email id:        ",id);
  console.log("Phone:           ",phone);
  console.log("Address:         ",address);
  console.log("Pincode:         ",pincode);
  console.log("Current balance: ",Bank_bal)
  }


// -----------------------------------------------------------------Deposit-------------------------------------
function deposit(){ 

    let Acc = prompt("Enter Account number: ");
    if(Acc==accountNo){ 
    let b = parseFloat(prompt("Enter amount for deposit: "));
    Bank_bal = Bank_bal + b;
    console.log("Balance: ", Bank_bal);
  }
  else{
    console.log("You have enter wrong input")
  }

}

//-------------------------------------------------------------------withdraw-------------------------------------
function withdraw(){     
     if( Bank_bal>=0 ){
     let c = prompt("Enter amount for withdraw: ");
        Bank_bal = Bank_bal - c;
     console.log("Balance: ", Bank_bal);
     }
     else{
      console.log("insufficient balance: ");
     }    
    }
// -------------------------------------------------------------------loan---------------------------------------    
function Loan(){
  amount = parseFloat(prompt("loanAmount: "));
  interestRate = 15;
  years = parseFloat(prompt("Loan year: "));
  monthlyInterestRate = interestRate / 1200;
  months = years * 12;
  monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

 console.log("Monthlyloan: ",monthlyPayment);
 console.log("Months: ",months);
 console.log("bank balance: ",Bank_bal + amount);
 
}
function payEmi(){
  if(Bank_bal<0){
    console.log("Insufficient Balance! ");
  }
  else{
    months--;
    Bank_bal = Bank_bal - monthlyPayment;
  console.log("=> Your Emi is paid successfully ");
}
}

function loanDetail(){
console.log("Total months left:",months);
console.log("Monthly Emi: ",monthlyPayment);
}

console.log("Press 1 to create new Account:");
console.log("Press 2 to deposit money:"); 
console.log("Press 3 to withdraw money:");
console.log("Press 4 to take load for car, home and education :");
console.log("Press 5 to pay Emi :");
console.log("Press 6 to See Acount details:")
console.log("Press 0 to Exit")

do{
  choice = prompt("Enter your choice (0 to Exit)=> ");
switch (choice)
 {
  case '1': 
    userDetails();
    userAcc();
    break;

  case '2':
    deposit();
    break;

  case '3':
    withdraw();
    break;

  case '4':
    Loan();
  break;

  case '5':
    payEmi ();  
  break;

  case '6':
    userAcc();
    loanDetail(); 
  break;
  }
}while (choice !== '0');
console.log("<~~~~~~~~~~~~~~~~~~~~~~~{ Thank you for kind visit to World bank }~~~~~~~~~~~~~~~~~~~~~~>")



