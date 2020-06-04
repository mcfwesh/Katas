//CHALLENGE
/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

//SOLUTION
function humanReadable(seconds) {
  let hours = seconds / 3600;
  let minutes = (hours % 1) * 60;
  let secs = (minutes % 1) * 60;
  let arrayOfTime = [hours, minutes, secs]
    .map((val, i) => {
      return i != 2
        ? ("0" + Math.floor(val).toString()).slice(-2)
        : ("0" + Math.round(val).toString()).slice(-2);
    })
    .join(":");
  return arrayOfTime;
}
