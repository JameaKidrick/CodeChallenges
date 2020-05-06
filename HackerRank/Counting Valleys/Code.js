// UNDERSTAND
/*
Mountain = U...D
Valley = D...U

n = 8
s = [DDUUUUDD]
valleys = 1

n = 8
s = [UDDDUDUU]
valleys = 1

Edge Cases:
n = 8
s = [UDUDUDUD]
valleys = 0 ???

n = 8
s = [DDDUUDDU]
valleys = 2 ???
*/

// PLAN
/*
- Set count to 0, and valley to 0 (INITIAL)
count = 0
valley = 0

- Go through array and until we reach 'D'
DDUUUUDD
12345678

- If we see 'D', add one to count
count = 1

- Keep adding one to count until we reach U
count = 2

- If count is greater than 1, add one to valley and reset count; if not, continue until we find another 'D' and reset count
count = 0
valley = 1
*/

// EXECUTE
const countingValleys = (n, s) => {
  let valley = 0
  let count = 0
  steps = s.split('')
  steps.map((direction) => {
    if(direction === 'U'){
      count ++
      if(count === 0){
        valley ++
      }
    } else {
      count --
    }
  })
  return valley
}

countingValleys(8, 'UDDDUDUU');
// -> 1
countingValleys(8, 'DDUUUUDD');
// -> 1
countingValleys(100, 'DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD');
// -> 5
countingValleys(10, 'DUDDDUUDUU');
// -> 2
