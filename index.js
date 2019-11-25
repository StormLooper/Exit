import React from 'react';
import { AppRegistry, View, PointLight } from 'react-360';
import store from './store';
import { Provider } from 'react-redux';
import Mario from './components/Mario';
import Bookshelf from './components/bookshelf';
import MagicSphere from './components/magicSphere';

export default class Exit extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{
            transform: [{ translate: [0, 0, 0] }],
          }}
        />
        <Mario />
        <Bookshelf />
        <MagicSphere />
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
AppRegistry.registerComponent('Mario', () => Mario);
