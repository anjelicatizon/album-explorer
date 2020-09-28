import React from "react";
import axios from "axios";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
// Font Awesome - CAN MAKE A COMPONENT LATER
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
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
  };

  // Action when user clicks submit on form
  handleClick = (event) => {
    event.preventDefault();

    // axios({
    //   method: "GET",
    //   url: "https://itunes.apple.com/search",
    //   dataResponse: "JSON",
    //   params: {
    //     // term: 'Fall Out Boy',
    //     term: this.state.userInput,
    //     country: "CA",
    //     media: "music",
    //     entity: "album"
    //   }
    // }).then((res) => {
    //     // albums is the array of the results returned from API
    //     const albumsReturned = res.data.results
    //     console.log(albumsReturned)
        
    //     // Error handling if no results are returned
    //     albumsReturned.length !== 0 ? this.setState({
    //       albums: albumsReturned
    //     }) : alert("Sorry! We couldn't find an artist with that name. Please try another artist!");
    //   });
    axios({
      url: 'https://proxy.hackeryou.com',
      responseType:'json',
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      params: {
        reqUrl: 'https://itunes.apple.com/search',
        params: {
          term: this.state.userInput,
          country: 'CA',
          media: "music",
          entity: "album"
        }, 
        xmlToJSON: false
      }
      }).then((res) => {
        const albumsReturned = res.data.results
        console.log(albumsReturned)
        
        // Error handling if no results are returned
        albumsReturned.length !== 0 ? this.setState({
          albums: albumsReturned
        }) : alert("Sorry! We couldn't find an artist with that name. Please try another artist!");
      });

    // reset input field
    this.setState({
      userInput: ''
    })
  }

  //Tracks Sort button
  handleSort = (event) => {
    console.log(event)

    // this.setState({
    //   albums: albumsReturned
    // })
    // // const sortedResults = [...album].sort()
  }

  render() {
    return (
      <div className="App">
        {/* HEADER */}
        <Header />

        {/* FORM */}
        <section>
          <div className="wrapper">
            <form action="submit">
              <label htmlFor="search-bar">Type in an artist to discover their entire discography</label>
              <input type="text" id="newAlbum" className="search-bar" onChange={this.handleChange} value={this.state.userInput} placeholder="type in an artist"/>
              <input type="submit" className="submit" value="Go" onClick={this.handleClick}/>
            </form>
          </div>
        </section>

        {/* RESULTS/ALBUM SECTION */}
        {/* Telling render method that once you get info on the albums, map through them and display them in an li*/}
        <section>
          <div className="wrapper">

            {/* Sort Button */}
            <button className="sort" onClick={this.handleSort}>Sort <FontAwesomeIcon icon={faSort} /></button>

            <ul>
            {this.state.albums.map((album) => {
              // console.log(album)

              // Variables for specific pieces of info from the API
              const artistName = album.artistName
              const albumArt = album.artworkUrl100
              const albumName = album.collectionName
              const explicitAlert = album.collectionExplicitness
              const releaseDate = album.releaseDate
              const id = album.collectionId

              return (
                <li key={id}>
                  <img src={albumArt} alt="Album artwork"/>
                  <h3>{albumName}</h3>
                  <p>{explicitAlert}</p>
                  <p>Released: {releaseDate.slice(0,10)}</p>
                </li>
              )
            })}
            </ul>
          </div>
        </section>
        
        {/* FOOTER */}
        <Footer />
      </div>
    );
  };
};

export default App;
