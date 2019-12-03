import React from "react";
import { asset, Animated, View, VrButton, NativeModules } from "react-360";
import Entity from "Entity";
import { Easing } from 'react-native';
import { disableAllExcept } from '../../store/buttons';
import { connect } from 'react-redux';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Book extends React.Component {
  state = {
    close: true,
    textureObj: "chest/chest1/treasure-chest-model.obj",
    textureObjmtl: "chest/chest1/treasure-chest-model.mtl",
    styles: {
      transform: [
        { translate: [200, -600, 700] },
        { scaleX: 100.0 },
        { scaleY: 100.0 },
        { scaleZ: 100.0 }
      ]
    },
    clickedOnce: false,
    zPosition: new Animated.Value(700),
  };
  moveToSkeleton = () => {
    console.log("trying to move to skeleton")

    console.log(
    Animated.timing(
                  this.state.zPosition,
                  {
                    toValue: -900,
                    duration: 5000,
                    delay: 100,
                    easing: Easing.quad
                  }).start())


  };
  openOrclose = () => {

      this.setState({
        textureObj: "3d_hat/witch_hat(POSER).obj",
        textureObjmtl: "3d_hat/witch_hat.mtl",
        styles: {
          transform: [
            { translate: [200, -500, 700] },
            { rotateY: 200 },
            { scaleX: 700.0 },
            { scaleY: 700.0 },
            { scaleZ: 700.0 }
          ]
        }
      });
this.moveToSkeleton()
  };

  handleClick = () => {
 if(!this.state.clickedOnce){
    this.openOrclose();
    this.state.clickedOnce = true;
 }
    else{
      // this.moveToSkeleton();
      this.props.disableButtons('skeletonButton', 'chestButton');}

  };

  render() {
    const disableStatus = !this.props.buttons.chestButton
    return (
      <View>
        <VrButton onClick={this.handleClick} disabled={disableStatus} >
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
              mtl: asset(this.state.textureObjmtl)
            }}
            lit={true}
            style={this.state.styles}
          />
        </VrButton>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    buttons: state.buttons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableButtons: (buttonToEnable, buttonToDisable) =>
      dispatch(disableAllExcept(buttonToEnable, buttonToDisable)),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Book);
