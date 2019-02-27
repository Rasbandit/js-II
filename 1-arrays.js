// *** ARRAYS *** //

// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';

//what is an array
// contain a list of items
// ordered, and accessible by numbers

    //array    //string
var toDoList = [first, second, third,2,3,4,4,5,5,6,7,78,8, "bob ross is the original gangser"];

console.log(toDoList[0])
console.log(toDoList.length)

var index = 0;
console.log(toDoList[index])
console.log(toDoList[0])
// trick to figure out the last item of an array
console.log(toDoList[toDoList.length - 1])

console.log(typeof toDoList.length)

// What is an array? What syntax does it use?

// What can we keep in an array?

var canIReallyDoThat = [false, null, undefined, 'yes', 2, {name: 'todd'}, [1,23, [[23]],], function() {return 5} ]
console.log(canIReallyDoThat)

// How can we access the items in an array?
var nestedArray = [1, [2, [3]]]

console.log(nestedArray[1][1][0])
// How can we access the end of an array?

// METHODS //

var methodsExample = [1,2,3]

// push

// adds the item to the end of the array
methodsExample.push(10)

console.log(methodsExample)

// pop

methodsExample.pop()

console.log(methodsExample)

// unshift

methodsExample.unshift(10)
console.log(methodsExample)

// shift

methodsExample.shift()
console.log(methodsExample)

// slice
                                // resolves into an array
                                // non destructive
var partialArray = methodsExample.slice(0,2)

console.log(methodsExample)
console.log(partialArray)

// splice

var partialArrayTwo = methodsExample.splice(1,1)

console.log(methodsExample)
console.log(partialArrayTwo)