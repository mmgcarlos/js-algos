// Finds the value which does not have
// a pair in the array. Returns the value and
// position of the element. 

const missingPair = (arr) => {
   let count = {};
   arr.forEach((x, index) => {
     if (count[x] !== undefined) {
       delete count[x];
     } else {
       count[x] = index;
     }
   });
   let keys = Object.keys(count);
   if (keys.length === 0) {
      return [];
   }
   let key = keys[0];
   return [parseInt(key), count[key]];
};

module.exports = {
  missingPair
};
