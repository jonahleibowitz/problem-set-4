/*
 * Hello. 2 points.
 */

function hello() {
  var p=document.getElementById("output1");
  p.innerHTML=("Hello, AP Computer Science Principles!");
  // WRITE YOUR EXERCISE 1 CODE HERE

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY
  name= prompt("Enter your name : ", "your name here");
  var p=document.getElementById("output2");
  p.innerHTML=("Hello, " + name + "!");
  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFYw
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  var fahr = ((cels * 9/5) + 32).toFixed(2);
  p= document.getElementById("output3");
  p.innerHTML = cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.";
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  var cels = ((fahr - 32) * 5/9).toFixed(2);
  p= document.getElementById("output4");
  p.innerHTML = fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.";
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let numberMiles = (inches - inches % 63360)/(63360);
  let numberYards = (inches - (numberMiles * 63360) - inches % 36)/(36);
  let numberFeet = ((inches - (numberMiles * 63360) - (numberYards * 36) - (inches % 12))/(12));
  inches = ((inches - (numberMiles * 63360) - (numberYards * 36) - (numberFeet * 12) - (inches % 1))/(1));

  p= document.getElementById("output5");
  p.innerHTML = `Miles: ${numberMiles}<br>Yards: ${numberYards}<br>Feet: ${numberFeet}<br>Inches: ${inches}`;
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let numberKilometers = (centimeters - centimeters % 100000)/(100000);
  let numberMeters = (centimeters - numberKilometers * 100000 - centimeters % 100)/(100);
  let numberCentimeters = ((centimeters - (numberKilometers * 100000) - (numberMeters * 100) - (centimeters % 1))/(1));

  p= document.getElementById("output6");
  p.innerHTML = `Kilometers: ${numberKilometers}<br>Meters: ${numberMeters}<br>Centimeters: ${numberCentimeters}`;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let numberGallons =Math.floor(fluidOunces/128);
  let numberQuarts = Math.floor((fluidOunces - numberGallons*128)/32);
  let numberPints = Math.floor((fluidOunces - (numberGallons*128) - (numberQuarts*32))/16);
  let numberCups = Math.floor((fluidOunces - (numberGallons*128) - (numberQuarts*32) - (numberPints*16))/8);
fluidOunces = Math.floor(fluidOunces-(numberGallons*128)-(numberQuarts*32)-(numberPints*16)-(numberCups*8));

  p= document.getElementById("output7");
  p.innerHTML = `Gallons: ${numberGallons}<br>Quarts: ${numberQuarts}<br>Pints: ${numberPints}<br>Cups: ${numberCups}<br>Fluid Ounces: ${fluidOunces}`;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let numberTons =Math.floor(ounces/32000);
  let numberPounds = Math.floor((ounces - numberTons*32000)/16);
  ounces = Math.floor((ounces - (numberTons*32000) - (numberPounds*16)));

  p= document.getElementById("output8");
  p.innerHTML = `Tons: ${numberTons}<br>Pounds: ${numberPounds}<br>Ounces: ${ounces}`;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let numberDollars =Math.floor(pennies/100);
  let numberQuarters = Math.floor((pennies - numberDollars*100)/25);
  let numberDimes = Math.floor((pennies - (numberDollars*100) - (numberQuarters*25))/10);
  let numberNickels = Math.floor((pennies - (numberDollars*100) - (numberQuarters*25) - (numberDimes*10))/5);
pennies = Math.floor(pennies-(numberDollars*100)-(numberQuarters*25)-(numberDimes*10)-(numberNickels*5));

  p= document.getElementById("output9");
  p.innerHTML = `Dollars: ${numberDollars}<br>Quarters: ${numberQuarters}<br>Dimes: ${numberDimes}<br>Nickels: ${numberNickels}<br>Pennies: ${pennies}`;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  amount = (amount * 100);
  let quarters = Math.floor(amount/2500);
  let dimes = Math.floor((amount - (quarters*25))/10);
  let nickels = Math.floor((amount - (quarters*25) - (dimes*10))/5);
  let pennies = Math.floor((amount - (quarters*25) - (dimes*10) - (nickels*5))/1);
  let coins = quarters + dimes + nickels + pennies;
  if (coins = 1) {
    let coinResult ="coin";
  } else {
    let coinResult ="coins";
    }
  
  
  p= document.getElementById("output10");
  p.innerHTML = coins+ " coinResult.";
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
