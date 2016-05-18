Array.prototype.linearSearch = function(val){
  var answer = this.reduce(function(prev, curr, i){
    if (curr === val) {
      prev = i;
      return prev;
    } else {
      return prev;
    }
  }, -1);
  return answer;
};

Array.prototype.binarySearch = function(val){
  var keeper = 0;
  var answer = -1;
  function recursive(arr){
    var len = arr.length;
    var start = Math.floor(len / 2);
    var current = arr[start];
    if (current === val){
      answer = start + keeper;
    } else if (current > val) {
      console.log(arr.slice(0, start));
      recursive(arr.slice(0, start));
    } else if (current < val){
      console.log(arr.slice(start, len));
      keeper += start;
      recursive(arr.slice(start, len));
    }
  }
  recursive(this);
  return answer;
};

module.exports = { Array };