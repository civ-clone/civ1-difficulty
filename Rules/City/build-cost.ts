import {
  ClientRegistry,
  instance as clientRegistryInstance,
} from '@civ-clone/core-client/ClientRegistry';
import {
  GameDifficultyRegistry,
  instance as gameDifficultyRegistryInstance,
} from '@civ-clone/core-difficulty/GameDifficultyRegistry';
import { levelOf, productionRatio } from '../../level';
import BuildCostModifier from '@civ-clone/core-city-build/Rules/BuildCostModifier';
import BuildItem from '@civ-clone/core-city-build/BuildItem';
import City from '@civ-clone/core-city/City';
import Criterion from '@civ-clone/core-rule/Criterion';
import Effect from '@civ-clone/core-rule/Effect';
import isHuman from '../../isHuman';

export const getRules = (
  gameDifficultyRegistry: GameDifficultyRegistry = gameDifficultyRegistryInstance,
  clientRegistry: ClientRegistry = clientRegistryInstance
): BuildCostModifier[] => [
  new BuildCostModifier(
    'civ1-difficulty:city/build-cost/computer',
    new Criterion(
      (buildItem: BuildItem, city: City | null): boolean =>
        city !== null && !isHuman(city.player(), clientRegistry)
    ),
    new Effect(
      (buildItem: BuildItem, city: City | null, cost: number): number =>
        Math.round(
          (cost * productionRatio(levelOf(gameDifficultyRegistry), false)) / 10
        )
    )
  ),
];

export default getRules;
