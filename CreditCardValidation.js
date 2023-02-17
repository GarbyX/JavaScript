function cardnumber(inputtxt) {
    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if(inputtxt.value.match(cardno)) {
              return true;
          }
        else {
              alert("Not a valid Visa credit card number!");
              return false;
          }
}

function cardnumber(inputtxt) {
    let cardno = /^(?:5[1-5][0-9]{14})$/;
        if(inputtxt.value.match(cardno)) {
              return true;
          }
        else {
              alert("Not a valid Mastercard number!");
              return false;
        }
}
