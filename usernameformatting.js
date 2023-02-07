      function titleCase(str) 
      {
        var splitStr = str.toLowerCase().split(" ");

        for (var i = 0; i < splitStr.length; i++) 
        {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(" ")
      }

      alert("JavaScript Program - Username Formatting.");

      var firstname = (prompt("Enter First name: "));
      var surname = (prompt("Enter Surname: "));

      alert("Your name is " + titleCase(firstname + " " + surname));

      document.writeln(titleCase(firstname + (" ")));
      document.writeln(titleCase(surname));
