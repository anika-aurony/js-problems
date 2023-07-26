// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallNumber(arr){
    const num = arr.sort((a,b)=> a-b);
    console.log(num) 
    const newArr = []
    
    for(let i=0; i<num.length; i++ ){
       if(!newArr.includes(num[i])){
         newArr.push(num[i])
       }  
    }
    return newArr[1];
    
}

// check output
const output = secondSmallNumber([4, 45, 5, 6, 9, 88, 3, 8,-9,0, 4, 4, 9, 4])
console.log(output)