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
