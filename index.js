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

function currentLine(katzDeliLine, LineRightNow) {
var LineRightNow = []
if (katzDeliLine.length === 0)
  return "The line is currently empty."
for (let i =0; i < katzDeliLine.length; i++ ) {
   LineRightNow.push([i+1]. + katzDeliLine[i]);
return LineRightNow
}
}
