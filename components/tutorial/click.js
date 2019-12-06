import React from "react";
import { asset, Animated, VrButton } from "react-360";

export default class Click extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VrButton>
        <Animated.Image
          style={{
            position: "absolute",
            layoutOrigin: [0.5, 0.5, 0],
            width: 30,
            height: 20,
            transform: [{ translate: [-80, 10, 800] }],
            opacity: 1
          }}
          source={asset("click.jpg")}
        />
      </VrButton>
    );
  }
}
