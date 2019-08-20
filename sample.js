function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function add(data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
  } else {
    // traverse through LinkedList
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

const ll = new LinkedList();

ll.add(10);
