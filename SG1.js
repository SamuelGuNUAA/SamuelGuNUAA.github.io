//var movie = "I am in this area!";
//var movieObj = new String("I am in this area!");
            
//alert(movie);
//alert(movieObj);
            
/*
var mystring = "0123456789abcd";

alert(mystring.slice(3,5));
alert(mystring.slice(4,-3));
alert(mystring.slice(-9,-6));
alert(mystring.substr(2,2));
*/
//var mycounter=0;
var days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";

var splitwords = days.split("a");

document.writeln(splitwords.length);

document.writeln(splitwords[0]+" GG "+"<br>");
//document.writeln(splitwords[1]+" GG ");
//document.writeln(splitwords[2]+" GG ");
//document.writeln(splitwords[3]+" GG ");
//document.writeln(splitwords[4]+" GG ");
//document.writeln(splitwords[5]+" GG ");
//document.writeln(splitwords[6]+" GG ");
//document.writeln(splitwords[7]+" GG ");
//document.writeln(splitwords[8]+" GG ");

for(var mycounter=0; mycounter<splitwords.length; mycounter++){
    document.writeln(splitwords[mycounter]+"------"+mycounter+"<br>");
//    document.writeln(mycounter);
}

function writefunction(){
    document.write("<h1>Oh my <br> God!!!</h1>");
}
