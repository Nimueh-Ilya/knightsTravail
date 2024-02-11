class node {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.firstCase = [this.coordinates[0] + 2, this.coordinates[1] + 1];
    this.secondCase = [this.coordinates[0] + 2, this.coordinates[1] - 1];
    this.thirdCase = [this.coordinates[0] + 1, this.coordinates[1] + 2];
    this.fourthCase = [this.coordinates[0] + 1, this.coordinates[1] - 2];
    this.fifthCase = [this.coordinates[0] - 2, this.coordinates[1] + 1];
    this.sixthCase = [this.coordinates[0] - 2, this.coordinates[1] - 1];
    this.seventhCase = [this.coordinates[0] - 1, this.coordinates[1] + 2];
    this.eightCase = [this.coordinates[0] - 1, this.coordinates[1] - 2];
  }
}
class Tree {
  constructor(root) {
    this.root = root;
  }
  isValid(arr) {
    return arr.every((coord) => coord >= 0 && coord < 8);
  }
  cleanNode(node = this.root) {
    for (const key in node) {
      if (key.endsWith("Case")) {
        if (!this.isValid(node[key])) {
          node[key] = null;
        }
      }
    }
  }
  buildTree() {}
}
const knight = new node([0, 1]);
const newTree = new Tree(knight);
console.log(newTree);
newTree.cleanNode();
console.log(newTree);
