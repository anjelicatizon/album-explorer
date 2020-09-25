import React from "react";

// Function component because all it will do is display info on the page

const Header = () => {
    return(
        <header>
            <div className="wrapper">
                <h1>Album Explorer</h1>
                <p>Type in an artist to discover their entire discography</p>
            </div>
        </header>
    );
};

export default Header;