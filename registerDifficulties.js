"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const Difficulties_1 = require("./Difficulties");
const core_game_1 = require("@civ-clone/core-game");
const register = (game) => game.availableDifficulties.register(Difficulties_1.Chieftain, Difficulties_1.Warlord, Difficulties_1.Prince, Difficulties_1.King, Difficulties_1.Emperor);
exports.register = register;
// The plugin loader imports each package for this side effect, as it does for the rules.
(0, exports.register)(core_game_1.defaultGame);
exports.default = exports.register;
//# sourceMappingURL=registerDifficulties.js.map