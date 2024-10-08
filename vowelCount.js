// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5
let str = prompt("enter a string: ");
let count=0;
str = str.toUpperCase();
for(i of str){
    if(i=="A"||i=='E'||i=='I'||i=='O'||i=='U'){
        count++
    }
}
console.log(`There are ${count} vowels in the given string `)