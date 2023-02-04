function Calc()
{
var val1 = parseFloat(document.getElementById("fnum").value);
var val2 = parseFloat(document.getElementById("snum").value);

var optr = document.getElementById('operator').value;
var calc;

  if (optr == "add") {
              calc = val1 + val2
              alert("Answer is: " + calc);
	    }
  else if (optr == "sub") {
	      calc = val1 - val2
              alert("Answer is: " + calc);
	    }
  else if (optr == "mul") {
	      calc = val1 * val2;
              alert("Answer is: " + calc);
    	    }
  else if (optr == "div") {
	      calc = val1 / val2;
              alert("Answer is: " + calc);
	    }
  else {
	      alert("Invalid entry");
	    }
}

function validate(value) {
   if (value == null || value == "") {
         alert("Required Field");
         return 0;
         } 
   else if (isNaN(value)) {
         alert("Must be a Number Field");
         return 0;
         } else return value;
   }
