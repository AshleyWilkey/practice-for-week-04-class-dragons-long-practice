// Your code here
export class Dragon {
  constructor(public name: string, public color: string) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons: Dragon[]) {
    return dragons.map((dragon) => dragon.name);
  }
}

export default Dragon;
