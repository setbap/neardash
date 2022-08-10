import {
  IDailyNewWalletOnRef,
  IDappsAndUSNAmount,
  IMostPopularActionOnRef,
  INumberOfSwapAndSwapperOnRefFi,
  ITop100UsedContracts,
  ITransactionFeeGenerated,
} from "lib/types/types/dapps";
import moment from "moment";

export const getTop100UsedContracts: () => Promise<
  ITop100UsedContracts[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/3315b247-9f09-43c2-8533-f7dcf0f45722/data/latest"
  );
  const fetchedData: ITop100UsedContracts[] = await res.json();
  return fetchedData.sort((a, b) => (a.Counts > b.Counts ? -1 : 1)).reverse();
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

export const getMostPopularActionOnRef: () => Promise<
  IMostPopularActionOnRef[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/5ac84025-7ca8-4b79-93c6-26280322a2d3/data/latest"
  );
  const fetchedData: IMostPopularActionOnRef[] = await res.json();
  return fetchedData;
};

export const getTransactionFeeGenerated: () => Promise<
  ITransactionFeeGenerated[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/165d1ede-d5dc-46c1-9542-0dd8a8999bf7/data/latest"
  );
  const fetchedData: ITransactionFeeGenerated[] = await res.json();
  return fetchedData;
};

export const getDailyNewWalletOnRef: () => Promise<
  IDailyNewWalletOnRef[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/f0186fc1-92ff-44bb-b70f-122c6ecf5117/data/latest"
  );
  const fetchedData: IDailyNewWalletOnRef[] = await res.json();
  return fetchedData;
};
