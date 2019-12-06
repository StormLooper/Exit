import { StyleSheet } from "react-360";

export default styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translate: [0, -200, 0] }]
  },
  text: {
    textAlign: "center",
    fontSize: 35
  },
  greetingBox: {
    padding: 10,
    backgroundColor: "#000000",
    borderColor: "#ffff",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  tutorialPic1: {
    width: 800,
    height: 300
  },
  tutorialPic2: {
    width: 180,
    height: 150
  },
  greeting: {
    fontSize: 40,
    textAlign: "center"
  },
  rootButton: {
    margin: 30,
    padding: 20,
    width: 200,
    height: 70,
    borderWidth: 1,
    borderColor: "#ffff",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  root: {
    flexDirection: "column",
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "space-around"
  },
  skeleton: {
    transform: [
      { translate: [200, -520, -100] },
      { rotateY: -50 },
      { scaleX: 250.0 },
      { scaleY: 250.0 },
      { scaleZ: 250.0 }
    ]
  },
  hat: {
    transform: [
      { translate: [100, -230, 300] },
      { rotateY: 200 },
      { scaleX: 350.0 },
      { scaleY: 350.0 },
      { scaleZ: 350.0 }
    ]
  },
  startButton: {
    transform: [
      { translate: [-80, -70, 800] },
      { scaleX: 50.0 },
      { scaleY: 50.0 },
      { scaleZ: 50.0 }
    ]
  },
  tutorialTable: {
    transform: [
      { translate: [60, -70, 400] },
      { scaleX: 20.0 },
      { scaleY: 20.0 },
      { scaleZ: 20.0 }
    ]
  }
});
