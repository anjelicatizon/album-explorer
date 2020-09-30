import React, { Component } from 'react';

// Class Component as we will have state in here

class Form extends Component {

    // Setting original state of form
    constructor(){
        super();
        this.state = {
            userInput: ''
        };
    };

    // Event Listener
    // Tracks User's input in text box
    handleChange = (event) => {
        this.setState({
        userInput: event.target.value
        });
    };

    render() {
        return(
            <section>
                <div className="wrapper">
                    <form action="submit">
                        <label htmlFor="search-bar">Type in an artist to discover their entire discography</label>

                        <input type="text" onChange={this.handleChange} value={this.state.userInput} placeholder="search for an artist"/>

                        <input type="submit" value="search" onClick={ (event) => {this.props.handleClick(event, this.state.userInput ) } }/>
                    </form>
                </div>
            </section>
        )
    }
}

export default Form;