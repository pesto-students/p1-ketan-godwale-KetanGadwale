//Find the Town Judge

class TownGraph {
    constructor(n) {
        this.trustMatrix = new Array(n);
        for (let i = 0; i < n; i++) {
            this.trustMatrix[i] = [];
        }
    }

    addTrust(v, w) {
        this.trustMatrix[v - 1].push(w - 1);
    }

    printTrustMatrix() {
        console.log(this.trustMatrix);
    }

    findTownJudge() {
        let checkList = [];
        let n = this.trustMatrix.length;
        for (let i = 0; i < n; i++) {
            if (this.trustMatrix[i].length == 0) {
                checkList.push(i);
            }
        }
        if (checkList.length > 0) {
            while (checkList.length != 0) {
                let contender = checkList.shift();
                if (this.whetherAllTrust(contender + 1)) {
                    return contender + 1;
                }
            }
        } else return -1;
    }

    whetherAllTrust(j) {
        for (let i = 0; i < this.trustMatrix.length; i++) {
            if ((i = j - 1)) continue;
            if (i.includes(j)) {
                return false;
            }
        }
        return true;
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
