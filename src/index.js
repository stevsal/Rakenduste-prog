const homepage = require("./homepage.js");
const item = require('./item.js');

console.log("i am index file");


window.addEventListener("load",() =>{
  homepage.setup();
  item.setup()
});
