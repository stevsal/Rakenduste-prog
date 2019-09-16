const utils = require("./utils.js");

/**
 * Task 1
 *
 * Use case:
 *
 * Kasutaja sisestab väärtusi vormi väljadesse. Igal väljal on piirangud,
 * mis andmeid sinna võib sisestada.
 *
 * Realiseeri funktsioon, mis kontrollib numbri välja valiidsust.
 *
 * @param precision - Defineerib, kui  palju numbreid võib sisestatud väärtuses maksimaalselt olla.
 * @param scale - Defineerib, kui palju numbreid võib olla maksimaalselt pärast koma
 *
 * Vaata teste näidete jaoks.
 */
const isNumberValid = (inputString, {precision = 9, scale = 0}) => {
  //const numb = parseFloat(inputString);
  var arr = inputString.split(".");
  if (arr.length > 1) {
    //console.log(arr[1]);
    if (arr[1].length > scale) {
      return false;
    }
    if(isNaN(arr[1]) || arr[1] === "") return false;
  }

  arr = arr.join("");
  if (arr.length > precision) return false;
  return true;
};

utils.test(isNumberValid("200.345",{}), false); // scale default value is 0
utils.test(isNumberValid("200.345",{scale: 10}), true);
utils.test(isNumberValid("200.345",{precision: 3, scale: 10}), false);
utils.test(isNumberValid("200",{scale: 0}), true);
utils.test(isNumberValid("200.not",{scale: 0}), false); // not a number
utils.test(isNumberValid("0",{}), true);
utils.test(isNumberValid("10.32",{scale: 1}), false);
utils.test(isNumberValid("10.32",{scale: 3}), true);
utils.test(isNumberValid("10.",{scale: 3}), false); // not a number

/**
 * Task 2
 *
 * Realiseeri funktsioon, millel on 3 parameetrit: "a", "b", "cb".
 *
 * Esimesed kaks parameetrit on numbrid ja viimane parameeter on funktsioon, kutsume seda "callback".
 *
 * Funktsioon peab kutsuma välja callback funktsiooni, mille argumendiks on antud "a" ja "b" summa.
 *
 * Vaata teste näidete jaoks.
 *
 */
const sumCallback = (a, b, funName) => {
  var juandiig = a + b;
  juandiig = funName(juandiig);
  return juandiig;
};

/**
 * Utility function. Don't change me!
 */
function myCallback(x){
  return "hello-"+x;
}

utils.test( sumCallback(2,3, myCallback), "hello-5");
utils.test( sumCallback(0,-2, myCallback), "hello--2");

/**
 * Task 3
 *
 * Realiseeri funktsioon, mis liidab 2 numbrit kokku. Funktsioon peaks nägema välja midagi sellist.
 *
 * add(2)(3) // returns 5
 * add(0)(0) // return 0
 *
 * ehk argumendid peavad olema erinevates sulgudes.
 *
 */
const answer = new Set();

try{
  utils.test(answer.add(2)(3),5 );
  utils.test(answer.add(0)(0),0 );
}
catch(e){
  console.log("FAIL: implement task 3")
}
