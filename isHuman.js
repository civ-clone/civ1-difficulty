"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHuman = void 0;
const AIClient_1 = require("@civ-clone/core-ai-client/AIClient");
/**
 * Whether a person is playing `player`: its client is not a computer player's.
 *
 * A player with no client is not a person's. Players are registered before their clients in some hosts, and the rules
 * that run as a player is added (starting gold on Chieftain) must not mistake a computer player for the human one.
 */
const isHuman = (player, clientRegistry) => {
    const clients = clientRegistry.getBy('player', player);
    return (clients.length > 0 &&
        clients.every((client) => !(client instanceof AIClient_1.default)));
};
exports.isHuman = isHuman;
exports.default = exports.isHuman;
//# sourceMappingURL=isHuman.js.map