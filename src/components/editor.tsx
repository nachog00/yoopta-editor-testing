import { useState } from "react";

export default function EditorComponent() {
    const [editorState, setEditorState] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditorState(e.target.value);
        console.log(e.target.value)
    };

    const onButtonClick = () => {
        alert(editorState);
    }

    return (
        <>
            <input type="text" value={editorState} onChange={handleInputChange} />
            <button onClick={onButtonClick}>Print</button>
            <p>{editorState}</p>
        </>
    );
}