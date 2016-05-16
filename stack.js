var heap = require('./heap');

function main (coordinates) {
  var arr = coordinates.map(function(coor){
    return heap[coor[0]][coor[1]];
  });
  return arr;
}

// mySentence = main([ ... ]);

// The printer will print each word/character starting from
// the end of the array, like a stack. For example,
// ["I", " ", "am"] will be printed as "am I"
function printer (sentenceFragments) {
  var sentence = "";
  var stackRepresentation = sentenceFragments.reduce(function (acc, frag) {
    acc.push(frag);
    return acc;
  }, []);

  for ( var i = sentenceFragments.length - 1; i > -1; i-- ) {
    console.log("Peek:",
                "'" + stackRepresentation[stackRepresentation.length-1] + "'",
                "\t", "Stack:", stackRepresentation);
    stackRepresentation.pop();
    sentence += sentenceFragments[i];
  };

  console.log("Finished:", sentence);
}

// Run the printer with your constructed "stack"
// to output a full sentence!

// printer(main([3,3]));
// printer(heap[[3,3]]);
// console.log(heap[3][3]);
console.log(main([[3,3],[0,0],[1,0],[0,0],[10,5]]));

printer(main([[3,3],[0,0],[1,0],[0,0],[7,6]]));
