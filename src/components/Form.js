import React from "react";

const Form = (props) => {

    const { handleClick, handleChange, userValue } = props;

    return(
        <section>
            <div className="wrapper">
                <form action="submit">
                    <label htmlFor="searchBar">Type in an artist to discover their entire discography</label>

                    <input
                    type="text"
                    onChange={handleChange}
                    value={userValue}
                    placeholder="search for an artist"/>

                    <input
                    type="submit"
                    onClick={handleClick}
                    value="search"
                    />
                </form>
            </div>
        </section>
    );
};

export default Form;