//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (letters) => {
  const convert = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
  
  const regEx = /G|C|T|A/g;

  const trans = letters.replace(regEx, char => convert[char]);
  
  return trans;
};