import React from "react";
import SlotMachineIcon from "../../../assets/slot-machine.svg";
import state from "../state/state";

export default function SlotMachine() {
  return (
    <img
      src={SlotMachineIcon}
      className="w-16 m-2 vibrate-1"
      onClick={() => state.addClickMoney()}
    />
  );
}
