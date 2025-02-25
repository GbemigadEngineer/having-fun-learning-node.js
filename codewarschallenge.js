// challenge 1
function digitalRoot(n) {
  let sum = n;
  do {
    //    convert the sum to an array of numbers
    let arr = sum
      .toString()
      .split("")
      .map((x) => Number(x));
    sum = arr.reduce((total, currentvalue) => total + currentvalue, 0);
  } while (sum >= 10);
  return sum;
}

console.log(digitalRoot(1516));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));

// challenge 2
function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(4, 10));
