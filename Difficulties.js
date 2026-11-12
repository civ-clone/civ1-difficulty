"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emperor = exports.King = exports.Prince = exports.Warlord = exports.Chieftain = void 0;
// Civ1's five levels, from `base-difficulty-*`. `level()` is v474.05's `DifficultyLevel`, which every formula that
//  depends on the level reads. Civ1 has no sixth level, so `base-difficulty-deity` is not one of them.
var Chieftain_1 = require("@civ-clone/base-difficulty-chieftain/Chieftain");
Object.defineProperty(exports, "Chieftain", { enumerable: true, get: function () { return Chieftain_1.Chieftain; } });
var Warlord_1 = require("@civ-clone/base-difficulty-warlord/Warlord");
Object.defineProperty(exports, "Warlord", { enumerable: true, get: function () { return Warlord_1.Warlord; } });
var Prince_1 = require("@civ-clone/base-difficulty-prince/Prince");
Object.defineProperty(exports, "Prince", { enumerable: true, get: function () { return Prince_1.Prince; } });
var King_1 = require("@civ-clone/base-difficulty-king/King");
Object.defineProperty(exports, "King", { enumerable: true, get: function () { return King_1.King; } });
var Emperor_1 = require("@civ-clone/base-difficulty-emperor/Emperor");
Object.defineProperty(exports, "Emperor", { enumerable: true, get: function () { return Emperor_1.Emperor; } });
//# sourceMappingURL=Difficulties.js.map