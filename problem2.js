// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function add(num){
    let add = 0;

    for(let i=0; i<num.length; i++){
        if(num[i]>0){
            add=add+num[i];
        }
    }
    return add;
}
const result = add([2, -5, 10, -3, 7])
console.log(result)