let prompt = require("prompt-sync")()

console.log("<~~~~~~~~~~~~~~~~~~~~~~~~~{ Welcome to World Bank }~~~~~~~~~~~~~~~~~~~~~>")
let dynamicArray = [];

let choice;
    let name;
        let id;
            let phone;
                let address;
                    let pincode;
                    let newObj;
                    let searchname
                        // let Bank_bal = 0;
                        //    let currentBal = 0;  
                    //   let amount;
                //   var interestRate;
            //   let month = 0;
        //   var monthlyInterestRate;
    //   var monthlyPayment;
//   const DefaultAcc = 12345678;
// var valid_n =  /^[0-9]+$/;

// ---------------------------------------------------------Creating new account-------------------------------------------
bankApp();
function userDetails(){
userName();
userId();
userPhone();
userAdd();
userPin()
// currentBal = 0; 
// month = 0;
// monthlyInterestRate = 0 ;
// monthlyPayment = 0 ;
// Bank_bal = 0;
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
function acc(){ 
newObj = {
    Name: userName(),
    Id : userId(),
    Phone : userPhone(),
    Address : userAdd(),
    Pincode : userPin(),
};
dynamicArray.push(newObj);
}
// let Name = userName();
//   let Id = userId();
//     let Phone = userPhone();
//         let Address= userAdd();
//             let Pincode=userPin();

// function userAcc(){
  
//     console.log("<~~{  User Details  }~~>")
//     console.log("Name:                  ",name);
//     console.log("Email id:              ",id);
//     console.log("Phone:                 ",phone);
//     console.log("Address:               ",address);
//     console.log("Pin code:              ",pincode);
//     }


function bankApp(){
do{
    choice=prompt("enter your choice(# to exit):")
    
switch(choice){
  case '1' :
    let match=null;
    searchname = prompt("Enter Account number to search for:");
  for (let i = 0; i < dynamicArray.length; i++) {
    let obj = dynamicArray[i];
    if (obj.Name === searchname) {
       match = obj;
      break;
    }
  }

  if (match) {
    console.log("Match found:",match);
  } else {
    console.log("No match found for Account number:",searchname);
  
  }
  break;
  case '2' :
    // userDetails();
    // userAcc();
    console.log(acc());
    // console.log(dynamicArray);
    break;
}
}
while(choice !== '#')
}
