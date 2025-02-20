function foo(a, b) {
  if (a === null || b === null) {
    //throw new Error('Null values are not allowed'); //Throw error
    a = a ?? 0; // Use nullish coalescing
    b = b ?? 0; // Use nullish coalescing
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(5, 10)); // Output: 15