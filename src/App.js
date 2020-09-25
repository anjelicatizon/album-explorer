import React from "react";
import axios from "axios";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import "./App.css";

class App extends React.Component {
  // Constructor - set initial state
  constructor() {
    super();
    this.state = {
      albums: []
    };
  };

  // USING COMPONENT DID MOUNT TO TEST API CALL BUT IT DOES NOT GO IN DID MOUNT FOR THE FINAL VERSION CUZ THERE WILL BE NO ALBUMS APPEARING ON LOAD
  componentDidMount(){
    // API Call
    axios({
      method: "GET",
      url: "https://itunes.apple.com/search",
      dataResponse: "JSON",
      params: {
        term: "Fall Out Boy",
        country: "CA",
        media: "music",
        entity: "album"
      }
    }).then((res) => {
        // albums is the array of the results returned from API
        const albumsReturned = res.data.results
        console.log(albumsReturned)

        this.setState({
          albums: albumsReturned
        })
      });
    }
  

  render() {
    return (
      <div className="App">
        {/* HEADER */}
        <Header />

        {/* FORM */}
        <section>
          <div className="wrapper">
            <form>
              <label htmlFor="search-bar">Type in an artist to discover their entire discography</label>
              <input type="text" className="search-bar" placeholder="Type in an artist"/>
              <input type="submit" className="submit" value="Go"/>
            </form>
          </div>
        </section>

        {/* Telling render method that once you get info on the albums, map through them and display them in an li*/}
        {/* REFECTOR THIS LATER WITH PROPS */}
          {this.state.albums.map((album) => {
            console.log(album)

            const artistName = album.artistName
            const albumArt = album.artworkUrl100
            const albumName = album.collectionName
            const explicitAlert = album.collectionExplicitness
            const releaseDate = album.releaseDate
            const id = album.collectionId

            return (
                <ul key={id}>
                  <li>
                    <img src={albumArt} alt="FILL IN LATER"/>
                    <h3>{albumName}</h3>
                    <p>{explicitAlert}</p>
                    <p>Released: {releaseDate}</p>
                  </li>
                </ul>
            )
          })};
        
        {/* FOOTER */}
        <Footer />
      </div>
    );
  };
};

export default App;
