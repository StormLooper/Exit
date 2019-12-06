import React from 'react';
import { asset, Animated, View, VrButton, NativeModules } from 'react-360';
import Entity from 'Entity';
import { disableAllExcept } from '../../store/buttons';
import { disableAllClues } from '../../store/clues';
import { connect } from 'react-redux';
const { AudioModule, SurfaceModule } = NativeModules;

class Face extends React.Component {
  state = {
    fade: 0.0,
    isFading: true,
    textFade: new Animated.Value(0),
    tableClue: false,
    tableSrc: 'clues/tableClue.jpg',
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prev => {
        const isMaxOrMinValue = prev.fade >= 1.0 || prev.fade <= 0.0;
        const newIsFading = isMaxOrMinValue ? !prev.isFading : prev.isFading;
        const newFade = prev.fade + (newIsFading ? -0.04 : 0.04);
        return {
          fade: newFade,
          isFading: newIsFading,
        };
      });
    }, 200);
  }

  handleClick = () => {
    this.props.disableButtons('tableButton', 'faceButton');
    this.props.disableClues('tableClue', 'faceClue');
    AudioModule.playOneShot({
      source: asset('Laugh.wav'),
    });

    this.setState({
      tableClue: true,
    });
  };
  render() {
    const opacityValue = this.state.fade;
    const disableStatus = !this.props.buttons.faceButton;
    const tableClue = this.props.clues.tableClue;
    return (
      <View>
        <VrButton onClick={this.handleClick} disabled={disableStatus}>
          <Entity
            source={{
              obj: asset('face/151out.obj'),
            }}
            style={{
              transform: [
                { translate: [750, -270, 500] },
                { rotateX: 270 },
                { rotateZ: 50 },
                { scaleX: 30.0 },
                { scaleY: 30.0 },
                { scaleZ: 30.0 },
              ],
              color: 'white',
              opacity: opacityValue,
            }}
            lit={true}
          ></Entity>
        </VrButton>
        {tableClue ? (
          <VrButton
            onClick={() => {
              SurfaceModule.zoomCamera([0, 0, 650]);
            }}
          >
            <Animated.Image
              style={{
                position: 'absolute',
                layoutOrigin: [0.5, 0.5, 0],
                width: 400,
                height: 400,
                transform: [
                  { translateZ: 800 },
                  { translateX: 300 },
                  { rotateY: -180 },
                ],
                opacity: 1,
              }}
              source={asset(this.state.tableSrc)}
            />
          </VrButton>
        ) : null}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    buttons: state.buttons,
    clues: state.clues,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableButtons: (buttonToEnable, buttonToDisable) =>
      dispatch(disableAllExcept(buttonToEnable, buttonToDisable)),
    disableClues: (cluesToEnable, cluesToDisable) =>
      dispatch(disableAllClues(cluesToEnable, cluesToDisable)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Face);
