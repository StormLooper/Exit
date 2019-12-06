import React from "react";
import { Text, View, VrButton, Image, asset } from "react-360";
import styles from "../styles";
import { NativeModules } from "react-360";
const { SurfaceModule } = NativeModules;

export default class TutorialSurface2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //unmount tutorial surrface
    SurfaceModule.changeSurfaceSize("TutorialSurface2", 1, 1);
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Use your keyboard arrow keys to walk to the door.
          </Text>
          <Image source={asset("keyboard.png")} style={styles.tutorialPic2} />
        </View>
        <VrButton style={styles.rootButton} onClick={this.handleClick}>
          <Text style={styles.text}>Got it!</Text>
        </VrButton>
      </View>
    );
  }
}
