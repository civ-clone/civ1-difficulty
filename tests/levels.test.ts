import { Chieftain, Emperor, King, Prince, Warlord } from '../Difficulties';
import AvailableDifficultyRegistry from '@civ-clone/core-difficulty/AvailableDifficultyRegistry';
import BaseChieftain from '@civ-clone/base-difficulty-chieftain/Chieftain';
import BaseEmperor from '@civ-clone/base-difficulty-emperor/Emperor';
import BaseKing from '@civ-clone/base-difficulty-king/King';
import BasePrince from '@civ-clone/base-difficulty-prince/Prince';
import BaseWarlord from '@civ-clone/base-difficulty-warlord/Warlord';
import { Game } from '@civ-clone/core-game';
import { expect } from 'chai';
import { register } from '../registerDifficulties';

describe('Difficulties', (): void => {
  it('are the base levels themselves, under the same names', (): void => {
    expect([Chieftain, Warlord, Prince, King, Emperor]).eql([
      BaseChieftain,
      BaseWarlord,
      BasePrince,
      BaseKing,
      BaseEmperor,
    ]);
    expect(
      [Chieftain, Warlord, Prince, King, Emperor].map((Level) => Level.name)
    ).eql(['Chieftain', 'Warlord', 'Prince', 'King', 'Emperor']);
  });

  it('registers exactly the five, Chieftain to Emperor', (): void => {
    const availableDifficulties = new AvailableDifficultyRegistry();

    register({ availableDifficulties } as unknown as Game);

    expect(availableDifficulties.entries()).eql([
      Chieftain,
      Warlord,
      Prince,
      King,
      Emperor,
    ]);
  });
});
