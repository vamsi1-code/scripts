// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples :

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
let arr=[]
function arrayOfMultiples(element,length){
    let multiples;
    for(i=1;i<=length;i++){
        multiples=i*element;
        arr[i-1]=multiples;
    }
}
arrayOfMultiples(12,10);
console.log(arr);
