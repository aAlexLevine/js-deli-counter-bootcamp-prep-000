var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` ;
}

function nowServing(katzDeliLine, name) {
  if (katzDeliLine.length === 0)
return "There is nobody waiting to be served!"
  else   var array = katzDeliLine.shift(name);
return `Currently serving ${array}.`
}

/*function currentLine(lineRightNow, katzDeliLine) {
var lineRightNow = []
if (katzDeliLine.length === 0)
  return "The line is currently empty."
for (let i =0; i < katzDeliLine.length; i++ ) {
   lineRightNow.push(katzDeliLine)
return lineRightNow
}
}
*/

var line = [];

function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
     return "The line is currently empty.";
   } else
  return(`The line is currently:` + line);
}
