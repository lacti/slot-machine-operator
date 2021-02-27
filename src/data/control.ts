const control = {
  maxLevelOfSlotCount: 32,
  maxLevelOfGambleLevel: Number.MAX_VALUE,
  maxLevelOfAirLevel: 20,
  maxLevelOfSecurityLevel: Number.MAX_VALUE,

  earnMultiplyFactor: 4n,
  speedMultiplyFactor: 0.8,
  clickDivideFactor: 2n,

  maxCountOfPendingEvents: 10,
  firstEventDelayMillis: 30 * 1000,
  nextEventDelayMillis: 10 * 1000,
};

export default control;
