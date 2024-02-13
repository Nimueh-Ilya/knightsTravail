class Node {
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

  isValid(coord) {
    return coord >= 0 && coord < 8;
  }

  cleanNode(node) {
    for (const key in node) {
      if (key.endsWith("Case")) {
        const coord = node[key];
        if (!coord || !this.isValid(coord[0]) || !this.isValid(coord[1])) {
          node[key] = null;
        }
      }
    }
  }

  buildTree(finalCoords) {
    if (!this.root) return [];

    const queue = [{ node: this.root, path: [this.root.coordinates] }];

    while (queue.length > 0) {
      const { node, path } = queue.shift();

      this.cleanNode(node);

      for (const key in node) {
        if (key.endsWith("Case")) {
          const coord = node[key];
          if (
            coord &&
            coord[0] === finalCoords[0] &&
            coord[1] === finalCoords[1]
          ) {
            return [...path, coord];
          }
        }
      }

      for (const key in node) {
        if (key.endsWith("Case") && node[key]) {
          const childNode = new Node(node[key]);
          const childPath = [...path, node[key]];
          queue.push({ node: childNode, path: childPath });
        }
      }
    }

    return [];
  }
}

const initialCoords = [0, 0];
const finalCoords = [7, 7];
const rootNode = new Node(initialCoords);
const tree = new Tree(rootNode);
const result = tree.buildTree(finalCoords);
console.log(result);
