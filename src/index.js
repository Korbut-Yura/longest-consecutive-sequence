module.exports = function longestConsecutiveLength(array) {
    let count = 1,
      countMax = count;
  if (array.length == 0) {
    return 0;
  }
  else {
    array.sort(function (a,b) {
      return a-b;
    })
    
    for (let i = 1; i < array.length; i++) {
       if (array[i-1] == array[i]-1) {
         count++;
       }
       else if (array[i-1] == array[i]) {
        continue;   
        }
        else {
            if (count > countMax) {
           countMax = count;
         }
         count = 1;
       }
    }
    return countMax;
  }
}
