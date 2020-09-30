import React from 'react';

const Form = () => {
    return(
        <section>
            <div className="wrapper">
                <form action="submit">
                    <label htmlFor="search-bar">Type in an artist to discover their entire discography</label>

                    <input
                    type="text"
                    onChange={ (event) => {this.props.handleChange(event, this.state.userInput ) } }
                    value={(event) => {this.props.handleChange(event)}}
                    placeholder="search for an artist"/>

                    <input
                    type="submit"
                    onClick={ (event) => {this.props.handleClick(event, this.state.userInput ) } }
                    value="search"
                    />
                </form>
            </div>
        </section>
    )
}

// class Form extends Component {

//     // Setting original state of form
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         userInput: ''
//     //     };
//     // };

//     // Event Listener
//     // Tracks User's input in text box
//     // handleChange = (event) => {
//     //     this.setState({
//     //     userInput: event.target.value
//     //     });
//     // }

//     // render() {
//     //     return(
//     //         <section>
//     //             <div className="wrapper">
//     //                 <form action="submit">
//     //                     <label htmlFor="search-bar">Type in an artist to discover their entire discography</label>

//     //                     <input type="text" onChange={this.handleChange} value={this.state.userInput} placeholder="search for an artist"/>

//     //                     <input type="submit" value="search" onClick={ (event) => {this.props.handleClick(event, this.state.userInput ) } }/>
//     //                 </form>
//     //             </div>
//     //         </section>
//     //     )
//     // }
// }

export default Form;