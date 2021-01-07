//CHALLENGE
/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 
*/

//SOLUTION
function rgb(r, g, b) {
  function toConvert(colour) {
    return `0${Math.min(255, Math.max(0, colour)).toString(16)}`
      .slice(-2)
      .toUpperCase();
  }
  return toConvert(r) + toConvert(g) + toConvert(b);
}

//ALTERNATIVE
function rgb(r, g, b) {
  let values = Object.values(arguments);
  let mappedValues = values.map((v) => {
    if (v > 255) return 255;
    if (v < 0) return 0;
    return v;
  });
  return mappedValues
    .map((v) => {
      let hex = v.toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    })
    .join("")
    .toUpperCase();
}
