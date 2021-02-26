import { GameLevelKey } from "../state/GameState";
import GameState from "../state/GameState";

export default function calculatePrice(
  levelKey: GameLevelKey,
  state: GameState
): bigint {
  const level = state[levelKey];
  const levelScale = BigInt(Math.floor(level / 10));
  switch (levelKey) {
    case "slotCount":
      return (levelScale + 3n) ** BigInt(state[levelKey]) * 179n;
    case "gambleLevel":
      return (levelScale + 4n) ** BigInt(state[levelKey]) * 241n;
    case "airLevel":
      return (levelScale + 2n) ** BigInt(state[levelKey]) * 353n;
    case "securityLevel":
      return (levelScale + 2n) ** BigInt(state[levelKey]) * 211n;
  }
}
