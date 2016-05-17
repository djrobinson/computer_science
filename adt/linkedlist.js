var Node = require('./node');

var LinkedList = function(node){
  this.head = node;
};

LinkedList.prototype.newHead = function(data){
  var node = new Node(data);
  if (!this.head) {this.head = node;}
  else{
    node.next = this.head;
    this.head = node;
  }
  return this;
};

LinkedList.prototype.insertTail = function(data){
  var node = new Node(data);
  if (!this.head) {this.head = node;}
  else {
    var temp = this.head;
    while ( temp.next ){
      temp = temp.next;
    }
    temp.next = node;
  }
};

module.exports = LinkedList;