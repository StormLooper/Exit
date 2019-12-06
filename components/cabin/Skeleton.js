import React from "react";
import { View, asset, VrButton, NativeModules, Animated } from "react-360";
import styles from "../styles/";
import Entity from "Entity";
import { disableAllExcept } from "../../store/buttons";
import { connect } from "react-redux";

let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Skeleton extends React.Component {
  state = {
    objAsset: ["3d_direction/directional-generic-marker.obj"],
    textureAsset: ["3d_direction/irregular_stone_wall.png"],
    renderSteps: false,
    fade: 0.0,
    isFading: true
  };
  componentDidMount() {
    this.handleClickZoom = this.handleClickZoom.bind(this);
  }
  showEscape = () => {
    setInterval(() => {
      this.setState(prev => {
        const isMaxOrMinValue = prev.fade >= 1.0 || prev.fade <= 0.0;
        const newIsFading = isMaxOrMinValue ? !prev.isFading : prev.isFading;
        const newFade = prev.fade + (newIsFading ? -2.0 : 2.0);

        return {
          fade: newFade,
          isFading: newIsFading
        };
      });
    }, 400);
  };
  handleClickZoom() {
    this.props.disableButtons("allCompleted", "skeletonButton");
    this.setState({ renderSteps: true });
    this.showEscape();
  }

  render() {
    const opacityValue = this.state.fade;
    const disableStatus = !this.props.buttons.skeletonButton;
    return (
      <View>
        <VrButton
          onClick={() => this.handleClickZoom()}
          disabled={disableStatus}
        >
          <Entity
            source={{
              obj: asset("3d_skeleton/head-skeleton.obj"),
              mtl: asset("3d_skeleton/head-skeleton.mtl")
            }}
            lit={true}
            style={styles.skeleton}
          />
        </VrButton>
        {this.state.renderSteps ? (
          <View>
            <AnimatedEntity
              source={{
                obj: asset(this.state.objAsset[0])
              }}
              lit={true}
              texture={asset(this.state.textureAsset[0])}
              style={{
                transform: [
                  {
                    translate: [-80, -200, 100]
                  },
                  { rotateZ: -200 },
                  {
                    scaleX: 50.0
                  },
                  {
                    scaleY: 50.0
                  },
                  {
                    scaleZ: 50.0
                  }
                ],
                opacity: opacityValue
              }}
            />

            <AnimatedEntity
              source={{
                obj: asset(this.state.objAsset[0])
              }}
              lit={true}
              texture={asset(this.state.textureAsset[0])}
              style={{
                transform: [
                  {
                    translate: [-150, -200, 100]
                  },
                  { rotateZ: -200 },
                  {
                    scaleX: 50.0
                  },
                  {
                    scaleY: 50.0
                  },
                  {
                    scaleZ: 50.0
                  }
                ],
                opacity: opacityValue
              }}
            />

            <AnimatedEntity
              source={{
                obj: asset(this.state.objAsset[0])
              }}
              lit={true}
              texture={asset(this.state.textureAsset[0])}
              style={{
                transform: [
                  {
                    translate: [-240, -200, 100]
                  },
                  { rotateZ: -200 },
                  {
                    scaleX: 50.0
                  },
                  {
                    scaleY: 50.0
                  },
                  {
                    scaleZ: 50.0
                  }
                ],
                opacity: opacityValue
              }}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    buttons: state.buttons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableButtons: (buttonToEnable, buttonToDisable) =>
      dispatch(disableAllExcept(buttonToEnable, buttonToDisable))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skeleton);
