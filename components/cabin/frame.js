import React from "react";
import { asset, View } from "react-360";
import Entity from "Entity";

class Frame extends React.Component {
  state = {
    textureObj: "frame/frame.obj",
    textureMtl: "frame/frame.mtl"
  };

  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset(this.state.textureObj),
            mtl: asset(this.state.textureMtl)
          }}
          lit={true}
          style={{
            transform: [
              { translate: [750, -400, 500] },
              { rotateX: 270 },
              { rotateZ: 50 },
              { scaleX: 10.0 },
              { scaleY: 10.0 },
              { scaleZ: 10.0 }
            ]
          }}
        />
      </View>
    );
  }
}

export default Frame;
