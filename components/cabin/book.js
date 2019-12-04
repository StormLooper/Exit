import React from "react";
import { asset, Animated, View, VrButton, NativeModules } from "react-360";
import Entity from "Entity";
import { disableAllExcept } from "../../store/buttons";
import { disableAllClues } from "../../store/clues";
import { connect } from "react-redux";
const { AudioModule } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

let openedBookTexture =
  "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/Textures/ChurchBookOpenV2-DiffuseHints.png";

let closedBooktexture =
  "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/Textures/ChurchBookClosedV2-Diffuse.png";

class Book extends React.Component {
  state = {
    close: true,
    textureObj:
      "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
    textureObjmtl:
      "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl",
    info: "",
    fade: new Animated.Value(0),
    mirrorClueSrc: "clues/faceClue.jpg",
    currentlyDisplayedHint: "clues/bookHintFlipped.png"
  };
  openOrclose = () => {
    if (this.state.close === true) {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj",
        textureObjmtl:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl",
        close: false,
        info: "The riddle for next clue"
      });
    } else {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
        textureObjmtl:
          "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl",
        close: true,
        info: "",
        fade: new Animated.Value(0)
      });
    }
  };

  handleClick = () => {
    this.props.disableButtons("faceButton", "bookButton");
    this.props.disableClues("faceClue", "bookClue");
    this.openOrclose();
    AudioModule.playOneShot({
      source: asset("magic.wav")
    });
  };

  render() {
    const disableStatus = !this.props.buttons.bookButton;
    const bookClue = this.props.clues.bookClue;
    const faceClue = this.props.clues.faceClue;
    return (
      <View>
        <VrButton onClick={this.handleClick} disabled={disableStatus}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj)
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-500, -400, -300] },
                { rotateY: 10 },
                { scaleX: 80.0 },
                { scaleY: 80.0 },
                { scaleZ: 80.0 }
              ]
            }}
            texture={asset(
              "3d_book/texture/watercolor-paper-texture.jpg_specular.png"
            )}
          />
        </VrButton>
        {faceClue ? (
          <Animated.Image
            style={{
              position: "absolute",
              layoutOrigin: [0.5, 0.5, 0],
              width: 2,
              height: 2,
              transform: [{ translateZ: -3 }, { translateX: -1.0 }],
              opacity: 1
            }}
            source={asset(this.state.mirrorClueSrc)}
          />
        ) : null}
        {bookClue ? (
          <Animated.Image
            style={{
              position: "absolute",
              layoutOrigin: [0.5, 0.5, 0],
              width: 90,
              height: 60,
              transform: [{ translateZ: 170 }, { translateX: 60 }],
              opacity: 1
            }}
            source={asset(this.state.currentlyDisplayedHint)}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapping state to book", state);
  return {
    buttons: state.buttons,
    clues: state.clues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableButtons: (buttonToEnable, buttonToDisable) =>
      dispatch(disableAllExcept(buttonToEnable, buttonToDisable)),
    disableClues: (cluesToEnable, cluesToDisable) =>
      dispatch(disableAllClues(cluesToEnable, cluesToDisable))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
