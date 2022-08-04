export interface IRawDailyStackingInfo {
  DATE: string;
  NAME: string;
  count: number;
  CUMULATIVE_COUNT: number;
}

export interface IDailyStackingInfo {
  Day: string;
  Name: string;
  Count: number;
  "Cumulative Count": number;
}

export interface IRawDailyStackingVolumeInfo {
  DATE: string;
  STAKING_IN_NEAR: number;
  CUMULATIVE_STAKING_IN_NEAR: number;
  UNSTAKING_IN_NEAR: number;
  CUMULATIVE_UNSTAKING_IN_NEAR: number;
}

export interface IDailyStackingVolumeInfo {
  Day: string;
  "Staking Near": number;
  "Cumlulative Staking Near": number;
  "unStaking Near": number;
  "Cumlulative unStaking Near": number;
}

export interface IRawDailyUniqueStakersInfo {
  DATE: string;
  NAME: string;
  UNIQUE_USERS: number;
  CUMULATIVE_UNIQUE_USERS: number;
}

export interface IRawValidatorPower {
  TX_RECEIVER: string;
  POWER_COUNT: number;
  POWER_AMOUNT_IN_NEAR: number;
}

export interface IValidatorPower {
  Validator: string;
  Power: number;
  "Amount NEAR": number;
}

export interface IRawValidatorWithMostInteraction {
  TX_RECEIVER: string;
  count: number;
}

export interface IValidatorWithMostInteraction {
  Validator: string;
  "Interaction Count": number;
}
