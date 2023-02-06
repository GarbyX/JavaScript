alert("JavaScript Program \nDiminishing asterisks ");
document.writeln("<h2> Law of diminishing returns. </h2>");

  for (var i = 95; i >= 0; i-=5)
   {
      for (x = 0; x < 6 - i; x++) {}
         for (x = 6 - i; x <= 5; x++)
      document.write("*");
      document.write("</br>");
  }
