import React, { Component } from "react";
import styled from "styled-components";

const Tile5Container = styled.div`
  box-sizing: border-box;
  width: 53%;
  float: right;
  margin: 1% 1% 1% 0;
  border: 5px solid black;
  position: relative;
  background: #79b06c;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  img {
    display: block;
  }

  .ground {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0%, -100%) scale(2);
  }

  .figures {
    position: relative;
    transform: translate(0%, -100%) scale(2);
  }

  &.animated {
    .figures,
    .ground {
      animation: tile-5-figures 1s forwards ease-in;
    }

    @keyframes tile-5-figures {
      0% {
        transform: translate(0%, -100%) scale(2);
      }
      100% {
        transform: translate(0%, 0%) scale(1);
      }
    }
  }

  .zap {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  &.animated {
    .zap {
      animation: tile-5-zap 1s 1s forwards ease-in;
    }
    @keyframes tile-5-zap {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const ground = <img src="images/tile-5/ground.svg" className="ground" />;

const figures = <img src="images/tile-5/figures.svg" className="figures" />;

const zap = <img src="images/tile-5/zap.svg" className="zap" />;

export default class Tile5 extends Component {
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
      <Tile5Container
        onClick={this.launchAnimation}
        className={this.state.playState}
      >
        {ground}
        {figures}
        {zap}
      </Tile5Container>
    );
  }
}
