import AIClient from '@civ-clone/core-ai-client/AIClient';
import { ClientRegistry } from '@civ-clone/core-client/ClientRegistry';
import Player from '@civ-clone/core-player/Player';

/**
 * Whether a person is playing `player`: its client is not a computer player's.
 *
 * A player with no client is not a person's. Players are registered before their clients in some hosts, and the rules
 * that run as a player is added (starting gold on Chieftain) must not mistake a computer player for the human one.
 */
export const isHuman = (
  player: Player,
  clientRegistry: ClientRegistry
): boolean => {
  const clients = clientRegistry.getBy('player', player);

  return (
    clients.length > 0 &&
    clients.every((client) => !(client instanceof AIClient))
  );
};

export default isHuman;
