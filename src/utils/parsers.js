const parseCoordinate = (str) => {
    let coords = str.split(""); // to reduce potential error I would add a separator in the data for each positions
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    return {x, y}
}

const parserLawn = (data) => {
    let line = data.split("\n");
    const topRightCorner = parseCoordinate(line[0]);
    const numberOfMower = (line.length - 1) / 2; // to calculate the number of mowers we remove the first for the top right corner and divide by 2 to account for the start position and instructions
    const mowers = [];
    for (let i = 1; i < numberOfMower * 2; i += 2) {
        let pos = line[i].split(" ");
        let coordinate = parseCoordinate(pos[0]);
        mowers.push({
            x: coordinate.x,
            y: coordinate.y,
            direction: pos[1],
            instructions: line[i + 1]
        });
    }
    return {topRightCorner, mowers};
}

export {parserLawn};