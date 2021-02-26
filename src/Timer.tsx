import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

export class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
function TimerView({ timer }: { timer: Timer }) {
  return <span>Seconds passed: {timer.secondsPassed}</span>;
}

export default observer(TimerView);
