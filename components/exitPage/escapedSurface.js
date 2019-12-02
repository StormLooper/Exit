import React from 'react';
import { changeLocation } from '../../store/location';
import { Text, View, VrButton } from 'react-360';
import styles from '../styles';
import store from '../../store';
import { NativeModules } from 'react-360';
const { SurfaceModule } = NativeModules;

export default class EscapedSurface extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
  }
  handlePlayAgain() {
    //unmount currect surface
    SurfaceModule.changeSurfaceSize('EscapedSurface', 1, 1);

    //change to chosen game room
    //directly accessing store b/c surfaces are rendered at runtime (in client.js)
    //and are not nested within react-redux Provider so no access to redux store via connect
    store.dispatch(changeLocation('tutorial'));
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Congrats! You escaped the cabin in ___ minutes.
          </Text>
        </View>
        <VrButton style={styles.rootButton} onClick={this.handlePlayAgain}>
          <Text>Play Again</Text>
        </VrButton>
      </View>
    );
  }
}
