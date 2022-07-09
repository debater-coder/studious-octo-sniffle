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
        alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
        puzzle: "3x3x3",
        hintFacelets: "none",
      }),
    );

    player.style.height = "3.5em"

    player.experimentalCurrentThreeJSPuzzleObject(() => {

    }).then((puzzle3d) => {
      this.scene.add(puzzle3d)
    })

  }
}

const app = new App();
