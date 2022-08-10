export interface IDailyNewWallet {
  Day: string;
  "New Wallets": number;
  "Avg New Wallets": number;
}
export interface IDailySuccessAndFailedRate {
  Day: string;
  "Failed rate": number;
  "Success rate": number;
  "AVG Failed rate": number;
  "AVG Success rate": number;
}

export interface ITop100UsedContracts {
  Name: string;
  Counts: number;
}

export interface IDailyBlockAge {
  Day: string;
  "Min Block Time": number;
  "Max Block Time": number;
  "Average Block Time": number;
  "Daily Block Age": number;
}

export interface IDailyTPS {
  Day: string;
  TPS: number;
  "Average TPS": number;
}

export interface IDailyTPB {
  Day: string;
  "TX per Block": number;
  "Average TX in Block": number;
}

export interface ITotalPerformanceInfo {
  "Min Block Time": number;
  "Max Block Time": number;
  "Average Block Time": number;
  "Min TX count per block": number;
  "Max TX count per block": number;
  "Average TX count per block": number;
}

export interface INumberOfSwapAndSwapperOnRefFi {
  Day: string;
  "TX Count": number;
  "Unique Swpper": number;
  "AVG TX Count": number;
  "AVG Unique Swpper": number;
}
