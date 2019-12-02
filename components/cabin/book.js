import React from "react";
import { asset, Animated, View, VrButton, NativeModules ,Text} from "react-360";
import Entity from "Entity";
const { AudioModule } = NativeModules;
const AnimatedEntity = Animated.createAnimatedComponent(Entity);


let openedBookTexture = 'ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/Textures/ChurchBookOpenV2-DiffuseHints.png'

let closedBooktexture = 'ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/Textures/ChurchBookClosedV2-Diffuse.png'

class Book extends React.Component {
  state = {
    //starting value/initial value for y
    close: true,
    textureObj:
      "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
     textureObjmtl:
   "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl",
info :'',
fade: new Animated.Value(0),
mirrorClue: false,
mirrorClueSrc: 'Clues/mirrorClue.jpg'
  };
  openOrclose = () => {
    if (this.state.close === true) {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.obj",
        textureObjmtl:
          "ChurchBookSet/ChurchBookOpenV2/ChurchBookOpenV2-OBJ/ChurchBookOpenV2.mtl",
        close: false,
        info: 'The riddle for next clue'
      });
    } else {
      this.setState({
        textureObj:
          "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.obj",
          textureObjmtl:
        "ChurchBookSet/ChurchBookClosedV2/ChurchBookClosedV2-OBJ/ChurchBookClosedV2.mtl",
        close: true,
        info :'',
       fade: new Animated.Value(0),
      });
    }
  }
  componentDidUpdate() {
    const { close } = this.state;
    const value = close ? 0 : 1;
    Animated.timing(
      this.state.fade,
      {
        toValue: value,
        duration: 3000,
      }
    ).start();
  }

  handleClick = () => {
    this.openOrclose();
    AudioModule.playOneShot({
      source: asset("magic.wav")
    });
    this.setState({
      mirrorClue: true
    })
  };

  render() {
    const { fade } = this.state;
    return (
      <View>
        <Animated.Text style={[{
    color: 'black',
    fontSize: 6,
    fontWeight: 'bold',
    textAlign:'left'
  },{ opacity: fade }]}>
          {this.state.info}
        </Animated.Text>
        <VrButton onClick={this.handleClick}>
          <AnimatedEntity
            source={{
              obj: asset(this.state.textureObj),
            }}
            lit={true}
            style={{
              transform: [
                { translate: [-600, -500, -200] },
                { scaleX: 80.0 },
                { scaleY: 80.0 },
                { scaleZ: 80.0 }
              ]

            }}

            texture = {asset(this.state.textureObjmtl)}
          />
        </VrButton>
        {this.state.mirrorClue ?
        <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: 2,
          height: 2,
          transform: [

            {translateZ: -3},

            {translateX:-1.0}
          ],
          opacity: 1,
        }}
        source={ asset(this.state.mirrorClueSrc)}
      />: null}
      </View>
    );
  }
}


export default Book;
