"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const ClientRegistry_1 = require("@civ-clone/core-client/ClientRegistry");
const GameDifficultyRegistry_1 = require("@civ-clone/core-difficulty/GameDifficultyRegistry");
const level_1 = require("../../level");
const BuildCostModifier_1 = require("@civ-clone/core-city-build/Rules/BuildCostModifier");
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const isHuman_1 = require("../../isHuman");
const getRules = (gameDifficultyRegistry = GameDifficultyRegistry_1.instance, clientRegistry = ClientRegistry_1.instance) => [
    new BuildCostModifier_1.default('civ1-difficulty:city/build-cost/computer', new Criterion_1.default((buildItem, city) => city !== null && !(0, isHuman_1.default)(city.player(), clientRegistry)), new Effect_1.default((buildItem, city, cost) => Math.round((cost * (0, level_1.productionRatio)((0, level_1.levelOf)(gameDifficultyRegistry), false)) / 10))),
];
exports.getRules = getRules;
exports.default = exports.getRules;
//# sourceMappingURL=build-cost.js.map