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
