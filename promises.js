function demo1(x) {
	setTimeout(() => {
		console.log("iam demo1");
		x();
	}, 2000);
}

function demo2(y) {
	setTimeout(() => {
		console.log("iam demo2");
		y();
	}, 500);
}
function demo3() {
	setTimeout(() => {
		console.log("iam demo3");
	}, 500);
}
demo1(() => {
	demo2(() => {
		demo3();
	});
});
