function titleCase(str) {
          var x = str.toLowerCase().split(" ");                                   // assigns to parameter in lowercase & 'splitted' into an array
          for (var i = 0; i < x.length; i++)                                      // loops thru x's length (array)
          {
            x[i] = x[i].charAt(0).toUpperCase() + x[i].substring(1);              // coverts only first letter to caps & concats to rem letters
          }
          return x.join(" ");																                      // pieces the string back together					
      }

      alert("JavaScript Program - Username Formatting.");

      var firstname = (prompt("Enter First name: "));
      var surname = (prompt("Enter Surname: "));

      alert("Your name is " + titleCase(firstname + " " + surname));

      document.writeln(titleCase(firstname + (" ")));
      document.writeln(titleCase(surname));
