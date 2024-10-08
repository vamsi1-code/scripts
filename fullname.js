let name1 = "vamsi";
name1=name1.split("");
let rows = name1.length;
k = 0;
for (i = 1; i <= rows; i++) {
	res = "";
	for (j = 1; j <= i; j++) {
		if (name1[k] == undefined) {
			res = res + "* ";
		} else {
			res = res + name1[k] + " ";
		}
		k++;
	}
	if (name1[k] == undefined) {
		i = rows + 1;
	}

	console.log(res);
}
