// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {
    
    const elementCount = {};
  

    arr.forEach((element) => {
      if (elementCount[element]) {
        elementCount[element]++;
      } else {
        elementCount[element] = 1;
      }
    });
 
    let mostFrequentElement;
    let maxCount = 0;
    for (const element in elementCount) {
      if (elementCount[element] > maxCount) {
        mostFrequentElement = element;
        maxCount = elementCount[element];
      }
    }
  
    return mostFrequentElement;
  }
  
  // check output
  const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

  const result = findMostFrequentElement(inputArray);
  console.log(result); 
  