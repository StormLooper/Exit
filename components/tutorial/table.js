import React from "react";
import { VrButton, asset } from "react-360";
import styles from "../styles";
import Entity from "Entity";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VrButton>
        <Entity
          source={{
            obj: asset("table-obj/table.obj"),
            mtl: asset("table-obj/table.mtl")
          }}
          lit={true}
          style={styles.tutorialTable}
        />
      </VrButton>
    );
  }
}
