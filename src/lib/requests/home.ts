import {
  IDailyBlockAge,
  IDailyNewWallet,
  IDailySuccessAndFailedRate,
  IDailyTPB,
  IDailyTPS,
  IDappsAndUSNAmount,
  INumberOfSwapAndSwapperOnRefFi,
  ITop100UsedContracts,
  ITotalPerformanceInfo,
} from "lib/types/types/home";
import moment from "moment";

export const getTodayNewWallet = async (): Promise<number> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/c2f68189-0f79-4b9b-a41a-ae642c53921c/data/latest"
  );
  const data: { "Current New Wallets": number } = (await res.json())[0];
  return data["Current New Wallets"];
};

export const getTotalPerformanceInfo =
  async (): Promise<ITotalPerformanceInfo> => {
    const res = await fetch(
      "https://node-api.flipsidecrypto.com/api/v2/queries/72629900-1d61-4094-8a4c-a83db0c32f40/data/latest"
    );
    const data: ITotalPerformanceInfo = (await res.json())[0];
    return data;
  };

export const getNumberOfSwapAndSwapperOnRefFi: () => Promise<
  INumberOfSwapAndSwapperOnRefFi[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/9f832aea-5120-4f40-a992-52c408d08694/data/latest"
  );
  const fetchedData: INumberOfSwapAndSwapperOnRefFi[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getMostDappsAndContractWithMostUSDTUSNUSDC = async () => {
  const resUSN = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/6fa15eba-c264-4b97-8557-f1cf103f801e/data/latest"
  );
  const resUSDC = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/5cc44617-4012-4713-844c-8a6588606df4/data/latest"
  );
  const resUSDT = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/29feb570-2f6a-4a22-a732-126688ec3d55/data/latest"
  );
  const usn: IDappsAndUSNAmount[] = await resUSN.json();
  const usdc: IDappsAndUSNAmount[] = await resUSDC.json();
  const usdt: IDappsAndUSNAmount[] = await resUSDT.json();
  return {
    usn,
    usdc,
    usdt,
  };
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

export const getDailyBlockAge: () => Promise<IDailyBlockAge[]> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/2691bf2a-25a6-4b8f-839f-804b82405b03/data/latest"
  );
  const fetchedData: IDailyBlockAge[] = await res.json();
  return fetchedData.sort((a, b) => (a.Day > b.Day ? 1 : -1));
};

export const getTPS: () => Promise<IDailyTPS[]> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/118ed14d-9a10-4b4d-a8ab-7ff2255c9ddf/data/latest"
  );
  const fetchedData: IDailyTPS[] = await res.json();
  return fetchedData.sort((a, b) => (a.Day > b.Day ? 1 : -1));
};

export const getTPB: () => Promise<IDailyTPB[]> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/8bd1b806-58db-41a8-91b2-db4999189bb1/data/latest"
  );
  const fetchedData: IDailyTPB[] = await res.json();
  return fetchedData.sort((a, b) => (a.Day > b.Day ? 1 : -1));
};
