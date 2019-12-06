import React from "react";
import {
  asset,
  Animated,
  View,
  VrButton,
  PointLight,
  NativeModules
} from "react-360";
import Entity from "Entity";
const { AudioModule } = NativeModules;
class Bookshelf extends React.Component {
  state = {
    xPosition: new Animated.Value(0),
    yPosition: new Animated.Value(0),
    yRotation: new Animated.Value(0),
    zPosition: new Animated.Value(-5)
  };

  handleClick = () => {
    AudioModule.playOneShot({
      source: asset("creepy.wav")
    });
  };
  render() {
    return (
      <View>
        <VrButton onClick={this.handleClick}>
          <Entity
            source={{
              obj: asset("3d_bookshelf/Old_Dusty_Bookshelf.obj"),
              mtl: asset("3d_bookshelf/Old_Dusty_Bookshelf.mtl")
            }}
            style={{
              transform: [
                { translate: [-100, -650, -730] },
                { scaleX: 3 },
                { scaleY: 3 },
                { scaleZ: 3 }
              ],
              color: "white"
            }}
            lit={true}
          ></Entity>
        </VrButton>
      </View>
    );
  }
}

export default Bookshelf;
