
        var iceCreams = ["Strawberry", "Vanilla", "Chocolate", "Mango"];
        document.getElementById("demo1").innerHTML = iceCreams;

        iceCreams.push("Apple");
        document.getElementById("demo2").innerHTML = iceCreams;
        document.getElementById("demo3").innerHTML = iceCreams.length;
        document.getElementById("demo4").innerHTML = iceCreams[1];

        iceCreams.sort();
        document.getElementById("demo5").innerHTML = iceCreams;

        iceCreams.reverse();
        document.getElementById("demo6").innerHTML = iceCreams;
   
