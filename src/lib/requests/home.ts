import {
  IDailyNewWallet,
  IDailySuccessAndFailedRate,
  ITop100UsedContracts,
} from "lib/types/types/home";
import moment from "moment";

export const getTodayNewWallet = async (): Promise<number> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/c2f68189-0f79-4b9b-a41a-ae642c53921c/data/latest"
  );
  const data: { "Current New Wallets": number } = (await res.json())[0];
  return data["Current New Wallets"];
};

export const getDailyNewWallet: () => Promise<IDailyNewWallet[]> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/9ef59a78-7546-4776-900e-7f81b2604647/data/latest"
  );
  const fetchedData: IDailyNewWallet[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getDailySuccessAndFailedRate: () => Promise<
  IDailySuccessAndFailedRate[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/d75d23f1-26b7-4a9e-a2fa-3949fb183329/data/latest"
  );
  const fetchedData: IDailySuccessAndFailedRate[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};
export const getTop100UsedContracts: () => Promise<
  ITop100UsedContracts[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/3315b247-9f09-43c2-8533-f7dcf0f45722/data/latest"
  );
  const fetchedData: ITop100UsedContracts[] = await res.json();
  return fetchedData.sort((a, b) => (a.Counts > b.Counts ? 1 : -1));
};
