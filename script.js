function reverseArr(arr) {

  if (arr.length === 1) return arr;

  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}

console.log(reverseArr([1, 4, 6, 7]));
console.log(reverseArr([5]));


// data masukin
// check persatu