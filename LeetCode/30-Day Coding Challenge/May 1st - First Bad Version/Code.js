// UNDERSTAND
/*
n = 5 (with version 4 being the first bad version)
[1, 2, 3, 4, 5]

isBadVersion(3)
// -> false
isBadVersion(5)
// -> true
isBadVersion(4)
// -> true


n = 10 (with version 4 being the first bad version)
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

isBadVersion(6)
// -> true
isBadVersion(3)
// -> false
isBadVersion(5)
// -> true
isBadVersion(4)
// -> true

*/

// PLAN
/*
Binary Search

- Initialize variable
first_bad_version = 0

- Check middle element of the array
isBadVersion(3)
// -> false

- If false, splice second half of array and look for next middle element

- If true, 
-- set first_bad_version to the true value
-- splice first half of array and look for next middle element
isBadVersions(5)
// -> true

first_bad_version = 5

isBadVersions(4)
// -> true

- If array length == 1 or element that is true is at array[0], return version
*/

// EXECUTE
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let first_bad_version = 0
      let array = []
      
      if(array.length === 0){
          for(let i = 1; i <= n; i++){
              array.push(i)
          }
      }
      let mid = array[Math.floor(array.length/2)]
      while(array.length > 1){
          console.log('MID', mid, 'IS BAD VERSION', isBadVersion(mid))
          if(isBadVersion(mid) === true && first_bad_version === 0){
              first_bad_version = mid
              array = array.slice(Math.floor(array.length/2)-1)
              console.log('ARRAY AFTER TRUE 0 SLICE', array)
          } else if(isBadVersion(mid) === false){
              array = array.slice(Math.floor(array.length/2) + 1)
              mid = array[Math.floor(array.length/2)]
              console.log('ARRAY AFTER FALSE SLICE', array)
          } else if(isBadVersion(mid) === true && first_bad_version !== 0){
              array = array.slice(Math.floor(array.length/2)-1, Math.floor(array.length/2))
              console.log('ARRAY AFTER TRUE 1 SLICE', array, Math.floor(array.length/2)-1)
              first_bad_version = mid
          } else {
              console.log('FINISHED', mid)
              return mid
          }
      }
      return array[0]
  };
};