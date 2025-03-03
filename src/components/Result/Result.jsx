import "./Result.css"

const Result = ({result, index}) => {
    return (
        <div>
            <p>The lawnmower #{index + 1} has finished mowing and is on
                ({result.x}, {result.y}) heading {result.direction}</p>
        </div>
    )
}

export default Result;