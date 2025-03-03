import {useState} from "react";

import {parserLawn} from "../../utils/parsers.js";
import Lawn from "../../libs/Lawn.js";
import Result from "../Result/Result.jsx";
import Viewer from "../Viewer/Viewer.jsx";

import "./Mower.css"


const Mower = () => {
    const [data, setData] = useState(null);
    const [results, setResults] = useState([]);
    const [clicked, setClicked] = useState(false);

    const onStartMowing = () => {
        setClicked(true);

        if (data) {
            const parsed = parserLawn(data);
            const lawn = new Lawn(parsed);
            setResults(lawn.startMowing());
        }
    }

    return (
        <div>
            <Viewer setContent={setData}/>
            {data ? <p>Data succefully uploaded</p> : null}
            <button onClick={onStartMowing} className="button-mowing">
                Start Mowing!
            </button>
            {!data && clicked ?
                <p className="error-no-upload">Please upload a file first</p> :
                results.map((result, i) => {
                    return <Result result={result} index={i} key={i}/>
                })}
        </div>
    )
}

export default Mower;