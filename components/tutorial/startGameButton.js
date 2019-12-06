import React from "react";
import { VrButton, asset } from "react-360";
import styles from "../styles";
import Entity from "Entity";

export default class StartGameButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VrButton onClick={() => this.props.handleClickPlayGame()}>
        <Entity
          source={{
            obj: asset("doorhandle/Door_Component_BI3.obj"),
            mtl: asset("doorhandle/Door_Component_BI3.mtl")
          }}
          lit={true}
          style={styles.startButton}
        />
      </VrButton>
    );
  }
}
