let prompt = require("prompt-sync")()
console.log("<**********************{ Welcome to Apna Bank app }***********************>")

let choice;
  let name;
    let id;
      let phone;
        let address;
          let pincode;
            let Bank_bal = 0;
          let currentBal;
        let amount;
      var interestRate;
    var month;
  var monthlyInterestRate;
var monthlyPayment; 

// ---------------------------------------------------------Creating new account-------------------------------------------

function userDetails(){
  Bank_bal = 0;

var fullName = /^[a-z,',-]+(\s)[a-z,',-]+$/;
   name = prompt("Enter your full name:             ");
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

// ------------------------------------------------------creating Account number---------------------------------------
}

function generateAccountNumber() {
  let accountNumber = '';
    for (let i = 0; i < 8; i++) {
      accountNumber += parseFloat(Math.floor(Math.random() * 10));
    }
  return accountNumber;
}

const accountNumber = generateAccountNumber();
const accountNo = accountNumber;

// -----------------------------------------------------------------Deposit-------------------------------------
function deposit(){ 
let Acc = prompt("Enter Account number: ");
    if(Acc==accountNo){ 
      let b = parseFloat(prompt("Enter amount for deposit: "));
      Bank_bal = Bank_bal + b;
        console.log("--< Amount is added to your account >--")
        console.log("Current balance: ", Bank_bal);
      }
    else{
    console.log("You have enter wrong input")
    }
}

//-------------------------------------------------------------------withdraw-------------------------------------
function withdraw(){ 
  let Acc = prompt("Enter Account number: "); 
    if(Acc==accountNo){   
      if(Bank_bal>0){
      let c = prompt("Enter amount for withdraw: ");
        if(c<Bank_bal){
          Bank_bal = Bank_bal - c;
          console.log("Current Balance: ", Bank_bal);
        }
      else{
      console.log("<~~~~~~~~~~insufficient balance~~~~~~~~~~~>")
        }
      }
    }    
    else{
      console.log("You have enter wrong input");
    }
  }

// -------------------------------------------------------------------loan---------------------------------------    
function Loan(){
  let Acc = prompt("Enter Account number: ");
  if(Acc==accountNo){
    amount = parseFloat(prompt("loan Amount: "));
      interestRate = 15;
        month = parseFloat(prompt("Durration of months: "));
         monthlyInterestRate = interestRate / 1500;
          monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -month));
        console.log("Monthlyloan: ",monthlyPayment);
       console.log("Months: ",month);
      currentBal = Bank_bal + amount;
    console.log("Current balance: ",currentBal);

  }
  else{
    console.log("You have enter wrong input");
  }
}

function world(){
  console.log("current Balance:", Bank_bal);
}

function payEmi(){
  let Acc = prompt("Enter Account number: ");
       if(Acc==accountNo){
         if(!amount==''){
           if(Bank_bal<0){
           console.log("Insufficient Balance! ");
           }
           else{}
             month--;
              currentBal = currentBal - monthlyPayment;
              console.log("<~~~~~~{ EMI paid successfully }~~~~~>")
            }
        else{
           console.log("You have enter wrong input");
           }
          }
          else{
            console.log("<~~~~~~~~{ Didn't have any loan }~~~~~~~~~>")
          }
        }

function currentbal(){
  if(!currentBal==''){
          console.log("Current balance:     ",currentBal);
          }
          else{
            console.log("Current balance:     ",Bank_bal);
          }
        }
function loanDetail(){
  if(!month=='' || !monthlyPayment==''){
          console.log("Total EMI pending:",month);
            console.log("Monthly EMI: ",monthlyPayment);
          }
        }

console.log("Press 1 to create new Account:");
  console.log("Press 2 to deposit money:"); 
    console.log("Press 3 to withdraw money:");
      console.log("Press 4 to take load for car, home and education :");
    console.log("Press 5 to pay Emi :");
  console.log("Press 6 to See Acount details:")
console.log("                              ");

function userAcc(){
  console.log("<=={  User Details  }==>")
    console.log("Name:            ",name);
      console.log("Your Account no  ",accountNo);
        console.log("Email id:        ",id);
      console.log("Phone:           ",phone);
    console.log("Address:         ",address);
  console.log("Pin code:        ",pincode);
  }
function defaultUser(){
  console.log("Name:                 Amar kumar");
  console.log("your Account no:     ",accountNo);
  console.log("Email id:             amk@gmail.com");
  console.log("Phone:                1234567890");
  console.log("Address:              Mohali");
  console.log("Pin code:             123456");
}

do{
      choice = prompt("Enter your choice (0 to Exit)=> ");
switch (choice)
 {
  case '1': 
    userDetails();
       console.log("                     ");
            console.log("<~~~~~~~~~~~~~{ Account created! }~~~~~~~~~~~>");
       console.log("                     ");
      userAcc();
    world();
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
    if(month<1 || monthlyPayment < 0){
      console.log("<~~~~~~~~~~{ Not any pending EMI }~~~~~~~~~>")
    }
    else{
      payEmi ();  
    }  
      break;

  case '6':

    if(!name==''){
      userAcc();
        if(month<1 || monthlyPayment < 0){
          console.log("<~~~~~~~~~~{ Don't have any EMI }~~~~~~~~~>")
        }
        else{
          currentbal();
          loanDetail();
        } 
      }
      else{
        defaultUser();
        currentbal();
        if(month<1 || monthlyPayment < 0){
          console.log("<~~~~~~~~~~{ Don't have any EMI }~~~~~~~~~>")
        }
        else{
          
          loanDetail();
        } 

      }
  break;
  
 case '0':
    break;
      default:
        console.log("Invalid input");
  }
}while (choice !== '0');

console.log("<~~~~~~~~~~~~~~~~~~~~~~~{ Thank you for kind visit to World bank }~~~~~~~~~~~~~~~~~~~~~~>")



