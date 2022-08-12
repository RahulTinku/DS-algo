class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  create(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const aside = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) aside('left');
      else aside('right');
    }
  }

  // Breadth first search
  BFS() {
    let visited = [],
      queue = [],
      current = this.root;
    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  preOrder() {
    let current = this.root,
      visited = [];

    let traverse = (node) => {
      visited.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return visited;
  }

  postOrder() {
    let current = this.root,
      visited = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(current);
    return visited;
  }

  inOrder() {
    let current = this.root,
      visited = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return visited;
  }
}

const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);
console.log(tree.root);
console.log(tree.BFS());
console.log('preOrder original', tree.preOrder());
console.log('postOrder original', tree.postOrder());
console.log('Inorder original', tree.inOrder());

function preOrder(tree) {
  let visited = [],
    queue = [];
  queue.push(tree.root);

  while (queue.length) {
    const current = queue.pop();
    visited.push(current.val);
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }
  return visited;
}
console.log('preOrder ', preOrder(tree));

function postOrder(tree) {
  let visisted = [],
    queue = [],
    current = tree.root;

  queue.push(current);
  while (queue.length) {
    current = queue.pop();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    visisted.unshift(current.val);
  }
  return visisted;
}
console.log('postOrder ', postOrder(tree));

function inOrder(tree){
  let queue = [], traveled =[];
  let curr = root;
  
  while(curr || queue.length > 0){
    // travel through complete left tree and push it to queue
      while(curr){
          queue.push(curr)
          curr = curr.left;
      }
      //pop the last element and make it as curr
      curr = queue.pop()
      traveled.push(curr.val);
      // travel in right
      curr = curr.right;
  }
  return traveled
}
