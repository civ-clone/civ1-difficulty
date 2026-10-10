"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emperor = exports.King = exports.Prince = exports.Warlord = exports.Chieftain = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Civ1's five levels. `level()` is v474.05's `DifficultyLevel`, which every formula that depends on the level reads.
class Chieftain extends Difficulty_1.default {
    static level() {
        return 0;
    }
}
exports.Chieftain = Chieftain;
class Warlord extends Difficulty_1.default {
    static level() {
        return 1;
    }
}
exports.Warlord = Warlord;
class Prince extends Difficulty_1.default {
    static level() {
        return 2;
    }
}
exports.Prince = Prince;
class King extends Difficulty_1.default {
    static level() {
        return 3;
    }
}
exports.King = King;
class Emperor extends Difficulty_1.default {
    static level() {
        return 4;
    }
}
exports.Emperor = Emperor;
//# sourceMappingURL=Difficulties.js.map