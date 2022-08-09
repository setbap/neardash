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
