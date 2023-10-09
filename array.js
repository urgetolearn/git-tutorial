//1
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  " Wednesday",
  "Thursday",
  " Friday",
  "Saturday",
];
console.log(weekdays);
//2
console.log(weekdays[1] + " " + weekdays[0]);
//3
weekdays[0] = "Funday";
console.log(weekdays);
//4
let deleted = delete weekdays[1];
deleted = delete weekdays[2];
console.log(deleted);
console.log(weekdays);
weekdays.forEach(function (day) {
  console.log(`Temperature on ${day} is 18 degrees`);
});
