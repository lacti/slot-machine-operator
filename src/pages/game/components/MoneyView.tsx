import DollarIcon from "../../../assets/dollar.svg";
import GameState from "../state/GameState";
import React from "react";
import formatMoney from "../utils/formatMoney";
import { observer } from "mobx-react-lite";

function MoneyView({ state }: { state: GameState }) {
  return (
    <div className="absolute flex flex-row items-center justify-center w-full top-6">
      <img src={DollarIcon} className="w-6 h-6 mr-2" />
      <span className="text-xl font-extrabold text-white">
        {formatMoney(state.money)}
      </span>
    </div>
  );
}

export default observer(MoneyView);
