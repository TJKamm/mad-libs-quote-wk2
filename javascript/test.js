//var first_name = "taylor"; 
//two forward slashes mean a single line comment
//var last_name = "kamm";

/*     BLOCK COMMENT       */

//var greeting = "Hello!";

//var first_name = "Taylor";

//var last_name = "Kamm";

//var message1 = "Dont forget to pick up these items";

//var message2 = "Also, make sure to gather wood";

//var favoriteQuote = "\"But why's the rum gone?\""

//Use single quotes if you have a lot of illegal characters
//var my_image = '<img src="images/water.png" /> ';

//var goodbye = "See you later";

//BAD variable names (errors)
//var first name
//var 2first
//var time or var date
// var random or number or string

//operators
//"=" assigns values
//"+=" (concatenation assignment operator - for STRINGS) adds to //whatever variable currently has

//output variables to the console

/* console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye); */

//console.log(greeting + " " + first_name + " " + last_name + " " +  message1 + " " + message2 + " " + favoriteQuote + " " + goodbye);

/* My quote: ""Four fifths of all our troubles in this life would disappear if we would only sit down and keep still." Calvin Coolidge */

var static_words1 = " of all our ";
var static_words2 = " in this life would ";
var static_words3 = " if we would only ";
var static_words4 = " and ";

var button = document.getElementById("submit");

function onClick(evt)
{
  evt.preventDefault(evt);  
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(element1 + static_words1 + element2 + static_words2 + element3 + static_words3 + element4 + static_words4 + element5);
}

button.addEventListener("click", onClick, false);
