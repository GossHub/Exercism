//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  
  let a = "abcdefghijklmnopqrstuvwxyz";
  let l = input.toLowerCase();
  
  for(let i = 0; i < a.length; i++){
    if(l.indexOf(a[i]) === -1){
      return false;
    }
  }
  return true;
  
  
  //Second
  //let r = /(?:(?=(.*?([a-z]))(?!.*\2))\1){26}/i
  //return r.test(input);

};