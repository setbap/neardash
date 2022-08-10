import {
  IDailyMostPoularTokenSwapVolumeOnRef,
  IDailyNewWalletOnRef,
  IDappsAndUSNAmount,
  IMostPopularActionOnRef,
  IMostPoularTokenSwapCountOnRef,
  IMostPoularTokenSwapVolumeOnRef,
  INumberOfSwapAndSwapperOnRefFi,
  IRefSwappedVolumeIn2022,
  ISuccessAndFailRateOnRef,
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
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getDailyNewWalletOnRef: () => Promise<
  IDailyNewWalletOnRef[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/f0186fc1-92ff-44bb-b70f-122c6ecf5117/data/latest"
  );
  const fetchedData: IDailyNewWalletOnRef[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getSuccessAndFailRateOnRef: () => Promise<
  ISuccessAndFailRateOnRef[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/5a857256-6887-46b8-a5f8-aa23cf8b88a8/data/latest"
  );
  const fetchedData: ISuccessAndFailRateOnRef[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getRefSwappedVolumeIn2022: () => Promise<
  IRefSwappedVolumeIn2022[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/e5f735b1-ae92-4d83-9ce7-c4527600dbe0/data/latest"
  );
  const fetchedData: IRefSwappedVolumeIn2022[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getMostPopularTokenSwapVolume: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/1b716381-9b2b-461a-b984-c9e26398554e/data/latest"
  );
  const rawData: IMostPoularTokenSwapVolumeOnRef[] = await res.json();
  const actionType = Array.from(
    new Set(
      rawData.map((item) => {
        return item.type;
      })
    )
  );
  const volumeInfo = pivotData(
    rawData,
    "Symbol",
    "type",
    "Volume USD",
    actionType,
    0
  );
  return {
    volumeInfo: volumeInfo.sort((a, b) =>
      // @ts-ignore
      a[actionType[0]] > b[actionType[0]] ? -1 : 1
    ),
    actions: actionType,
  };
};

export const getMostPopularTokenSwapCount: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/90429960-c3a4-46a0-aa10-be315d0e7362/data/latest"
  );
  const rawData: IMostPoularTokenSwapCountOnRef[] = await res.json();
  const actionType = Array.from(
    new Set(
      rawData.map((item) => {
        return item.type;
      })
    )
  );
  const countInfo = pivotData(
    rawData,
    "Symbol",
    "type",
    "Count",
    actionType,
    0
  );
  return {
    countInfo: countInfo.sort((a, b) =>
      // @ts-ignore
      a[actionType[0]] > b[actionType[0]] ? -1 : 1
    ),
    actions: actionType,
  };
};

export const getDailyMostPopularTokenSwapVolume: () => Promise<any> =
  async () => {
    const res = await fetch(
      "https://node-api.flipsidecrypto.com/api/v2/queries/9e262b6b-e479-4834-85bb-89291555b531/data/latest"
    );
    const rawData: IDailyMostPoularTokenSwapVolumeOnRef[] = await res.json();
    const actionType = Array.from(
      new Set(
        rawData.map((item) => {
          return item.type;
        })
      )
    );
    const volumeInfo = pivotData(
      rawData,
      "Day",
      "type",
      "Volume USD",
      actionType,
      0
    );
    return {
      volumeInfo: volumeInfo.sort((a, b) =>
        // @ts-ignore
        a["Name"] > b["Name"] ? 1 : -1
      ),
      actions: actionType,
    };
  };

function pivotData<T extends { [key: string]: any }>(
  rawData: T[],
  xAxisKey2: keyof T,
  nameKey: keyof T,
  valueKey: keyof T,
  bridges: string[],
  minValue: number = 0,
  isDate: boolean = false
) {
  const dailyEachBridgeSum: any = {};
  rawData.forEach((item) => {
    const xAxisKey = isDate
      ? moment(item[xAxisKey2]).format("MM/DD/YYYY")
      : item[xAxisKey2];

    if (!Boolean(item[valueKey]) || item[valueKey] < minValue) {
    } else if (dailyEachBridgeSum[xAxisKey] === undefined) {
      dailyEachBridgeSum[xAxisKey] = {};
      dailyEachBridgeSum[xAxisKey][item[nameKey]] = item[valueKey];
    } else if (dailyEachBridgeSum[xAxisKey][item[nameKey]] === undefined) {
      dailyEachBridgeSum[xAxisKey][item[nameKey]] = item[valueKey];
    } else {
      dailyEachBridgeSum[xAxisKey][item[nameKey]] += item[valueKey];
    }
  });
  const dailyBridgeValue = Object.entries(dailyEachBridgeSum).map((bc) => {
    const finalObject = { Name: bc[0] };
    bridges.forEach((bridge) => {
      // @ts-ignore
      if (bc[1][bridge]) {
        // @ts-ignore
        finalObject[bridge] = bc[1][bridge];
      }
    });
    return finalObject;
  });

  return dailyBridgeValue;
}
