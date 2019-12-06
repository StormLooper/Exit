import React from "react";
import { Text, View, VrButton, Image, asset } from "react-360";
import styles from "../styles";
import { NativeModules } from "react-360";
const { SurfaceModule } = NativeModules;

export default class TutorialSurface extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //unmount tutorial surrface
    SurfaceModule.changeSurfaceSize("TutorialSurface", 1, 1);
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Welcome Exit: Escape the room!</Text>
          <Text style={styles.greeting}>
            Use your mouse or trackpad to look around.
          </Text>
          <Image source={asset("arrow.png")} style={styles.tutorialPic1} />
        </View>
        <VrButton style={styles.rootButton} onClick={this.handleClick}>
          <Text style={styles.text}>Got it!</Text>
        </VrButton>
      </View>
    );
  }
}
