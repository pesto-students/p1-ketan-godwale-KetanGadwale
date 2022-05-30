//Find the Town Judge

class TownGraph {
    constructor(n) {
        this.trustMatrix = [];
        this.size = n;
    }

    addTrust(v, w) {
        this.trustMatrix.push([v, w]);
    }

    printTrustMatrix() {
        console.log(this.trustMatrix);
    }

    findTownJudge() {
        let n = this.size;
        let trust = new Array(n).fill(0);
        let trusted = new Array(n).fill(0);
        for (let i = 0; i < this.trustMatrix.length; i++) {
            let a = this.trustMatrix[i][0];
            let b = this.trustMatrix[i][1];
            trust[a - 1]++;
            trusted[b - 1]++;
        }
        for (let i = 0; i < n; i++) {
            if (trust[i] == 0 && trusted[i] == n - 1) {
                return i + 1;
            }
        }
        return -1;
    }
}

const firstTown = new TownGraph(2);
firstTown.addTrust(1, 2);
console.log(firstTown.findTownJudge());

const secondTown = new TownGraph(3);
secondTown.addTrust(1, 3);
secondTown.addTrust(2, 3);
console.log(secondTown.findTownJudge());

const thirdTown = new TownGraph(3);
thirdTown.addTrust(1, 3);
thirdTown.addTrust(2, 3);
thirdTown.addTrust(3, 1);
console.log(thirdTown.findTownJudge());
