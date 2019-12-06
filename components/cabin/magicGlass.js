/* eslint-disable no-loop-func */
import React from "react";
import { asset, Animated, View, VrButton } from "react-360";
import Entity from "Entity";
import { connect } from "react-redux";

let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class MagicGlass extends React.Component {
  state = {
    //showKey state is on when timer state is on
    hint: "2d_hints/turn_right.jpg",
    showHint: false,
    showKey: false,
    objAsset: ["3d_globe/magic_sphere.obj", "3d_round_chest/chest04.obj"],
    textureAsset: [
      "3d_globe/TexturesCom_MetalBare0150_1_seamless_S.jpg",
      "3d_round_chest/marble.jpg",
      "3d_round_chest/copper.jpg",
      "3d_round_chest/felt.jpg"
    ]
  };

  showKey() {
    if (this.props.additionalTask) {
      this.setState({
        showKey: true
      });
    }
  }

  showHint() {
    this.setState({
      showHint: true
    });
  }

  render() {
    return (
      <View>
        <VrButton onClick={() => this.showKey()}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.objAsset[1])
            }}
            lit={true}
            texture={asset(this.state.textureAsset[1])}
            style={{
              transform: [
                {
                  translate: [700, -630, 70]
                },
                { rotateY: -10 },
                {
                  scaleX: 30.0
                },
                {
                  scaleY: 30.0
                },
                {
                  scaleZ: 30.0
                }
              ]
            }}
          />
        </VrButton>
        {this.state.showKey ? (
          <VrButton onClick={() => this.showHint()}>
            <AnimatedEntity
              source={{
                obj: asset("3d_music_note/sixteenth_note.obj")
              }}
              lit={true}
              // texture = {asset(this.state.keyText[1])}
              style={{
                transform: [
                  {
                    translate: [200, -60, 60]
                  },
                  {
                    scaleX: 25.0
                  },
                  {
                    scaleY: 25.0
                  },
                  {
                    scaleZ: 25.0
                  }
                ],
                color: "black"
              }}
            />
          </VrButton>
        ) : null}

        {this.state.showHint ? (
          <Animated.Image
            style={{
              position: "absolute",
              layoutOrigin: [0.5, 0.5, 0],
              width: 1,
              height: 1,
              transform: [{ translateZ: -3 }, { translateX: -1 }],
              opacity: 1
            }}
            source={asset("2d_hints/sound_pattern_task.jpg")}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    additionalTask: state.tasksCompleted.additionalTask
  };
};

export default connect(
  mapStateToProps,
  null
)(MagicGlass);
