
let prompt = require("prompt-sync")()

console.log("<~~~~~~~~~~~~~~~~~~~~~~~~~{ Welcome to World Bank }~~~~~~~~~~~~~~~~~~~~~>")

let choice;
    let name;
        let id;
            let phone;
                let address;
                    let pincode;
                        let Bank_bal = 0;
                           let currentBal = 0;  
                      let amount;
                  var interestRate;
              let month = 0;
          var monthlyInterestRate;
      var monthlyPayment;
  const DefaultAcc = 12345678;

var valid_n =  /^[0-9]+$/;

// ---------------------------------------------------------Creating new account-------------------------------------------

function userDetails(){
userName();
userId();
userPhone();
userAdd();
userPin()
currentBal = 0; 
month = 0;
monthlyInterestRate = 0 ;
monthlyPayment = 0 ;
Bank_bal = 0;
}

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
    }
// ------------------------------------------------------creating Account number---------------------------------------

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
let Acc = prompt("Enter Account number(0 to go back): ");

if(Acc==0){
    bankApp();
   }
    if(Acc==accountNo || Acc == DefaultAcc){
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
  if(Acc==accountNo || Acc == DefaultAcc){  
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
  if(Acc==accountNo || Acc == DefaultAcc){
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
}

function world(){
  console.log("current Balance: ", currentBal);
}
// -------------------------------------------------------------Pay EMI---------------------------
function payEmi(){
  let Acc = prompt("Enter Account number(0 to go back): ");
  if(Acc==0){
    bankApp();
   }
  if(Acc==accountNo || Acc == DefaultAcc){
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
          console.log("Total EMI pending:   ",month);
            console.log("Monthly EMI:         ",monthlyPayment);
          }
        }

function userAcc(){
  
  console.log("<~~{  User Details  }~~>")
  console.log("Name:            ",name);
  console.log("Your Account no  ",accountNo);
  console.log("Email id:        ",id);
  console.log("Phone:           ",phone);
  console.log("Address:         ",address);
  console.log("Pin code:        ",pincode);
  }


function defaultUser(){
    Acc = prompt("Enter account number(0 to go back): ");
    if(Acc==0){
        bankApp();
       }
    if(Acc==DefaultAcc){
    console.log("<~~{  default User Details  }~~>")
  console.log("Name:                 Amar kumar");
  console.log("your Account no:     ",DefaultAcc);
  console.log("Email id:             amk@gmail.com");
  console.log("Phone:                1234567890");
  console.log("Address:              Mohali");
  console.log("Pin code:             123456");
  currentbal();
  if(month<1 || monthlyPayment < 0){
      console.log("                              ");
    console.log("[ Don't have any Loan ]");
    console.log("                              ");
  }
  else{
    
    loanDetail();
  } 
}
else{
    console.log("                              ");
    console.log("You have enter wrong input:")
    console.log("                              ");
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
console.log("[ Default Account number ]="   ,DefaultAcc);

choice = prompt("Enter your choice (# to Exit)=> ");

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
        let Acc = prompt("Enter Account number(0 to go back): ");
        if(Acc==0){
            bankApp();
           }
        if(Acc==accountNo || Acc == DefaultAcc){
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

    if(!name==''){
      let Acc = prompt("Enter your account number(0 to go back): ");
      if(Acc==0){
        bankApp();
       }
        if(Acc==accountNo){
         userAcc();
         currentbal();
            if(month<1 || monthlyPayment < 0){
            console.log("                              ");
               console.log("<~~~~~~~~~~{ Don't have any EMI }~~~~~~~~~>");
                  console.log("                              ");
        }
        else{
          loanDetail();
        } 
       }
       else{
        console.log("[ wrong Accont number ]")
       }
      }
      else{
        defaultUser();
      }
  break;
  
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

