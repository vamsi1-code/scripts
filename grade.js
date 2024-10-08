function myFunction(marks) {
	if (marks < 60) {
		console.log("you are graded with F");
	} else if (marks < 70) {
		console.log("you are graded with D");
	} else if (marks < 80) {
		console.log("you are graded with C");
	} else if (marks < 90) {
		console.log("you are graded with B");
	} else if (marks < 100) {
		console.log("you are graded with A");
	}
}
let data = [
	["david", 80],
	["Vinoth", 77],
	["Divya", 88],
	["Ishitha", 95],
	["Thomas", 68],
];
let x = data.length;
let i;
let avg;
let averagemarks =0;



























for (i = 0; i < x; i++) {
	averagemarks += data[i][1];
	console.log(averagemarks);
	avg = averagemarks / x;
	console.log(avg);
	console.log(`${data[i]} average is ${avg} with your score${data[i]} and ${myFunction(avg)}`);
	// console.log(`grade is ${myFunction(data[i][1])}`);

}
