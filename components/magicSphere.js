import React from 'react';
import {  asset, Animated } from 'react-360';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);


class MagicSphere extends React.Component {

    state = {
        fade: 0.0,
        isFading: true
    };
    
    componentDidMount(){
        // setInterval(() => {
        //     this.setState((prev) => {
        //         const isMaxOrMinValue = (prev.fade >= 1.0 || prev.fade <= 0.0)
        //         const newIsFading = (isMaxOrMinValue ? !prev.isFading : prev.isFading)
        //         const newFade = prev.fade + (newIsFading ? -0.04 : 0.04)
        //        // console.log(newFade)
        //         return {
        //             fade: newFade, 
        //             isFading: newIsFading
        //         }
        //     });
        // }, 400);
    }

    // componentDidUpdate() {
    //     Animated.timing(
    //         this.state.fade,
    //         {
    //         toValue: 1,
    //         duration: 100,
    //         }
    //     ).start();  
    // }

    render() {
        const opacityValue = this.state.fade
        return (
            <AnimatedEntity
            source={{
              obj: asset('3d_globe/magic_sphere.obj'),
              //mtl: asset('3d_globe/magic_sphere.mtl'),
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-1, -5, -5] },
                { scaleX: 0.08 },
                { scaleY: 0.08 },
                { scaleZ: 0.08 },
              ],
              color: 'red',
              opacity: opacityValue
              
            }}
          />
        )
    }
}

export default MagicSphere