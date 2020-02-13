
function fibaroo() {
  const fibs = [];
  let prev = 0;
  let next = 1;
  let total = 0;

  // eslint-disable-next-line no-undef
  for (i = 0; i < 50; i++) {
    total += prev;
    prev = next;
    next = total;
    fibs.push(total);
  }
  return fibs;
}
console.log(fibaroo());

// eslint-disable-next-line no-unused-vars
function numsToStrings(num) {
  // eslint-disable-next-line no-shadow
  return _.map(fibaroo(), (num) => `${num}`);
}
console.log(numsToStrings(fibaroo()));

function numEvenNums() {
  return _.filter(fibaroo(), function (num) { return num % 2 === 0; }).length;
}
console.log(numEvenNums(fibaroo()));
