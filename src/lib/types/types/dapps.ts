export interface INumberOfSwapAndSwapperOnRefFi {
  Day: string;
  "TX Count": number;
  "Unique Swpper": number;
  "AVG TX Count": number;
  "AVG Unique Swpper": number;
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
