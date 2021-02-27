import EventType from "../../../data/models/EventType";
import calculatePrice from "../utils/calculatePrice";
import control from "../../../data/control";
import { eventTypes } from "../../../data/models/EventType";
import initial from "../../../data/initial";
import { makeAutoObservable } from "mobx";

export type GameLevelKey =
  | "slotCount"
  | "gambleLevel"
  | "airLevel"
  | "securityLevel";

export const maxLevels: { [K in GameLevelKey]: number } = {
  slotCount: control.maxLevelOfSlotCount,
  gambleLevel: control.maxLevelOfGambleLevel,
  airLevel: control.maxLevelOfAirLevel,
  securityLevel: control.maxLevelOfSecurityLevel,
};

export default class GameState {
  money = initial.money;
  earn = initial.earn;
  speed = initial.speed;
  slotCount = initial.slotCount;
  gambleLevel = initial.gambleLevel;
  airLevel = initial.airLevel;
  securityLevel = initial.securityLevel;

  running = true;
  pendingEvents: EventType[] = [];
  earnTimer: number | null = null;
  eventTimer: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  reset(): void {
    console.log("reset");
    this.money = initial.money;
    this.earn = initial.earn;
    this.speed = initial.speed;
    this.slotCount = initial.slotCount;
    this.gambleLevel = initial.gambleLevel;
    this.airLevel = initial.airLevel;
    this.securityLevel = initial.securityLevel;

    this.running = true;
    this.pendingEvents = [];
    this.earnAndNext();
    this.eventTimer = setTimeout(
      () => this.generateEvent(),
      control.firstEventDelayMillis
    );
  }

  stop(): void {
    this.running = false;
    if (this.earnTimer) {
      clearTimeout(this.earnTimer);
    }
    if (this.eventTimer) {
      clearTimeout(this.eventTimer);
    }
  }

  upgrade(levelKey: GameLevelKey): boolean {
    if (this[levelKey] >= maxLevels[levelKey]) {
      return false;
    }
    const cost = calculatePrice(levelKey, this);
    if (this.money < cost) {
      return false;
    }
    this.money -= cost;
    switch (levelKey) {
      case "slotCount":
        this.addSlotMachine();
        break;
      case "gambleLevel":
        this.upgradeGambleLevel();
        break;
      case "airLevel":
        this.upgradeAirLevel();
        break;
      case "securityLevel":
        this.upgradeSecurityLevel();
        break;
    }
    return true;
  }

  upgradeGambleLevel(): void {
    ++this.gambleLevel;
    this.earn = this.earn * control.earnMultiplyFactor;
    console.log("upgradeGambleLevel", this.gambleLevel, this.earn);
  }

  upgradeAirLevel(): void {
    ++this.airLevel;
    this.speed = Math.max(100, this.speed * control.speedMultiplyFactor);
    console.log("upgradeAirLevel", this.airLevel, this.speed);
  }

  upgradeSecurityLevel(): void {
    ++this.securityLevel;
    console.log("upgradeSecurityLevel", this.securityLevel);
  }

  addSlotMachine(): void {
    ++this.slotCount;
    console.log("addSlotMachine", this.slotCount);
  }

  cpt(): bigint {
    return BigInt(this.slotCount) * this.earn;
  }

  earnAndNext(): void {
    console.log("earnAndNext", this.money);
    if (!this.running) {
      return;
    }
    this.money += this.cpt();
    this.earnTimer = setTimeout(() => this.earnAndNext(), this.speed);
  }

  addClickMoney(): void {
    const cpt = this.cpt();
    const cpc = cpt / control.clickDivideFactor;
    this.money += cpc > 0n ? cpc : 1n;
  }

  generateEvent(): void {
    if (!this.running) {
      return;
    }
    if (this.pendingEvents.length < control.maxCountOfPendingEvents) {
      const baseline =
        (0.5 / (this.securityLevel + 1)) *
        (Math.log10((this.slotCount * this.gambleLevel) / this.securityLevel) +
          1);
      console.log("Rolling dice", baseline);
      if (Math.random() < baseline) {
        const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        console.log("Event occurred", type);
        switch (type) {
          case "smoky":
            this.earn = 10n;
            this.gambleLevel = 1;
            break;
          case "thief":
            this.slotCount = 1;
            this.money = 0n;
            break;
          case "jackpot":
            this.money = 0n;
            break;
        }
        this.pendingEvents.push(type);
      }
    }
    this.eventTimer = setTimeout(
      () => this.generateEvent(),
      control.nextEventDelayMillis
    );
  }

  popEventCard(): void {
    this.pendingEvents.shift();
  }
}
