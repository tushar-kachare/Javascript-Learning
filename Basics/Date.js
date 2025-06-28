
let now = new Date();                   // current date and time
let fromString = new Date("2025-06-15"); // specific date
let fromMillis = new Date(1686876000000); // from timestamp (ms since Jan 1, 1970)
let custom = new Date(2025, 5, 15, 10, 30, 0); // year, month (0-based), day, hour, min, sec

let myDate = new Date()
console.log(myDate.toLocaleDateString()); // day/month/year
console.log(myDate.toString())

let newDate = new Date(2025,0,12) 
console.log(newDate.toLocaleDateString());

