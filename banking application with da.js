
let prompt = require("prompt-sync")()

console.log("<~~~~~~~~~~~~~~~~~~~~~~~~~{ Welcome to World Bank }~~~~~~~~~~~~~~~~~~~~~>")

let dynamicArray = [];

let choice;
let name;
let id;
let phone;
let address;
let pincode;
let month = 0;
var monthlyPayment;
var amount;
var validAcc = /^[0-9]{8}?$/;
var valid_n =  /^[0-9]+$/;
let Accno;
// let value;

// ---------------------------------------------------------Creating new account-------------------------------------------

function userName(){
    var fullName = /^[a-z,',-]+(\s)[a-z,',-]+$/;
       name = prompt("Enter your full name(0 to go back):             ");
       if(name==0){
        bankApp();
       }
        if (!name.match(fullName)){
            console.log("Invalid Name "); 
            userName();
        }
        return name;
    }

    function userId(){
        id = prompt("Enter your email id(0 to go back):              ")
        var validId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(id==0){
            bankApp();
           }
            if(!id.match(validId)){
              console.log("Invalid Email");
              userId();
            }
            return id;
        }
        
        function userPhone(){
        phone = prompt("Enter your phone number(0 to go back):          ");
        var validPh = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if(phone==0){
            bankApp();
           }
            if(!phone.match(validPh)){
              console.log("Invalid Phone number")
              userPhone();
            }
        return phone;
      }
        function userAdd(){
        address = prompt("Enter your address(0 to go back):               ");
          var validAd = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/;
          if(address==0){
            bankApp();
           }
            if(!address.match(validAd)){
              console.log("Invalid Address ")
              userAdd();
            }
            return address;
        }
        function userPin(){
        pincode = prompt("Enter your area pincode(0 to go back):          ");
        var validPin = /^[0-9]{6}?$/;
        if(pincode==0){
            bankApp();
           }
            if(!pincode.match(validPin)){
              console.log("Invalid Pin code ")
              userPin();
        }
        return pincode;
    }
// -------------------------------------------------------creating Account number---------------------------------------

function AccountNumber() {
  let Accnumber = prompt("Enter your 8 digit accountNo(0 to go back):     ",);
  var validPin = /^[0-9]{8}?$/;
  if(Accnumber==0){
    bankApp();
  }
  if(!Accnumber.match(validPin)){
    console.log("Invalid Account number ")
    AccnumberNumber();
  }
    return Accnumber;
}
  
//---------------------------------------------------------Deposit function----------------------------------------------
function deposit(){;
    Accno = prompt("Enter your Account number(0 to go back):");
    if(Accno==0){
      bankApp();
     }
  for(i = 0; i < dynamicArray.length; i++){
     if(dynamicArray[i].accountNo === Accno){
           let newValue1 = parseFloat(prompt("Enter amount: "));
           dynamicArray[i].CurrentBal += newValue1;
           break;
      }
      console.log(dynamicArray[i].CurrentBal);   
  } 
}    

//--------------------------------------------------------------withdraw-------------------------------------------------
function withdraw(){ 
    let Accno = prompt("Enter your Account number(0 to go back):");
    if(Accno==0){
      bankApp();
     }

  for(i = 0; i < dynamicArray.length; i++){
     if(dynamicArray[i].accountNo === Accno){
          let newValue1 = parseInt(prompt("Enter amount: "));
          dynamicArray[i].CurrentBal -= newValue1; 
          break;
      }
  } 
  console.log(dynamicArray[i].CurrentBal);
  }
  // -----------------------------------------------------------loan----------------------------------------------------  
function loan(){
    let Accno = prompt("Enter your Account number(0 to go back):");
    if(Accno==0){
      bankApp();
     }
  for(i = 0; i < dynamicArray.length; i++){
     if(dynamicArray[i].accountNo === Accno){

      function loanAm(){
        amount = prompt("Loan Amount: ");
          if(!amount.match(valid_n)){ 
            console.log("~~< Invalid amount >~~");
            loanAm();
          }
        }
        function loanMon(){
          month = prompt("Durration of months: ");
            if(!month.match(valid_n)){ 
                console.log("~~< Invalid month >~~");
                loanMon();
              }
            }
            loanAm();
            loanMon();
            amount = parseInt(amount);
            month = parseInt(month);
            interestRate = 15;
            monthlyInterestRate = interestRate / 1500;
            monthlyPayment = amount * monthlyInterestRate * month;
            dynamicArray[i].CurrentBal += amount;
            dynamicArray[i].MonthlyPayment = monthlyPayment;
            dynamicArray[i].Emi_pending = month;
            break;
      }    
  }
  console.log(dynamicArray[i].CurrentBal);
  console.log("pednig Emi: ",month);
  console.log("Monthly payment: ",monthlyPayment);
}

// ---------------------------------------------------------Pay EMI------------------------------------------------------

function payEmi(){
  let Accno = prompt("Enter your Account number(0 to go back):");
  if(Accno==0){
    bankApp();
   }
  for(i = 0; i < dynamicArray.length; i++){
     if(dynamicArray[i].accountNo === Accno){
           month--;

           dynamicArray[i].CurrentBal -= monthlyPayment;
           dynamicArray[i].MonthlyPayment = monthlyPayment;
           dynamicArray[i].Emi_pending = month;

          break;
      }
  }
  console.log(dynamicArray[i].CurrentBal);
  console.log("Pending Emi: ",month);
  console.log("Monthly Emi: ",monthlyPayment);
}


function bankApp(){
do{
    console.log(",_________________________________,");
    console.log("| Press 1 to create new Account:  |");
    console.log("| Press 2 to deposit money:       |"); 
    console.log("| Press 3 to withdraw money:      |");
    console.log("| Press 4 to take load :          |");
    console.log("| Press 5 to pay Emi :            |");
    console.log("| Press 6 to See Acount details:  |");
    console.log("|_________________________________|"); 
    console.log("                                   ");
    choice=prompt("Enter your choice (# to Exit)=>  ");

switch (choice)
 {
  case '1': 
    Account1()
       console.log("                                              ");
       console.log("<~~~~~{ Account created! }~~~~~~~>");
       console.log("                                              ");
    break;
  case '2':
        deposit();
    break;
  case '3':
        withdraw();
    break;
  case '4':
        loan();
    break;
  case '5':
        payEmi();
   break;
  case '6':
    let match=null;
      Accno = prompt("Enter your Account number(0 to go back):");
    for (i = 0; i < dynamicArray.length; i++) {
      if (dynamicArray[i].accountNo === Accno) {
        match = dynamicArray[i];
        break;
      }
    }
  if (match) {
    console.log("Match found:",match);
  } else {
    console.log("No match found for Account number:",Accno);
  }
 case '#':
    break;
      default:
        console.log("                              ");
        console.log("<~~~~~~{ Invalid input }~~~~~>");
        console.log("                              ");
  }
}while (choice !=='#');
        console.log("                              ");
        console.log("<~~~~~~{ Thank you for kind visit to World bank }~~~~~~>");
        console.log("                              ");
}
bankApp();
function Account1(){
let newObj = {
    name:          userName(),
    accountNo :    AccountNumber(),
    id :           userId(),
    phone :        userPhone(),
    address :      userAdd(),
    pin_code :     userPin(),
    CurrentBal :   0,
    MonthlyPayment:0,
    Emi_pending :  0
  };
  dynamicArray.push(newObj);
}