//Find if Path Exists in Graph

class Graph {
    constructor(n) {
        this.adjMatrix = new Array(n);
        for (let i = 0; i < n; i++) {
            this.adjMatrix[i] = [];
        }
    }

    addEdge(v, w) {
        this.adjMatrix[v].push(w);
    }

    printAdjMatrix() {
        console.log(this.adjMatrix);
    }
}

const graph = new Graph(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);

console.log(graph);

const graph2 = new Graph(6);
const edges = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
];

for (let edge of edges) {
    graph2.addEdge(edge[0], edge[1]);
}

console.log(graph2);
