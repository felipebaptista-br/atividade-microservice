import React from "react";
import Logo from "../../Images/inf-white.png";

import "./style.css";

export default function Header() {
    const handleCompany = async () => {
        window.location.href = "https://github.com/felipebaptista-br/infinity-inc"
    }

    return(
        <header id="header">
            <img src={Logo} alt="Logo Infinity" onClick={() => handleCompany()} />
        </header>
    )
}
