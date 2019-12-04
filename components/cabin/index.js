import React from 'react';
import { View, NativeModules } from 'react-360';
import Skeleton from './Skeleton';
import Bookshelf from './bookshelf';
import MagicSphere from './magicSphere';
import FallingCurtain from './fallingCurtain'
import Book from './book'
import Table from './Table'
import Skull from './skull'
import Curtain from './curtain'
import Face from './face'
import Chest from './chest'
import Frame from './frame'
import { changeLocation } from '../../store/location';
import { connect } from 'react-redux';
import Compass from './compass';
import MagicPiano from './magicPiano'
import MagicGlass from './magicGlass'

const { SurfaceModule } = NativeModules;
class Cabin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEscapeKey = this.handleClickEscapeKey.bind(this);
  }
  async componentDidMount() {
    await SurfaceModule.renderNavBar();
    console.log('DO', window.document);
    console.log('cabin mounted!');
  }
  //pass this function to whiever 3d object leads to escape/winning
  handleClickEscapeKey() {
    this.props.changeLocation('cabinEscaped');
  }
  handleLostGame() {
    //mount loser surface
  }
  render() {
    return (
      <View>
        <Skeleton />
        <Bookshelf />
        <MagicSphere />
        <FallingCurtain handleClickEscapeKey={this.handleClickEscapeKey} />
        <Book />
        <Table />
        <Face/>
        <Chest/>
        <Frame/>
        <Skull/>
        <Curtain/>
        <Compass/>
        <MagicPiano/>
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
