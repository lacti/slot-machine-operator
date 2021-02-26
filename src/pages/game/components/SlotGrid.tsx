import GameState from "../state/GameState";
import React from "react";
import SlotMachine from "./SlotMachine";
import { observer } from "mobx-react-lite";

function SlotGrid({ state }: { state: GameState }) {
  return (
    <div className="grid min-w-full grid-cols-4 gap-4 p-8 pt-16">
      {Array.from({ length: state.slotCount }).map((_, index) => (
        <SlotMachine key={`slot${index}`} />
      ))}
    </div>
  );
}

export default observer(SlotGrid);
