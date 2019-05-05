function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if (i === 1) {
    array.push(`I am ${i} strange loop.`)
  }
  else 
  array.push(`I am ${i} strange loops.`)
}
return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return `done`
}

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
  array = array.slice(1)   
  } while (maybeTrue() && array.length > 0 )
  return array
}





























/* function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    if (i === 1) {
      array.push(`I am one strange loop`)
    }
    else 
      array.push(`I am ${i + 1} strange loops.`)
    }
    return array 
  }
  //adds I am x strange loops to the array 25 times and returns the array

function whileLoop(n) {
  while (n > 0) {
    console.log(--n) 
  }
  return `done`
}
//starts at a number, n and removes 1 from n until n = 0 and displays each new number.  Returns done when n = 0

function doWhileLoop(array) {
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  do {
  array = array.slice(1)   
  } while (maybeTrue() && array.length > 0 )
  return array
}
//takes the array and removes the first item from it and does this until the array is empty (???)

*/
