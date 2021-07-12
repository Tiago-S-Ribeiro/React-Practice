import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeHandler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello!</h2>
            {!changedText && <Output>Nice to lay eyes on you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeHandler}>change text</button>
        </div>
    );
}

export default Greeting;