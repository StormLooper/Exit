import React from "react";
import { AppRegistry, View, PointLight } from "react-360";
import store from "./store";
import { Provider } from "react-redux";
import Location from "./components/location";
import TutorialSurface from "./components/tutorial/tutorialSurface";
import TutorialSurface2 from "./components/tutorial/tutorialSurface2";
import EscapedSurface from "./components/exitPage/escapedSurface";

export default class Exit extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{
            transform: [{ translate: [0, 0, 0] }]
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

AppRegistry.registerComponent("Exit", () => ConnectedExit);
AppRegistry.registerComponent("TutorialSurface", () => TutorialSurface);
AppRegistry.registerComponent("TutorialSurface2", () => TutorialSurface2);
AppRegistry.registerComponent("EscapedSurface", () => EscapedSurface);
