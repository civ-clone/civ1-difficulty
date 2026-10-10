import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Civ1's five levels. `level()` is v474.05's `DifficultyLevel`, which every formula that depends on the level reads.
export class Chieftain extends Difficulty {
  static level(): number {
    return 0;
  }
}

export class Warlord extends Difficulty {
  static level(): number {
    return 1;
  }
}

export class Prince extends Difficulty {
  static level(): number {
    return 2;
  }
}

export class King extends Difficulty {
  static level(): number {
    return 3;
  }
}

export class Emperor extends Difficulty {
  static level(): number {
    return 4;
  }
}
