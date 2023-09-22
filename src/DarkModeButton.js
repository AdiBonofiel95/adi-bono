import { useState } from "react"


function DarkModeButton(props) {
    const [buttonText, setButtonText] = useState("Activate Dark Mode");

    const onClick = () => {
        props.darkMode ? setButtonText("Activate Dark Mode") : setButtonText("Activate Light Mode");

        props.setDarkMode(!props.darkMode);
    }

    return (
        <button onClick={onClick}>{buttonText}</button>
    )

}

export default DarkModeButton;