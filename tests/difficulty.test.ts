import { Chieftain, Emperor, King, Prince, Warlord } from '../Difficulties';
import { contentCitizens, levelOf, productionRatio } from '../level';
import AIClient from '@civ-clone/core-ai-client/AIClient';
import BuildItem from '@civ-clone/core-city-build/BuildItem';
import Client from '@civ-clone/core-client/Client';
import ClientRegistry from '@civ-clone/core-client/ClientRegistry';
import GameDifficultyRegistry from '@civ-clone/core-difficulty/GameDifficultyRegistry';
import Player from '@civ-clone/core-player/Player';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import { Settlers, Warrior } from '@civ-clone/civ1-unit/Units';
import buildCostModifiers from '../Rules/City/build-cost';
import buildCosts from '@civ-clone/civ1-unit/Rules/City/buildCost';
import { expect } from 'chai';
import isHuman from '../isHuman';
import setUpCity from '@civ-clone/civ1-city/tests/lib/setUpCity';

describe('levels', (): void => {
  it('are numbered 0 (Chieftain) to 4 (Emperor)', (): void => {
    expect(
      [Chieftain, Warlord, Prince, King, Emperor].map((Level) => Level.level())
    ).eql([0, 1, 2, 3, 4]);
  });

  it('play at King when none is set', (): void => {
    const gameDifficultyRegistry = new GameDifficultyRegistry();

    expect(levelOf(gameDifficultyRegistry)).equal(3);

    gameDifficultyRegistry.set(Emperor);

    expect(levelOf(gameDifficultyRegistry)).equal(4);
  });

  it('give the human 6 content citizens down to 2, and the computer 3', (): void => {
    expect([0, 1, 2, 3, 4].map((level) => contentCitizens(level, true))).eql([
      6, 5, 4, 3, 2,
    ]);
    expect([0, 1, 2, 3, 4].map((level) => contentCitizens(level, false))).eql([
      3, 3, 3, 3, 3,
    ]);
  });

  it('measure the computer against 16 down to 8, and the human against 10', (): void => {
    expect([0, 1, 2, 3, 4].map((level) => productionRatio(level, false))).eql([
      16, 14, 12, 10, 8,
    ]);
    expect([0, 1, 2, 3, 4].map((level) => productionRatio(level, true))).eql([
      10, 10, 10, 10, 10,
    ]);
  });
});

describe('isHuman', (): void => {
  it("is true only for a player whose client isn't a computer player's", (): void => {
    const clientRegistry = new ClientRegistry(),
      human = new Player(),
      computer = new Player(),
      unattached = new Player();

    clientRegistry.register(new Client(human), new AIClient(computer));

    expect(isHuman(human, clientRegistry)).true;
    expect(isHuman(computer, clientRegistry)).false;
    expect(isHuman(unattached, clientRegistry)).false;
  });
});

describe('build costs', (): void => {
  const costFor = async (
    Level: typeof Chieftain,
    human: boolean,
    Item: typeof Warrior
  ): Promise<number> => {
    const ruleRegistry = new RuleRegistry(),
      clientRegistry = new ClientRegistry(),
      gameDifficultyRegistry = new GameDifficultyRegistry(),
      city = await setUpCity({ ruleRegistry });

    gameDifficultyRegistry.set(Level);
    clientRegistry.register(
      human ? new Client(city.player()) : new AIClient(city.player())
    );
    ruleRegistry.register(
      ...buildCosts(),
      ...buildCostModifiers(gameDifficultyRegistry, clientRegistry)
    );

    return new BuildItem(Item, city, ruleRegistry).cost().value();
  };

  it('are 160% for a computer player on Chieftain', async (): Promise<void> => {
    expect(await costFor(Chieftain, false, Warrior)).equal(16);
    expect(await costFor(Chieftain, false, Settlers)).equal(64);
  });

  it('are 80% for a computer player on Emperor', async (): Promise<void> => {
    expect(await costFor(Emperor, false, Settlers)).equal(32);
  });

  it('are as listed for the human at every level', async (): Promise<void> => {
    expect(await costFor(Chieftain, true, Warrior)).equal(10);
    expect(await costFor(Emperor, true, Settlers)).equal(40);
  });
});
