import React from "react";
import { asset, View, NativeModules } from "react-360";
import Entity from "Entity";

class Curtain extends React.Component {
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset("curtain-obj/curtain.obj"),
            mtl: asset("curtain-obj/curtain.mtl")
          }}
          style={{
            transform: [
              { translate: [-450, -500, -690] },
              { rotateY: 46 },
              { rotateX: 0 },
              { scaleX: 440 },
              { scaleY: 440 },
              { scaleZ: 440 }
            ]
          }}
          lit={true}
        ></Entity>
      </View>
    );
  }
}

export default Curtain;
