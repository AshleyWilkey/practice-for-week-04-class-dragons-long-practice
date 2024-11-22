import Dragon from "./classes/dragon";
import { EvilDragon } from "./classes/evil-dragon";
import { FriendlyDragon } from "./classes/friendly-dragon";
// Your code here

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
);

const smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
);

const allDragons = Dragon.getDragons(falkor, smaug);

export { falkor, smaug, allDragons };
