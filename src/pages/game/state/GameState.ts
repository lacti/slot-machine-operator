import EventType from "./EventType";
import calculatePrice from "../utils/calculatePrice";
import { eventTypes } from "./EventType";
import { makeAutoObservable } from "mobx";

export type GameLevelKey =
  | "slotCount"
  | "gambleLevel"
  | "airLevel"
  | "securityLevel";

export const maxLevels: { [K in GameLevelKey]: number } = {
  slotCount: 32,
  gambleLevel: Number.MAX_VALUE,
  airLevel: 20,
  securityLevel: Number.MAX_VALUE,
};

export default class GameState {
  slotCount = 1;
  money = 1000n;
  running = true;
  earn = 10n;
  speed = 1000;
  gambleLevel = 1;
  airLevel = 1;
  securityLevel = 1;
  pendingEvents: EventType[] = [];

  earnTimer: number | null = null;
  eventTimer: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  reset(): void {
    console.log("reset");
    this.slotCount = 1;
    this.money = 1000n;
    this.running = true;
    this.earn = 10n;
    this.speed = 1000;
    this.gambleLevel = 1;
    this.airLevel = 1;
    this.securityLevel = 1;
    this.pendingEvents = [];
    this.earnAndNext();
    this.eventTimer = setTimeout(() => this.generateEvent(), 30 * 1000);
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
    this.earn = this.earn * 4n;
    console.log("upgradeGambleLevel", this.gambleLevel, this.earn);
  }

  upgradeAirLevel(): void {
    ++this.airLevel;
    this.speed = Math.max(100, this.speed * 0.8);
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
    const cpc = cpt / 2n;
    this.money += cpc > 0n ? cpc : 1n;
  }

  generateEvent(): void {
    if (!this.running) {
      return;
    }
    if (this.pendingEvents.length < 10) {
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
    this.eventTimer = setTimeout(() => this.generateEvent(), 10 * 1000);
  }

  popEventCard(): void {
    this.pendingEvents.shift();
  }
}
