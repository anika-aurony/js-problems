// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function add(a, b){
    console.log(a, b)
    let arr = a;
    let num1;
    let num2;
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
       
        for(let j=a.length-1; j>0; j--){
           
            let addition = num + a[j];

            if(addition == b){
                 num1 = j;
                 num2 = i;
            }
        }
    }
    return [num1, num2]
}

// check output
const result = add([1, 3, 6, 8, 11, 15], 18);
console.log(result)