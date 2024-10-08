//   Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
// 			Input:      n=5
// 			Output:   2 4 6 8 10

// 			Explanation:  Loop start with 1 go till 5 bcoz n=5
// 					1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc 
let n=+prompt("enter number");
let res="";
let multiplies;
for(i=1;i<=n;i++){
    multiplies = 2*i;
    res =res+" "+multiplies;
}
console.log(res);