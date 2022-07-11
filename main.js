import "./style.css";
import Experience from "./Experience";
import { TwistyPlayer } from "cubing/twisty";
import { randomScrambleForEvent } from "cubing/scramble";

class App extends Experience {
  constructor() {
    // Setup
    super({
      canvas: document.querySelector("canvas.webgl"),
    });
    this.renderer.instance.setClearColor("#211d20");

    this.camera.position.set(6, 4, 8);

    this.player = document.body.appendChild(
      new TwistyPlayer({
        puzzle: "3x3x3",
      })
    );

    this.player.style.visibility = "hidden";

    this.player
      .experimentalCurrentThreeJSPuzzleObject(() => {})
      .then((puzzle3d) => {
        this.scene.add(puzzle3d);

        let scramble = {
          scramble: async () => {
            const scramble = await randomScrambleForEvent("333");
            this.player.experimentalSetupAlg = scramble;
          },
        };

        this.gui
          .add(scramble, "scramble")
          .name("Scramble (may take a few seconds)");

        document.addEventListener("keydown", (event) => {
          switch (event.key) {
            case "r":
              this.player.experimentalAddMove("R");
              break;
            case "R":
              this.player.experimentalAddMove("R'");
              break;
            case "u":
              this.player.experimentalAddMove("U");
              break;
            case "U":
              this.player.experimentalAddMove("U'");
              break;
            case "f":
              this.player.experimentalAddMove("F");
              break;
            case "F":
              this.player.experimentalAddMove("F'");
              break;
            case "l":
              this.player.experimentalAddMove("L");
              break;
            case "L":
              this.player.experimentalAddMove("L'");
              break;
            case "d":
              this.player.experimentalAddMove("D");
              break;
            case "D":
              this.player.experimentalAddMove("D'");
              break;
            case "b":
              this.player.experimentalAddMove("B");
              break;
            case "B":
              this.player.experimentalAddMove("B'");
              break;
            case "x":
              this.player.experimentalAddMove("x");
              break;
            case "X":
              this.player.experimentalAddMove("x'");
              break;
            case "y":
              this.player.experimentalAddMove("y");
              break;
            case "Y":
              this.player.experimentalAddMove("y'");
              break;
            case "z":
              this.player.experimentalAddMove("z");
              break;
            case "Z":
              this.player.experimentalAddMove("z'");
              break;
          }
        });
      });
  }
}

const app = new App();
