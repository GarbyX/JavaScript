function tC(name) {
    var name_lw = name.toLowerCase();
    var name_s = name_lw.substring(1);
    var n_U = name.charAt(0);
    var n_U1 = n_U.toUpperCase();
    return(n_U1 + name_s);
}

alert("JavaScript Program - Username Format.");

var firstname = (prompt("Enter First name: "));
alert("First name: '" + firstname + "' saved");

var surname = (prompt("Enter Surname: "));
alert("Last name: '" + surname + "' saved.");

	confirm("Click OK to autocorrect data.");
	alert("Your full name is: " + tC(firstname) + " " + tC(surname));

document.writeln( "First name: " + firstname + "<br/>");
document.writeln( "Surname: " + surname + "<br/><br/>");

document.writeln("<p><font color= #ff0011> Correcting data ... </font></p>");
document.writeln("Full name: " + tC(firstname) + " " + tC(surname) + "<br/>");

document.writeln("<p><font color='lightskyblue'> Saving to database ... Done </font></p>" );

