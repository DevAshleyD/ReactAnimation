import React, { Component } from "react";

import Tile1 from "./Components/Tile1";
import Tile2 from "./Components/Tile2";
import Tile3 from "./Components/Tile3";
import Tile4 from "./Components/Tile4";
import Tile5 from "./Components/Tile5";
import Button from "./Components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 1
    };
  }
  resetAnimation = () => {
    this.setState(prevState => prevState.animation++);
  };

  render() {
    return (
      <div style={{ margin: "auto", maxWidth: "550px" }}>
        <h1 style={{ textAlign: "center" }}>Click Tile to Launch Animation</h1>
        <Tile1 animation={this.state.animation} />
        <Tile2 animation={this.state.animation} />
        <Tile3 animation={this.state.animation} />
        <Tile4 animation={this.state.animation} />
        <Tile5 animation={this.state.animation} />
        <div style={{ textAlign: "center", padding: "1rem", clear: "both" }}>
          <Button onClick={this.resetAnimation}>Reset</Button>
        </div>
      </div>
    );
  }
}

export default App;
