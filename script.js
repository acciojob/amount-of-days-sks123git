//your JS code here. If required.
function daysOfYear(year) {
	let yr = parseInt(year);
	if((yr%4==0 && yr%100!==0) || yr%400==0) {
	    console.log(366)
	} else {
	    console.log(365)
	}
}