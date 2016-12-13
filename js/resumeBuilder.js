var name = "Angela Yu";
var role = "IoT Engineering Leader";

var awesomeThoughts = "I am Angela and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var myArray = ["zero", "one", "two"]

console.log(myArray.length);
console.log(awesomeThoughts);
console.log(funThoughts);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(funThoughts);