import {directions, directionsAngle, rotators} from "../utils/constants.js";
import Position from "./Position.js";

class Mower extends Position {
    angle;
    direction;
    instructions = [];

    constructor({x, y, direction, instructions}) {
        super({x, y});
        this.angle = directionsAngle[direction];
        this.direction = directions[this.angle];
        this.instructions = instructions.split("");
    }

    move(limit) {
        switch (this.direction) {
            case directions[0]:
                if (this.y + 1 <= limit.y)
                    this.y += 1;
                return {x: this.x, y: this.y};
            case directions[90]:
                if (this.x + 1 <= limit.x)
                    this.x += 1;
                return {x: this.x, y: this.y};
            case directions[180]:
                if (this.y - 1 > 0)
                    this.y -= 1;
                return {x: this.x, y: this.y};
            case directions[270]:
                if (this.x - 1 > 0)
                    this.x -= 1;
                return {x: this.x, y: this.y};
            default:
                break;
        }
    }

    rotate(angle) {
        this.angle + angle < 0 || this.angle + angle > 270 ? this.angle = angle > 0 ? 0 : 270 : this.angle += angle;
        this.direction = directions[this.angle];
    }

    executeInstructions(limit) {
        this.instructions.forEach((instruction) => {
            switch (true) {
                case instruction === "F":
                    this.move(limit);
                    break;
                case instruction === "L" || instruction === "R":
                    this.rotate(rotators[instruction]);
                    break;
                default:
                    break;
            }
        })
        return {x: this.x, y: this.y, direction: this.direction};
    }
}

export default Mower;