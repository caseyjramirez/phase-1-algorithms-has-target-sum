function hasTargetSum(array, target) {
  for(let a = 0; a < array.length; a++) {
    if(array[a] < target) {
      for(let b = 0; b < array.length; b++) {
        if(a !== b && array[a] < target) {
          if(array[a] + array[b] === target) return true
        }
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  

  basicaly i need to iterate over each element in an array we can call that element A
    if that cerain elememt (A) is greater than the target than we can skip over it
  than add that current element (A), knowing its under target, to every other element (B) in the array by iterating over it again
    if elememt (B) is greater than the target than we can skip over it
    if element (B) is the current element (A) we are on skip over it.
  once we know its appropriate (both conditions met) add the two elements and compare them against the target.
    if they equal in value, return true.
  
  outisde of all of this return false



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
