// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import KeyboardCameraController from "@martinpham/react-360-keyboard-camera-controller";
import { ReactInstance, Surface } from "react-360-web";
import SurfaceModule from "./surfaceModule";
import { Math as GLMath } from "webgl-ui";

function init(bundle, parent, options = {}) {
  //fixed surface
  let EscapedSurface = new Surface(1, 1, Surface.SurfaceShape.Flat);

  const cameraDirection = [0, 0, -1];

  //react360 instance
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new SurfaceModule()],
    frame: () => {
      //Fixing surface to camera direction
      const cameraQuat = r360.getCameraQuaternion();
      cameraDirection[0] = 0;
      cameraDirection[1] = 0;
      cameraDirection[2] = -1;
      //using GLMath to computing the correct angle of fixed surface
      GLMath.rotateByQuaternion(cameraDirection, cameraQuat);
      const cx = cameraDirection[0];
      const cy = cameraDirection[1];
      const cz = cameraDirection[2];
      const horizAngle = Math.atan2(cx, -cz);
      const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
      EscapedSurface.setAngle(horizAngle, vertAngle);
    },
    ...options
  });

  r360.renderToSurface(r360.createRoot("EscapedSurface"), EscapedSurface);

  //intro surface
  let TutorialSurface = new Surface(1, 1, Surface.SurfaceShape.Flat);
  TutorialSurface.setAngle(0, 0);
  r360.renderToSurface(r360.createRoot("TutorialSurface", {}), TutorialSurface);

  let TutorialSurface2 = new Surface(1, 1, Surface.SurfaceShape.Flat);
  TutorialSurface2.setAngle(-Math.PI, 0);
  r360.renderToSurface(
    r360.createRoot("TutorialSurface2", {}),
    TutorialSurface2
  );

  //make surfaces global
  window.reactIns = r360;
  window.TutorialSurface = TutorialSurface;
  window.TutorialSurface2 = TutorialSurface2;
  window.EscapedSurface = EscapedSurface;

  //room location
  r360.renderToLocation(r360.createRoot("Exit", {}), r360.getDefaultLocation());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("checkered.png"));
  r360.controls.addCameraController(new KeyboardCameraController());
}

window.React360 = { init };
