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
