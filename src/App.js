import React from "react";
import axios from "axios";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
// Font Awesome - CAN MAKE A COMPONENT LATER
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
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
          term: this.state.userInput,
          country: "CA",
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
  
  //Tracks Sort button - Descending
  handleSortDesc = () => {
    const sortedDescList = this.state.albums.sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate))

    console.log(sortedDescList)

    this.setState({
      albums: sortedDescList
    })
  };

  //Tracks Sort button - Ascending
  handleSortAsc = () => {
    const sortedAscList = this.state.albums.sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate))

    this.setState({
      albums: sortedAscList
    })
  };

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

            {/* Sort Descending Button */}
            <button className="sort" onClick={this.handleSortDesc}>Sort (newest to oldest) <FontAwesomeIcon icon={faSortDown} /></button>

            {/* Sort Ascending Button */}
            <button className="sort" onClick={this.handleSortAsc}>Sort (oldest to newest) <FontAwesomeIcon icon={faSortUp} /></button>

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
                  <div className="albumContainer">
                    <img src={albumArt} alt="Album artwork"/>
                    <h3>{albumName}</h3>
                    <p>{explicitAlert}</p>
                    <p>Released: {releaseDate.slice(0,10)}</p>
                  </div>
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
