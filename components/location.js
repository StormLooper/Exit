import React from "react";
import { Environment, asset } from "react-360";
import { connect } from "react-redux";
import Cabin from "./cabin";
import Tutorial from "./tutorial";
import ExitPage from "./exitPage";

//RENDERS CORRECT 360 VIEW BASED ON LOCATION (TUTORIAL, CABIN, etc.)
class Location extends React.Component {
  constructor(props) {
    super(props);
    this.envChanger = this.envChanger.bind(this);
  }

  envChanger(imageUrl) {
    Environment.preloadBackgroundImage(asset(imageUrl));
    Environment.setBackgroundImage(asset(imageUrl));
  }

  render() {
    const location = this.props.location;
    if (location === "tutorial") {
      this.envChanger("checkered.png");
      return <Tutorial />;
    } else if (location === "cabin") {
      this.envChanger("360_cabin.jpg");
      return <Cabin />;
    } else if (location === "cabinEscaped") {
      this.envChanger("forrest3.jpg");
      return <ExitPage />;
    }
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

export default connect(
  mapStateToProps,
  null
)(Location);
