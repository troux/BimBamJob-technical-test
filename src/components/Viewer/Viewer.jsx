import uploadLogo from "../../assets/file-upload-icon.png"

import "./Viewer.css"

const Viewer = ({setContent}) => {
    const previewFile = () => {
        const [file] = document.querySelector("input[type=file]").files;
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                setContent(reader.result);
            },
            false,
        );

        if (file) {
            reader.readAsText(file);
        }
    }

    return (
        <div>
            <label htmlFor="file" className="file-upload">
                <input type="file" onChange={previewFile}/>
                <img src={uploadLogo} alt="upload logo"/>
            </label>
        </div>
    )
}

export default Viewer;