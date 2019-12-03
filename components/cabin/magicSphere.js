/* eslint-disable no-loop-func */
import React from 'react';
import { Easing } from 'react-native';
import { asset, Animated, View, VrButton } from 'react-360';
import Entity from 'Entity';
import { connect } from 'react-redux';
import { addAdditionalTask } from '../../store/tasksCompleted';
let torchOffObj = 'light/Option_with_glass/2(torch-lamp).obj';
let torchOffMtl = 'light/lamp_texture/Color.png';
let torchOnObj = torchOffObj;
let torchOnMtl = 'light/lamp_texture/Color2.png';
let animatedValue = new Animated.Value(0);

let AnimatedEntity = Animated.createAnimatedComponent(Entity);

class MagicSphere extends React.Component {
  state = {
    yPosition: new Animated.Value(1),
    timeOver: false,
    textureObj: 'crystal/magic-sphere.obj',
    textureObjmtl: 'crystal/magic-sphere.mtl',
    renderTimerHint: false,
    torchObj: [torchOffObj, torchOffObj, torchOffObj, torchOffObj, torchOffObj],
    torchmtl: [torchOffMtl, torchOffMtl, torchOffMtl, torchOffMtl, torchOffMtl],
    rotation: new Animated.Value(0),
    isRotating: true,
  };

  componentDidMount() {
    this.startRotate();
    console.log(this.state.props, 'props-box');
  }
  startRotate = () => {
    this.state.rotation.setValue(0);
    Animated.timing(this.state.rotation, {
      toValue: 360,
      duration: 10000,
    }).start(this.startRotate);
  };

  // startsMoving = () => {

  //   //additional task is rendered
  //   this.props.addAdditionalTask(true)

  //   this.state.yPosition.setValue(0)

  //       Animated.timing(
  //         this.state.yPosition,

  //         {
  //           toValue: 1,
  //           duration: 1000,
  //           easing:Easing.inOut(Easing.bounce)
  //         }
  //     ).start()
  //   }

  startTimer = () => {
    if (!this.state.timeOver) {
      this.setState({
        timeOver: true,
        renderTimerHint: true,
      });

      let time = 12001;

      let state1obj = [torchOnObj, torchOffObj, torchOffObj, torchOffObj];
      let state1mtl = [torchOnMtl, torchOffMtl, torchOffMtl, torchOffMtl];

      let state2obj = [torchOnObj, torchOnObj, torchOffObj, torchOffObj];
      let state2mtl = [torchOnMtl, torchOnMtl, torchOffMtl, torchOffMtl];

      let state3obj = [torchOnObj, torchOnObj, torchOnObj, torchOffObj];
      let state3mtl = [torchOnMtl, torchOnMtl, torchOnMtl, torchOffMtl];

      let state4obj = [torchOnObj, torchOnObj, torchOnObj, torchOnObj];
      let state4mtl = [torchOnMtl, torchOnMtl, torchOnMtl, torchOnMtl];

      while (time > 1) {
        time = time - 3000;

        if (time === 9001) {
          console.log(time, 'zmiana 1');
          this.setState({
            torchObj: state1obj,
            torchmtl: state1mtl,
          });
        } else {
          setTimeout(() => {
            console.log(time, 'time2');
            this.setState({
              torchObj: state2obj,
              torchmtl: state2mtl,
            });
          }, 3000);

          setTimeout(() => {
            console.log(time, 'time3');
            this.setState({
              torchObj: state3obj,
              torchmtl: state3mtl,
            });
          }, 6000);

          setTimeout(() => {
            console.log(time, 'time4');
            this.setState({
              torchObj: state4obj,
              torchmtl: state4mtl,
            });
          }, 9000);
        }
      }
    } else {
      return;
    }
  };

  render() {
    const rotationValue = this.state.rotation;
    return (
      <View>
        <VrButton onClick={() => this.startTimer()}>
          <AnimatedEntity
            onEnter={this.startRotate}
            source={{
              obj: asset(this.state.textureObj),
              mtl: asset(this.state.textureObjmtl),
            }}
            lit={true}
            style={{
              // cardboardbox
              transform: [
                { translate: [-500, -600, 400] },
                { scaleX: 0.0004 },
                { scaleY: 0.0004 },
                { scaleZ: 0.0004 },
                { rotateY: rotationValue },
              ],
            }}
          />
        </VrButton>

        <VrButton>
          <AnimatedEntity
            source={{
              obj: asset(this.state.torchObj[3]),
            }}
            lit={true}
            texture={asset(this.state.torchmtl[3])}
            style={{
              transform: [
                {
                  translate: [-400, -400, 800],
                },
                {
                  scaleX: 9.0,
                },
                {
                  scaleY: 9.0,
                },
                {
                  scaleZ: 9.0,
                },
              ],
            }}
          />

          <AnimatedEntity
            source={{
              obj: asset(this.state.torchObj[1]),
            }}
            lit={true}
            texture={asset(this.state.torchmtl[1])}
            style={{
              transform: [
                {
                  translate: [400, -400, -800],
                },
                {
                  scaleX: 9.0,
                },
                {
                  scaleY: 9.0,
                },
                {
                  scaleZ: 9.0,
                },
              ],
            }}
          />

          <AnimatedEntity
            source={{
              obj: asset(this.state.torchObj[0]),
            }}
            lit={true}
            texture={asset(this.state.torchmtl[0])}
            style={{
              transform: [
                {
                  translate: [-830, -550, -370],
                },
                {
                  scaleX: 8.0,
                },
                {
                  scaleY: 8.0,
                },
                {
                  scaleZ: 8.0,
                },
              ],
            }}
          />
          <AnimatedEntity
            source={{
              obj: asset(this.state.torchObj[2]),
            }}
            lit={true}
            texture={asset(this.state.torchmtl[2])}
            style={{
              transform: [
                {
                  translate: [860, -510, 280],
                },
                {
                  scaleX: 8.0,
                },
                {
                  scaleY: 8.0,
                },
                {
                  scaleZ: 8.0,
                },
              ],
            }}
          />
        </VrButton>

        {this.state.renderTimerHint ? (
          <Animated.Image
            style={{
              position: 'absolute',
              layoutOrigin: [0.5, 0.5, 0],
              width: 1,
              height: 1,
              transform: [{ translateZ: -3 }, { translateX: 0 }],
              opacity: 1,
            }}
            source={asset('2d_hints/timer_on.jpg')}
          />
        ) : null}
      </View>
    );
  }
}

mapDispatchToProps = dispatch => {
  return {
    addAdditionalTask: val => dispatch(addAdditionalTask(val)),
  };
};

export default connect(null, mapDispatchToProps)(MagicSphere);
