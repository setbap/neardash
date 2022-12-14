export interface INumberOfSwapAndSwapperOnRefFi {
  Day: string;
  "TX Count": number;
  "Unique Swpper": number;
  "AVG TX Count": number;
  "AVG Unique Swpper": number;
}

export interface INumberOfTXAndUserOnRefFi {
  Day: string;
  "TX Count": number;
  "Unique Users": number;
  "AVG TX Count": number;
  "AVG Unique Users": number;
}

export interface IDappsAndUSNAmount {
  Contract: string;
  "USN amount": number;
}

export interface ITop100UsedContracts {
  Name: string;
  Counts: number;
}

export interface IMostPopularActionOnRef {
  Action: string;
  "TX count": number;
}

export interface ITransactionFeeGenerated {
  Day: string;
  Fee: number;
  "Avg Fee": number;
}

export interface IDailyNewWalletOnRef {
  Day: string;
  "New Wallets": number;
  "Avg New Wallets": number;
}

export interface ISuccessAndFailRateOnRef {
  Day: string;
  "Failed rate": number;
  "Success rate": number;
  "AVG Failed rate": number;
  "AVG Success rate": number;
}

export interface IMostPoularTokenSwapVolumeOnRef {
  Symbol: string;
  "Volume USD": number;
  type: string;
}

export interface IMostPoularTokenSwapCountOnRef {
  Symbol: string;
  Count: number;
  type: string;
}

export interface IDailyMostPoularTokenSwapVolumeOnRef {
  Day: string;
  "Volume USD": number;
  type: string;
}

export interface IDayMostPoularTokenSwapCountOnRef {
  Day: string;
  Count: number;
  type: string;
}

export interface IRefSwappedVolumeIn2022 {
  Day: string;
  "Volume USD": number;
  "AVG Volume USD": number;
  "Total Volume USD": number;
}

export interface IStablecoinSwap {
  "Swap from": string;
  "Swap to": string;
  "Volume USD": number;
  rank: number;
}

export interface ISankeyChartBase {
  nodes: string[];
  links: {
    source: string;
    target: string;
    value: number;
  }[];
}

export interface ISankeyChart {
  nodes: {
    id: string;
    color: string;
  }[];
  links: {
    source: string;
    target: string;
    value: number;
  }[];
}
