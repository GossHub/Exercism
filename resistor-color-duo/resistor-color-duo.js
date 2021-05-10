//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
  let colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  let resVal = ''
  resVal += colors.indexOf(color1);
  resVal += colors.indexOf(color2);
  return parseInt(resVal);
};