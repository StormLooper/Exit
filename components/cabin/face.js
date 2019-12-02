import React from 'react';
import {  asset, Animated, View,  VrButton, Text ,NativeModules} from 'react-360';
import Entity from 'Entity';
const { AudioModule } = NativeModules;
class Face extends React.Component {

    state = {
        fade: 0.0,
        isFading: true,
        textFade: new Animated.Value(0),
        tableClue: false,
        tableSrc:"Clues/tableClue.jpg"

    };

    componentDidMount(){
        setInterval(() => {
            this.setState((prev) => {
                const isMaxOrMinValue = (prev.fade >= 1.0 || prev.fade <= 0.0)
                const newIsFading = (isMaxOrMinValue ? !prev.isFading : prev.isFading)
                const newFade = prev.fade + (newIsFading ? -0.04 : 0.04)
                return {
                    fade: newFade,
                    isFading: newIsFading
                }
            });
        }, 200);
    }

    handleClick=()=>{
        AudioModule.playOneShot({
            source: asset('Laugh.wav'),
          });

          this.setState({
            tableClue: true
          })
    }
    render() {
        const opacityValue = this.state.fade
        return (

            <View>

                <VrButton onClick={this.handleClick}>
                <Entity source={{
                obj: asset('face/151out.obj'),
                }} style={{
                transform: [
                    { translate: [750, -270,500] },
                   { rotateX: 270 },
                   { rotateZ: 50 },
                    { scaleX: 30.00 },
                    { scaleY: 30.00 },
                    { scaleZ: 30.00},
                ],
                color: 'white',
                opacity: opacityValue

                }}      lit={true}>

                </Entity>
                </VrButton>
                {this.state.tableClue ?
        <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: 6,
          height: 6,
          transform: [

            {translateZ: 5},
            {translateX: 10},
            {rotateY: -100}
          ],
          opacity: 1,
        }}
        source={ asset(this.state.tableSrc)}
      />: null}
            </View>
        )
    }
}

export default Face
