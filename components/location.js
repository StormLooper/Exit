import React from 'react';
import { Environment, asset } from 'react-360';
import { connect } from 'react-redux';
import Cabin from './cabin';
import Tutorial from './tutorial';

//RENDERS CORRECT LOCATION BASED ON PLAYERS CHOICE OF ROOM
class Location extends React.Component {
  constructor(props) {
    super(props);
    this.envChanger = this.envChanger.bind(this);
  }

  async envChanger(imageUrl) {
    try {
      await Environment.preloadBackgroundImage(asset(imageUrl));
      await Environment.setBackgroundImage(asset(imageUrl));
    } catch (err) {
      console.log("Couldn't change background");
    }
  }

  render() {
    const location = this.props.location;
    if (location === 'tutorial') {
      return <Tutorial />;
    } else if (location === 'cabin') {
      this.envChanger('360mansion.jpg');
      return <Cabin />;
    } else if (location === 'cabinEscaped') {
      this.envChanger('360_world.jpg');
      return null;
    }
  }
}

const mapStateToProps = state => {
  console.log('mapping state to location', state);
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, null)(Location);
