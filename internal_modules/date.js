console.log("************************************************************************");
console.log("\nINFO: Requiring Internal date.js module........\n");

exports.getDay = getDay;

function getDay(){
  const day = new Date();
  return new Intl.DateTimeFormat('en', { weekday: 'long' }).format(day);
}

console.log("INFO: Internal date.js module required successfully\n");
console.log("************************************************************************");
