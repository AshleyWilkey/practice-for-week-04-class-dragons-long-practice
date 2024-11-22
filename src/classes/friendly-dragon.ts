// Your code here
import { Dragon } from "./dragon";

export class FriendlyDragon extends Dragon {
  constructor(
    public name: string,
    public color: string,
    public lifeGoals: string[],
    public friend: string
  ) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    for (const lifeGoal of this.lifeGoals) {
      console.log(`${this.name} likes to ${lifeGoal}`);
    }
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}

export default FriendlyDragon;
