import React from 'react';
import { AppRegistry, View, PointLight } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import NavBar from './components/navBar';
import Location from './components/location';
import TutorialOne from './components/tutorial/tutorialOne';
import TutorialTwo from './components/tutorial/tutorialTwo';

export default class Exit extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{
            transform: [{ translate: [0, 0, 0] }],
          }}
        />
        <Location />
      </View>
    );
  }
}





class ConnectedExit extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Exit />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('Exit', () => ConnectedExit);
AppRegistry.registerComponent('Intro', () => Intro);
AppRegistry.registerComponent('NavBar', () => NavBar);
AppRegistry.registerComponent('TutorialOne', () => TutorialOne);
AppRegistry.registerComponent('TutorialTwo', () => TutorialTwo);
AppRegistry.registerComponent('TutorialThree', () => TutorialThree);
