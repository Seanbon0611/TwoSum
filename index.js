const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1
  while (start < end) {
    console.log(numbers[start], numbers[end])
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start+1, end+1]
    }
    if (sum > target) {
      end--
    }
    if (sum < target) {
      start++
    }
  }
}

const numbers = [1,2,3,4,4,9,56,90]
const target = 8
twoSum(numbers, target) //[4,5]