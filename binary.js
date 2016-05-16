
function binaryToChar(binary){
  console.log(binary);



  binary = (""+binary).split('').reverse();
  var len = binary.length;
  var total = 0;
  for (var i = 0; i < len; i++){
    total += +binary[i] * (Math.pow(2, i));
  }
  return total;
}

console.log(binaryToChar(11));
console.log(binaryToChar(10000000));
console.log(binaryToChar(000000001));

