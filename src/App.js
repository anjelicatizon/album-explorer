import React from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Qs from 'qs'
import "./App.css";

class App extends React.Component {

  // Constructor - set initial state
  constructor() {
    super();
    this.state = {
      albums: [],
      userInput: ''
    };
  };
  
  // EVENT LISTENERS
  // Tracks User's input in text box
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  // Action when user clicks submit on form
  getResults = (event, userInput) => {
    event.preventDefault();

    // Axios call using Juno proxy server
    axios({
      url: 'https://proxy.hackeryou.com',
      responseType:'json',
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      params: {
        reqUrl: 'https://itunes.apple.com/search',
        params: {
          term: userInput,
          country: "CA",
          media: "music",
          entity: "album"
        }, 
        xmlToJSON: false
      }
      }).then((res) => {
        const albumsReturned = res.data.results

        // Images returned from the API are only 100x100 - the img URL ends with .../100x100.jpg
        // Change the URL to be .../500x500.jpg so photos are larger
        albumsReturned.map( (coverArt) => {
          const oldString = coverArt.artworkUrl100;
          // console.log(oldString)
          const newString = oldString.replace("100x100bb.jpg", "500x500bb.jpg");
          // console.log(newString)
          coverArt.artworkUrl100 = newString
        } )

        // Explicit vs not-explicit returned from API is not formatted in a render-friendly way
        // Change the value to be "Explicit"
        albumsReturned.map( (coverArt) => {
          const oldSfwString = coverArt.collectionExplicitness;
          const newSfwString = oldSfwString.replace("notExplicit", "not explicit")
          coverArt.collectionExplicitness = newSfwString
        })

        // Error handling if no results are returned
        albumsReturned.length !== 0 ? this.setState({
          albums: albumsReturned
        }) : alert("Sorry! We couldn't find an artist with that name. Please try another artist!");

        console.log(albumsReturned)

      });

      // // reset input field
      this.setState({
        userInput: ''
      })
  }

  //Tracks Sort button - Descending
  handleSortDesc = () => {

    // Creating a copy of state to not mutate it
    const updatedDescList = [...this.state.albums]

    const sortedDescList = updatedDescList.sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate))

    console.log(sortedDescList)

    this.setState({
      albums: sortedDescList
    })
  };

  //Tracks Sort button - Ascending
  handleSortAsc = () => {

    // Create a copy of state to not mutate it
    const updatedAscList = [...this.state.albums]

    const sortedAscList = updatedAscList.sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate))

    this.setState({
      albums: sortedAscList
    })
  };

  render() {
    return (
      <div className="App">
        {/* HEADER */}
        <Header />

        {/* FORM - in component */}
        <Form 
          handleClick={this.getResults}
          handleChange={this.handleChange}
        />

        {/* RESULTS/ALBUM SECTION */}
        {/* Telling render method that once you get info on the albums, map through them and display them in an li*/}
        <section>
          <div className="wrapper">

            {/* Sort Descending Button */}
            <button className="sort" onClick={this.handleSortDesc}>Sort (newest to oldest) <FontAwesomeIcon icon={faSortDown} /></button>

            {/* Sort Ascending Button */}
            <button className="sort" onClick={this.handleSortAsc}>Sort (oldest to newest) <FontAwesomeIcon icon={faSortUp} /></button>

            <ul>
            {this.state.albums.map((album) => {
              // console.log(album)
              
              // Variables for specific pieces of info from the API
              const albumArt = album.artworkUrl100
              const albumName = album.collectionName
              const explicitAlert = album.collectionExplicitness
              const releaseDate = album.releaseDate
              const id = album.collectionId
              const url = album.collectionViewUrl

              return (
                <li key={id} className="albumCard" onClick={this.handleModal}>
                  <div className="albumContainer">
                    
                    <img src={albumArt} alt="Album artwork"/>

                    <h3>{albumName}</h3>

                    {/* Changing style if SFW vs. NSFW */}
                    { explicitAlert === 'explicit' ? <p className="explicit">{explicitAlert}</p> : <p className="notExplicit">{explicitAlert}</p>}
                    <p>Release Date: {releaseDate.slice(0,10)}</p>

                    <a href={url}><FontAwesomeIcon icon={faApple} /> Listen on Apple Music</a>

                  </div>
                </li>
              )
            })}
            </ul>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  };
};

export default App;
