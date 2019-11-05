import React, { Component } from "react";
import styled from "styled-components";

const Tile2Container = styled.div`
  box-sizing: border-box;
  width: 98%;
  overflow: hidden;
  position: relative;
  margin: 1%;
  animation-play-state: paused;
  border: 5px solid black;
  background: #fcfbfb;
  cursor: pointer;

  img {
    display: block;
  }

  .scene {
    position: relative;
    width: 100%;
    transform: translate(-90%, 0%);
  }

  &.animated {
    .scene {
      animation: 1s tile2-move-cover forwards;
    }
  }

  @keyframes tile2-move-cover {
    0% {
      transform: translate(-90%, 0%) scale(1.3);
    }
    100% {
      transform: translate(0%, 0%) scale(1);
    }
  }
`;

const scene = <img src="images/tile-2/scene.svg" className="scene" />;

export default class Tile2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "",
      animation: props.animation
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state.animation) {
      this.setState(prevState => {
        prevState.animation = nextProps;
        prevState.playState = "";
        return prevState;
      });
    }
  }

  launchAnimation = () => {
    this.setState(prevState => {
      prevState.playState = "animated";
      return prevState;
    });
  };

  render() {
    return (
      <Tile2Container
        onClick={this.launchAnimation}
        className={this.state.playState}
      >
        {scene}
      </Tile2Container>
    );
  }
}
