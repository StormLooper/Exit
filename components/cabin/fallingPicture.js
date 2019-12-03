import React from 'react';
import { Easing } from 'react-native';
import {  asset, Animated, View, VrButton, PointLight } from 'react-360';
import { connect } from 'react-redux';
import { updateCompleted} from '../../store/buttons';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);



class FallingPicture extends React.Component {
    state = {
        //starting value/initial value for y
        yPosition: new Animated.Value(1),
        textureObj:'painting1/objPainting.obj',
        textureMtl:'painting1/objPainting.mtl', 
        showEcape:false

    };
    componentDidMount(){
        console.log('falling pic monuted')


    }
    startFalling = () => {
        const ifGameFinished = this.props.allTasksCompleted.allCompleted
        //picture falls only when all Tasks are completed
        if(ifGameFinished){

            Animated.timing(
                    this.state.yPosition,
                    {
                        toValue: -750,
                        duration: 500,
                        delay: 100,
                        easing: Easing.quad
                    }
                    ).start(()=> { this.setState({

                    showEcape:true,
                    //change to escape object 
                    textureObj:'3d_mario/mario-sculpture.obj',
                    textureMtl: '3d_mario/mario-sculpture.mtl'
                })})

        }

    }

    showEscape = () => {

        if(this.state.showEcape){

            console.log('Escape Background ------> put the logic here')


        }
    }


    render() {
        const yPosition = this.state.yPosition
        // console.log(yPosition._value, 'yPosition')
        return (

            <View>
                <VrButton onClick ={()=> this.showEscape, () => this.startFalling()} >
                    <AnimatedEntity 

                        source={{
                        obj: asset(this.state.textureObj),
                        mtl: asset(this.state.textureMtl),
                        }}
                        lit={true}
                        style={{
                        transform: [
                            { translate: [-600, -100, 500] },
                            { translateY: yPosition },
                            { rotateY: 150 },
                            { scaleX: 5 },
                            { scaleY: 5 },
                            { scaleZ: 5 },
                        ],

                        }}
                            />
                </VrButton>

            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        allTasksCompleted: state.buttons
      
    }
  
  }

const mapDisaptchToProps = () => {

    return {

        updatedCompleted: () => dispatch(updateCompleted())
    }
}
  
  
  
  
export default connect(mapStateToProps, mapDisaptchToProps)(FallingPicture);