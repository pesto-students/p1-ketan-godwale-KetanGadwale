//All Path from source to target
class Graph {
    #visited;
    constructor(n) {
        this.adjMatrix = new Array(n);
        for (let i = 0; i < n; i++) {
            this.adjMatrix[i] = [];
        }
        this.#visited = new Array(n).fill(0);
    }

    addEdge(v, w) {
        this.adjMatrix[v].push(w);
    }

    printAdjMatrix() {
        console.log(this.adjMatrix);
    }

    getPathsByDFS(source, destination) {
        let paths = [];
        let currentPath = [];
        const DFS = (source, destination) => {
            if (this.#visited[source] == 1) {
                return;
            }

            this.#visited[source] = 1;
            currentPath.push(source);

            if (source == destination) {
                paths.push([...currentPath]);
                this.#visited[source] = 0;
                currentPath.pop();
                return;
            }

            for (let i of this.adjMatrix[source]) {
                DFS(i, destination);
            }
            currentPath.pop();
            this.#visited[source] = 0;
        };

        DFS(source, destination);
        return paths;
    }
}

const graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);

graph.printAdjMatrix();
console.log(graph.getPathsByDFS(0, 3));
