import "./style.css";
import Experience from "./Experience";
import * as THREE from "three";
import { TwistyPlayer } from "cubing/twisty";

class App extends Experience {
  constructor() {
    // Setup
    super({
      canvas: document.querySelector("canvas.webgl"),
    });
    this.renderer.instance.setClearColor("#211d20");

    this.camera.position.set(6, 4, 8);

    const player = document.body.appendChild(
      new TwistyPlayer({
        puzzle: "3x3x3",
        hintFacelets: "none",
      })
    );

    player.style.visibility = "hidden";

    player
      .experimentalCurrentThreeJSPuzzleObject(() => {})
      .then((puzzle3d) => {
        this.scene.add(puzzle3d);
        const move = {
          R: () => player.experimentalAddMove("R"),
          U: () => player.experimentalAddMove("U"),
          D: () => player.experimentalAddMove("D"),
          F: () => player.experimentalAddMove("F"),
          L: () => player.experimentalAddMove("L"),
          B: () => player.experimentalAddMove("B"),
          R_: () => player.experimentalAddMove("R'"),
          U_: () => player.experimentalAddMove("U'"),
          D_: () => player.experimentalAddMove("D'"),
          F_: () => player.experimentalAddMove("F'"),
          L_: () => player.experimentalAddMove("L'"),
          B_: () => player.experimentalAddMove("B'"),
        };
        this.gui.add(move, "R");
        this.gui.add(move, "U");
        this.gui.add(move, "F");
        this.gui.add(move, "D");
        this.gui.add(move, "L");
        this.gui.add(move, "B");
        this.gui.add(move, "R_");
        this.gui.add(move, "U_");
        this.gui.add(move, "F_");
        this.gui.add(move, "D_");
        this.gui.add(move, "L_");
        this.gui.add(move, "B_");
      });
  }
}

const app = new App();
