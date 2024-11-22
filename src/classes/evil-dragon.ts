// Your code here
import { Dragon } from "./dragon";

export class EvilDragon extends Dragon {
  constructor(
    public name: string,
    public color: string,
    public evilDoings: string[],
    public nemesis: string
  ) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    for (const evilDoing of this.evilDoings) {
      console.log(`${this.name} will ${evilDoing}`);
    }
  }
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

export default EvilDragon;
