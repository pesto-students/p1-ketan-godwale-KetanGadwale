//Find the Town Judge

class TownGraph {
    constructor(n) {
        this.trustMatrix = new Array(n);
        for (let i = 0; i < n; i++) {
            this.trustMatrix[i] = [];
        }
    }

    addTrust(v, w) {
        this.trustMatrix[v].push(w);
    }

    printTrustMatrix() {
        console.log(this.trustMatrix);
    }

    findTownJudge() {}
}
