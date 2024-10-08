let rows = 5;
k = 1;
for (i = 1; i <= rows; i++) {
	res = "";
	for (j = 1; j <= i; j++) {
		k++;
		if (i % 2 == 0) {
			res = k + " " + res;
		} else {
			res = res + k + " ";
		}
	}
	console.log(res);
}
