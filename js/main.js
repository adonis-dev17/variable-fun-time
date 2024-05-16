//--- Easy
//create a variable and assign it a number
let num = 12;
//minus 10 from that number
num = num - 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
let captureInput = Number(document.querySelector('#danceDanceRevolution').value);
//add 25 to that number
captureInput = captureInput + 25;
//alert that number
alert(captureInput);
//--- Hard
// let 
//create a variable that holds the h1
let h1Holder = num + captureInput;
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('h1').addEventListener('click', console.log(h1Holder));