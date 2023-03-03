
let prompt = require("prompt-sync")()

console.log("<~~~~~~~~~~~~~~~~~~~~~~~~~{ Welcome to World Bank }~~~~~~~~~~~~~~~~~~~~~>")
let dynamicArray = [];

let choice;
    let name;
        let id;
            let phone;
                let address;
                    let pincode;
                           let currentBal = 0;  
                      let amount;
                  var interestRate;
              let month = 0;
          var monthlyInterestRate;
      var monthlyPayment;
let searchname;
let Accnumber;
var valid_n =  /^[0-9]+$/;

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
// ------------------------------------------------------creating Account number---------------------------------------

function AccountNumber() {
  let Accnumber = prompt("Enter your 8 digit accountNo(0 to go back):     ",);
  let validAcc = /^[0-9]{6}?$/;
  if(Accnumber.match(validAcc)){
        console.log("invalid account number");
  }
  return Accnumber;
}
  Accnumber = parseInt(Accnumber);


// -----------------------------------------------------------------Deposit-------------------------------------
function deposit(){ 
let Acc = prompt("Enter Account number(0 to go back): ");

if(Acc==0){
    bankApp();
   }
    if(Acc==Accnumber){
        v_n(); 
        function v_n(){
      let b = prompt("Enter amount for deposit(0 to go back): ");
      if(b==0){
        bankApp();
       }
        if(b.match(valid_n))
        {
            b = parseInt(b);
          currentBal = currentBal + b;
            console.log("--< Amount is added to your account >--")
            console.log("Deposited balance: ", currentBal);
             }
         else{
            console.log("Invalid input ");
            v_n();
         }
        }
    }
    else{
    console.log("You have enter wrong input")
    }
}
//-------------------------------------------------------------------withdraw-------------------------------------
function withdraw(){ 
  let Acc = prompt("Enter Account number(0 to go back): "); 
  if(Acc==0){
    bankApp();
   }
  if(Acc==Accnumber){  
    w_D();

    function w_D(){ 
      let c = prompt("Enter amount for withdraw(0 to go back): ");
      if(c==0){
        bankApp();
       }
        if(c.match(valid_n)){
            if(c < currentBal){ 
                if(currentBal>0){
                  c = parseInt(c);
                  currentBal = currentBal - c;
                          console.log("Current Balance: ", currentBal);
                            }
                        }
      else{
        console.log("                              ");
        console.log("<~~~~~~~~~~insufficient balance~~~~~~~~~~~>");
        console.log("                              ");
        }
    }
    else{
        console.log("Invalid input ");
        w_D();
    }
  }
}    
    else{
      console.log("You have enter wrong input");
    }
  }

// -------------------------------------------------------------------loan---------------------------------------    
function Loan(){
  let Acc = prompt("Enter Account number(0 to go back): ");
  if(Acc==0){
    bankApp();
   }
  if(Acc==accountNo){
    if(month==0){

    function loanAm(){
    amount = prompt("loan Amount(0 to go back): ");
    if(amount==0){
        bankApp();
       }
      if(!amount.match(valid_n)){ 
        console.log("~~< Invalid amount >~~");
        loanAm();
      }
    }

    function loanMon(){
      month = prompt("Durration of months(0 to go back): ");
      if(month==0){
        bankApp();
       }
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
            monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -month));
            currentBal = currentBal + amount;
                console.log("Current balance:             ",currentBal);
                    console.log("Monthlyloan:                 ",monthlyPayment);
                        console.log("Months:                      ",month);                    
    
  }
  else{
    console.log("<~~~~~~~~~~{ You have already pending EMIs. Can't take another loan }~~~~~~~~~~~~~~~~~>")
  }
}
  else{
    console.log("                              ");
    console.log("<~~~~~{ You have enter wrong input }~~~~~~~~>");
    console.log("                              ");
  } 
  return month,monthlyPayment,currentBal;
}

function world(){
   return currentBal;
}
// -------------------------------------------------------------Pay EMI---------------------------
function payEmi(){
  let Acc = prompt("Enter Account number(0 to go back): ");
  if(Acc==0){
    bankApp();
   }
  if(Acc==accountNo){
         if(!amount==''){
           if(currentBal < monthlyPayment){
            console.log("                              ");
           console.log("<~~~~~~~~~{ Insufficient Balance! }~~~~~~~~~~>");
           console.log("                              ");
           }
           else{
             month--;
              currentBal = currentBal - monthlyPayment;
              console.log("                              ");
              console.log("<~~~~~~{ EMI paid successfully }~~~~~>");
              console.log("                              ");
           }
            }
        else{
            console.log("                              ");
           console.log("<~~~~~~~~{ Didn't have any loan }~~~~~~~~~>");
           console.log("                              ");
           }
          }
          else{
            console.log("                              ");
            console.log("You have enter wrong input:")
            console.log("                              ");
          }
        }

// function currentbal(){
//   if(!currentBal==''){
//           r
//           }
//         }


function loanDetail(){
  if(!month=='' || !monthlyPayment==''){
          console.log("Total EMI pending:   ",month);
            console.log("Monthly EMI:         ",monthlyPayment);
          }
        }

function bankApp(){
do{
    console.log(",_________________________________,");
       console.log("| Press 1 to create new Account:  |");
         console.log("| Press 2 to deposit money:       |"); 
          console.log("| Press 3 to withdraw money:      |");
        console.log("| Press 4 to take load :          |");
      console.log("| Press 5 to pay Emi :            |");
    console.log("| Press 6 to See Acount details:  |")
  console.log("|_________________________________|"); 
  console.log("                              ");

choice = prompt("Enter your choice (# to Exit)=> ");

switch (choice)
 {
  case '1': 
    Account1()
       console.log("                     ");
            console.log("<~~~~~~~~~~~~~{ Account created! }~~~~~~~~~~~>");
       console.log("                     ");
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
        let Acc = prompt("Enter Account number(0 to go back): ");
        if(Acc==0){
            bankApp();
           }
        if(Acc==Accnumber){
        console.log("                              ");
         console.log("<~~~~~~~~~~{ Not any pending EMI }~~~~~~~~~>");
           console.log("                              ");
       }
      }
    else{
      payEmi ();  
    } 
      break;

  case '6':
    let match=null;
    searchAcc = prompt("Enter Account number to search for:");
  for (let i = 0; i < dynamicArray.length; i++) {
    let obj = dynamicArray[i];
    if (obj.accountNo === searchAcc) {
       match = obj;
      break;
    }
  }

  if (match) {
    console.log("Match found:",match);
  } else {
    console.log("No match found for Account number:",searchAcc);
  
  }
 case '#':
    break;
      default:
        console.log("                              ");
        console.log("<~~~~~~{ Invalid input }~~~~~~");
        console.log("                              ");
  }
}while (choice !=='#');
console.log("                              ");
console.log("<~~~~~~~~~~~~~~~~~~~~~~~{ Thank you for kind visit to World bank }~~~~~~~~~~~~~~~~~~~~~~>")
console.log("                              ");
}
bankApp();

function Account1(){
let newObj = {
    name: userName(),
    accountNo : AccountNumber(),
    id : userId(),
    phone : userPhone(),
    address : userAdd(),
    pin_code : userPin(),
    currentBal : world(),
    Loan : loanDetail(),
};
dynamicArray.push(newObj);
}