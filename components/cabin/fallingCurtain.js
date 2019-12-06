import React from "react";
import { Easing } from "react-native";
import { asset, Animated, View, VrButton } from "react-360";
import { connect } from "react-redux";
import { updateCompleted } from "../../store/buttons";
import Entity from "Entity";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class FallingCurtain extends React.Component {
  state = {
    //starting value/initial value for y
    yPosition: new Animated.Value(1),
    textureObj: "curtain-obj/curtain.obj",
    textureMtl: "curtain-obj/curtain.mtl",
    showEscape: false
  };
  startFalling = () => {
    const ifGameFinished = this.props.allTasksCompleted.allCompleted;
    //picture falls only when all Tasks are completed
    if (ifGameFinished) {
      Animated.timing(this.state.yPosition, {
        toValue: -750,
        duration: 500,
        delay: 100,
        easing: Easing.quad
      }).start(() => {
        this.props.handleClickEscapeKey();
      });
    }
  };

  render() {
    const yPosition = this.state.yPosition;
    return (
      <View>
        <VrButton onClick={() => this.startFalling()}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
              mtl: asset(this.state.textureMtl)
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-700, -450, 200] },
                { translateY: yPosition },
                { rotateY: 126 },
                { rotateX: 0 },
                { scaleX: 440 },
                { scaleY: 500 },
                { scaleZ: 440 }
              ]
            }}
          />
        </VrButton>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    allTasksCompleted: state.buttons
  };
};

const mapDisaptchToProps = () => {
  return {
    updatedCompleted: () => dispatch(updateCompleted())
  };
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(FallingCurtain);
