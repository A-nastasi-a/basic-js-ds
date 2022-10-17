const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.threeRoot = null;
    }

    root() {
        return this.threeRoot;
    }

    add(data) {
        if (!data) {
            return ":(";
        }

        this.threeRoot = addNewBranch(this.threeRoot, data);

        function addNewBranch(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addNewBranch(node.left, data);
            } else {
                node.right = addNewBranch(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        if (!data) {
            return null;
        }

        return searchNode(this.threeRoot, data);

        function searchNode(node, data) {

            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            } else if (node.data > data && node.left) {
                return searchNode(node.left, data);
            } else if (node.data < data && node.right) {
                return searchNode(node.right, data);
            } else {
                return false;
            }
        }

    }

    find(data) {
        if (!data) {
            return null;
        }

        return findNode(this.threeRoot, data);

        function findNode(node, data) {

            if (node.data === data) {
                return node;
            } else if (data < node.data && node.left) {
                return findNode(node.left, data);
            } else if (data > node.data && node.right) {
                return findNode(node.right, data);
            } else {
                return null;
            }
        }

    }

    remove(data) {
        if (!data) { return null; }

        this.threeRoot = removeBranch(this.threeRoot, data);

        function removeBranch(node, data) {
            if (!node) { return null; }

            if (node.data > data) {
                node.left = removeBranch(node.left, data);
            } else if (node.data < data) {
                node.right = removeBranch(node.right, data);
            } else {

                if (!node.left && !node.right) {
                    return null;
                } else if (!node.left) {
                    node = node.right;
                    return node;
                } else if (!node.right) {
                    node = node.left;
                    return node;
                }
                let maxLeft = node.left;
                while (maxLeft.right) {
                    maxLeft = maxLeft.right;
                }

                node.data = maxLeft.data;
                node.left = removeBranch(node.left, maxLeft.data);
                return node;


            }
        }

    }

    min() {
        if (!this.threeRoot) {
            return null;
        }

        let node = this.threeRoot;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.threeRoot) {
            return null;
        }

        let node = this.threeRoot;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};