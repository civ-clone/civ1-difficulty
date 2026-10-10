import { GameDifficultyRegistry } from '@civ-clone/core-difficulty/GameDifficultyRegistry';
/**
 * The level a game is played at, 0 (Chieftain) to 4 (Emperor).
 *
 * A game with no level set (one a host started without asking, or a test) plays at King. It's the level the manual
 * says the computer players play at, and the one where their production and growth cost what the rules list, so a
 * game that never chose a level builds and grows as it did before there were levels.
 */
export declare const levelOf: (
  gameDifficultyRegistry: GameDifficultyRegistry
) => number;
/**
 * What a player's production and growth are measured against, in tenths (v474.05 `CityWorker.cs` L217-L224): 10 for
 * the human, so their costs are as listed, and 16 - 2 × level for the computer players, so they pay 160% on Chieftain
 * down to 80% on Emperor. It scales every build cost, and the food a city needs to grow.
 *
 * Civ1 drops the computer's ratio by 2 more on King and Emperor once it is AD and the human leads. That needs the
 * civilizations ranked (civ-clone/web-renderer#149), so it is not here yet.
 */
export declare const productionRatio: (level: number, human: boolean) => number;
/**
 * How many of a city's citizens are born content (v474.05 `CityWorker.cs` L1433-L1442): 6 - level for the human, so 6
 * on Chieftain down to 2 on Emperor, and always 3 for the computer players.
 */
export declare const contentCitizens: (level: number, human: boolean) => number;
