var Node = require('./node');

var LinkedList = function(node){
  this.head = node;
  this.tail = node;
};

LinkedList.prototype.insertHead = function(data){
  var node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  return this;
};

LinkedList.prototype.insertTail = function(data){
  var node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    var temp = this.head;
    while ( temp.next ){
      temp.next.prev = temp;
      temp = temp.next;
    }
    temp.next = node;
    this.tail = node;
    temp.next.prev = temp;
  }
  return this;
};

module.exports = LinkedList;