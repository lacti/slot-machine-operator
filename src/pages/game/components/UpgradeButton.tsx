import { GameLevelKey, maxLevels } from "../state/GameState";

import GameState from "../state/GameState";
import React from "react";
import calculatePrice from "../utils/calculatePrice";
import formatMoney from "../utils/formatMoney";
import { observer } from "mobx-react-lite";

function UpgradeButton({
  state,
  icon,
  label,
  levelKey,
  last = false,
}: {
  state: GameState;
  icon: string;
  label: string;
  levelKey: GameLevelKey;
  last?: boolean;
}) {
  const level = state[levelKey];
  const maxLevel = maxLevels[levelKey];
  return (
    <div
      className={`flex flex-row items-center justify-between ${
        !last ? "pb-4 mb-4 border-b-2" : ""
      }`}
      onClick={() => state.upgrade(levelKey)}
    >
      <img src={icon} className="w-16 h-16" />
      <div className="flex flex-col">
        <span>{label}</span>
        {level < maxLevel ? (
          <span>비용: {formatMoney(calculatePrice(levelKey, state))}</span>
        ) : (
          <span>MAX</span>
        )}
      </div>
      <span>Lvl {state[levelKey]}</span>
    </div>
  );
}

export default observer(UpgradeButton);
