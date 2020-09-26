console.log("INFO: Inside the test date module");

module.exports.test = test;
exports.test1 = test1;
exports.test2 = function (){
  console.log("INFO: Inside the test2 Function");
}
exports.test3 = () => {
  console.log("INFO: Inside the test3 function");
}

function test() {
  console.log("INFO: Inside the test Function");
}

function test1() {
  console.log("INFO: Inside the test1 Function");
}

var test4 = function() {
  console.log("INFO: Inside the test4 Function");
}
module.exports.test4 = test4;

var test5 = function test5() {
  console.log("INFO: Inside the test5 Function");
}
exports.test5 = test5;
