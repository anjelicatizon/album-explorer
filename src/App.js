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
      album: {}
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
        console.log(res.data.results)
        // albums is the array of the results returned from API
        const albums = res.data.results
      });
  };
  

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
        

        {/* FOOTER */}
        <Footer />
      </div>
    );
  };
};

export default App;
