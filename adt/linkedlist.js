var Node = require('./node');

var LinkedList = function(node){
  this.head = node;
};

LinkedList.prototype.newHead = function(data){
  var node = new Node(data);
  console.log(this.head, node);
  node.next = this.head;
  this.head = node;
};

module.exports = LinkedList;