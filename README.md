# civ1-difficulty

Civilization's five difficulty levels, Chieftain (easiest) to Emperor (toughest), and the numbers that depend on them,
from v474.05.

- `Difficulties`: `Chieftain`, `Warlord`, `Prince`, `King` and `Emperor`, registered in the game's
  `availableDifficulties`.
- `levelOf(game.difficulty)`: the level, 0 to 4. A game with no level set plays at King, where the
  computer players' costs are the ones the rules list.
- `isHuman(player, game.clients)`: whether a person plays `player`. Most of what the level changes applies to the human
  only, or to the computer players only.
- `contentCitizens(level, human)` and `productionRatio(level, human)`: the content citizens a city starts with, and
  what production and growth are measured against (in tenths).

The rule here makes the computer players pay `ratio / 10` of every build cost. The other packages read the level in
their own rules: content citizens and the empire-size penalty (`civ1-city-happiness`), research costs (`civ1-science`),
the food box (`civ1-city`) and Chieftain's starting gold (`civ1-treasury`).
