// *** FOR LOOPS *** ///

console.log( 1 > 2 )

// What is a for loop? What syntax does it use?
// starting,  ending, incrementor

// declare i
for(var i = 0; i < 10; i++) {
  // i < 10
  console.log(i)
  //i++
}

// How many different ways can we loop?

for(var i = 100; i > 20; i--) {
  console.log(i)
}

// Can we go backwards?

// How can we use a for loop with an array?

var bestPeople = ['Bob Ross', "Mr. Roggers", "Steve Erwin", "The Rock"]

// console.log(4 <= 4)

for(var i = 0; i <= bestPeople.length; i++) {
  console.log(bestPeople[i])
}

// Can we go backwards through an array?

for(var x = bestPeople.length - 1; x >= 0; x--) {
  console.log(x)
  console.log(bestPeople[x])
}

var nums = [1,2,3,4,5,6,7];

for(let i = 0; i < nums.length; i++) {
  nums[i] = nums[i] * 2;
  //nums[i] = [1,2,3,4,5,6,7][i] * 2;
  //nums[i] = [1,2,3,4,5,6,7][0] * 2;
  //nums[i] = 1 * 2;
  //nums[i] = 2;
  //nums[0] = 2;
}

console.log(nums)