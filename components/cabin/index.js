import React from 'react';
import { View, Environment, asset } from 'react-360';
import Mario from './Mario';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';
import FallingPicture from './fallingPicture'
import Book from './book'
import Table from './Table'
import AncientPaper from './ancientPaper'
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';
import CardBoard from './cardboard';
import Compass from './compass';
import MagicPiano from './magicPiano'
import { NativeModules } from 'react-360';
const { SurfaceModule } = NativeModules;
import MagicGlass from './magicGlass'

class Cabin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEscapeKey = this.handleClickEscapeKey.bind(this);
  }
  async componentDidMount() {
    await SurfaceModule.renderNavBar()
    console.log("DO", window.document)
    console.log('cabin mounted!');

  }
  handleClickEscapeKey() {
    //unmount navbar
    //mount winner surface
    this.props.changeLocation('cabinEscaped');
  }
  handleLostGame() {
    //unmount navbar
    //mount loser surface
  }
  render() {
    return (
      <View>
        <Mario handleClickEscapeKey={this.handleClickEscapeKey} />
        <Bookshelf />
        <MagicSphere />
        <FallingPicture />
        <Book/>
        <Table />
        <CardBoard/>
        <Compass/>
        <MagicPiano/>
        <AncientPaper/>
        <MagicGlass/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location)),
  };
};

export default connect(null, mapDispatchToProps)(Cabin);
