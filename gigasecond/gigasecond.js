//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (sDate) => {
  let sTime = sDate.getTime();
	let fDate = new Date(sTime + (10**12));
	return fDate;
};
