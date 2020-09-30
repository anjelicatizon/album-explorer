import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Function component because all it will do is display info on the page

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="headerContainer">
                    <h1><FontAwesomeIcon icon={faRecordVinyl} /> Album Explorer</h1>

                    <div className="socialIcons">
                        <a href="https://github.com/anjelicatizon/album-explorer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/anjelicatizon/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://twitter.com/anjelicatizon"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;