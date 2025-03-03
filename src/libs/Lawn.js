import Mower from "./Mower.js";
import Position from "./Position.js";

class Lawn {
    mowers = [];
    topRightCorner;

    constructor({topRightCorner, mowers}) {
        this.topRightCorner = new Position(topRightCorner);
        mowers.forEach((mower) => {
            this.mowers.push(new Mower(mower));
        })
    }

    startMowing() {
        const endPositions = [];
        this.mowers.forEach((mower) => {
            endPositions.push(mower.executeInstructions(this.topRightCorner));
        })
        return endPositions;
    }
}

export default Lawn;