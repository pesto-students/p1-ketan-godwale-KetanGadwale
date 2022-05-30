//All Path from source to target

class Graph {
    constructor(n) {
        this.adjMatrix = new Array(n).fill([]);
    }

    addEdge(v, w) {
        this.adjMatrix[v].push(w);
    }

    printAdjMatrix() {
        console.log(this.adjMatrix);
    }

    findAllPaths(source, destination) {}
}

const graph = new Graph(4);

console.log(graph);
