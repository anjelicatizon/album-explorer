import React from "react";
import axios from "axios";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />

        {/* Footer */}
        <Footer />
      </div>
    );
  };
};

export default App;
