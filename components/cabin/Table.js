import React from "react";
import { asset, Animated, View, VrButton } from "react-360";
import Entity from "Entity";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Table extends React.Component {
  render() {
    return (
      <View>
        <VrButton>
          <AnimatedEntity
            source={{
              obj: asset("wooden-coffe-table-obj/wooden-coffe-table.obj"),
              mtl: asset("wooden-coffe-table-obj/wooden-coffe-table.mtl")
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-500, -700, -300] },
                { scaleX: 200 },
                { scaleY: 200 },
                { scaleZ: 200 }
              ]
            }}
          />
        </VrButton>
      </View>
    );
  }
}

export default Table;
