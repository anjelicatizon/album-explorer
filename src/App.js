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
      albums: [],
      userInput: ''
    };
  };

  // // USING COMPONENT DID MOUNT TO TEST API CALL BUT IT DOES NOT GO IN DID MOUNT FOR THE FINAL VERSION CUZ THERE WILL BE NO ALBUMS APPEARING ON LOAD
  // componentDidMount(){
  //   // API Call
  //   // axios({
  //   //   method: "GET",
  //   //   url: "https://itunes.apple.com/search",
  //   //   dataResponse: "JSON",
  //   //   params: {
  //   //     term: 'Fall Out Boy',
  //   //     // term: this.state.userInput,
  //   //     country: "CA",
  //   //     media: "music",
  //   //     entity: "album"
  //   //   }
  //   // }).then((res) => {
  //   //     // albums is the array of the results returned from API
  //   //     const albumsReturned = res.data.results
  //   //     console.log(albumsReturned)

  //   //     this.setState({
  //   //       albums: albumsReturned
  //   //     });
  //   //   });
  // }
  
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

    axios({
      method: "GET",
      url: "https://itunes.apple.com/search",
      dataResponse: "JSON",
      params: {
        // term: 'Fall Out Boy',
        term: this.state.userInput,
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
        });
      });

    // reset input field
    this.setState({
      userInput: ''
    })
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
              <input type="text" id="newAlbum" className="search-bar" onChange={this.handleChange} value={this.state.userInput}/>
              <input type="submit" className="submit" value="Go" onClick={this.handleClick}/>
            </form>
          </div>
        </section>

        {/* RESULTS/ALBUM SECTION */}
        {/* Telling render method that once you get info on the albums, map through them and display them in an li*/}
        {/* REFECTOR THIS LATER WITH PROPS & A COMPONENT */}
          {this.state.albums.map((album) => {
            console.log(album)

            const artistName = album.artistName
            const albumArt = album.artworkUrl100
            const albumName = album.collectionName
            const explicitAlert = album.collectionExplicitness
            const releaseDate = album.releaseDate
            const id = album.collectionId

            return (
              <section className="wrapper">
                <ul key={id}>
                  <li>
                    <img src={albumArt} alt="FILL IN LATER"/>
                    <h3>{albumName}</h3>
                    <p>{explicitAlert}</p>
                    <p>Released: {releaseDate.slice(0,10)}</p>
                  </li>
                </ul>
              </section>
            )
          })};
        
        {/* FOOTER */}
        <Footer />
      </div>
    );
  };
};

export default App;
