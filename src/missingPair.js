// Finds the value which does not have
// a pair in the array. It modifies the
// original array. Returns the value and
// position of the element. 

const missingPair = (arr) => {
   let count = {};
   arr.forEach((x, index) => {
     if (count.x) {
       delete count.x;
     } else {
       count.x = index;
     }
   });
   let key = Object.keys(count)[0];
   return [key, count.key];
}

module.exports = {
  missingPair
};
