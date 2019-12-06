import React from "react";
import { View } from "react-360";
import Skeleton from "./Skeleton";
import Bookshelf from "./bookshelf";
import MagicSphere from "./magicSphere";
import FallingCurtain from "./fallingCurtain";
import Book from "./book";
import Table from "./Table";
import Skull from "./skull";
import Curtain from "./curtain";
import Face from "./face";
import Chest from "./chest";
import Frame from "./frame";
import { changeLocation } from "../../store/location";
import { connect } from "react-redux";
import Compass from "./compass";
import MagicPiano from "./magicPiano";
import MagicGlass from "./magicGlass";

class Cabin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickEscapeKey = this.handleClickEscapeKey.bind(this);
  }
  //pass this function to whiever 3d object leads to escape/winning
  handleClickEscapeKey() {
    this.props.changeLocation("cabinEscaped");
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
        <Face />
        <Chest />
        <Frame />
        <Skull />
        <Curtain />
        <Compass />
        <MagicPiano />
        <MagicGlass />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLocation: location => dispatch(changeLocation(location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cabin);
