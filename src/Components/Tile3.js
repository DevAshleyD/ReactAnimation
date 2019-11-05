import React, { Component } from "react";
import styled from "styled-components";

const Tile3Container = styled.div`
  width: 43.5%;
  margin: 1% 0 1% 1%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background: #83bddd;
  border: 5px solid black;
  float: left;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  img {
    display: block;
  }

  .figures {
    box-shadow: 0px 0px 30px 17px rgba(0, 0, 0, 0.28);
    box-sizing: border-box;
    width: 100%;
    transform: translate(0%, 90%);
  }

  &.animated {
    .figures {
      animation: tile2-figures 1s forwards;
    }
  }

  @keyframes tile2-figures {
    0% {
      transform: translate(0%, 90%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &.animated {
    .text {
      animation: title2-text 1s 1s forwards;
    }
    @keyframes title2-text {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const figures = <img src="images/tile-3/figures.svg" className="figures" />;

const text = <img src="images/tile-3/text.svg" className="text" />;

export default class Tile3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation
    };
  }

  triggerAnimation = () => {
    this.setState(prevState => (prevState.playState = "animated"));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  render() {
    return (
      <Tile3Container
        className={this.state.playState}
        onClick={this.triggerAnimation}
      >
        {figures}
        {text}
      </Tile3Container>
    );
  }
}
