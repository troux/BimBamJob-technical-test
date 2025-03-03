import Mower from "./components/Mower/Mower.jsx";

import BimBamJobLogo from "./assets/logo_BimBamJob.avif"

import "./App.css"

function App() {
    return (
        <>
            <div>
                <a href="https://www.bimbamjob.fr/" target="_blank">
                    <img src={BimBamJobLogo} className="logo BimBamJob" alt="BimBamJob logo"/>
                </a>
            </div>
            <h1>BimBamJob Technical Test</h1>
            <h3>Please upload your instructions for you lawnmowers</h3>
            <div className="card">
                <Mower/>
            </div>
        </>
    )
}

export default App
