import {
  IDailyStackingInfo,
  IDailyStackingVolumeInfo,
  IRawDailyStackingInfo,
  IRawDailyStackingVolumeInfo,
  IRawDailyUniqueStakersInfo,
  IRawValidatorPower,
  IRawValidatorWithMostInteraction,
  IValidatorPower,
  IValidatorWithMostInteraction,
} from "lib/types/types/home";
import moment from "moment";

// export const getTotalTokenInfo = async (): Promise<IRawTotalTokenInfo> => {
//   const res = await fetch(
//     "https://node-api.flipsidecrypto.com/api/v2/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8/data/latest"
//   );
//   const data: IRawTotalTokenInfo = (await res.json())[0];
//   return data;
// };

export const getValidatorWithMostInteraction: () => Promise<
  IValidatorWithMostInteraction[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/eeff7566-ea73-4115-b1d4-cf9a29adab5f/data/latest"
  );
  const fetchedData: IRawValidatorWithMostInteraction[] = await res.json();
  return fetchedData
    .sort((a, b) => b.count - a.count)
    .map((dailyInfo) => ({
      "Interaction Count": dailyInfo.count,
      Validator: dailyInfo.TX_RECEIVER,
    }));
};

export const getValidatorPowerInfo: () => Promise<
  IValidatorPower[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/fe3320f4-051a-4cd9-b946-77112fc882b6/data/latest"
  );
  const fetchedData: IRawValidatorPower[] = await res.json();
  return fetchedData
    .sort((a, b) =>
      moment(a.POWER_COUNT).isAfter(moment(b.POWER_COUNT)) ? 1 : -1
    )
    .map((dailyInfo) => ({
      Validator: dailyInfo.TX_RECEIVER,
      Power: dailyInfo.POWER_COUNT,
      "Amount NEAR": dailyInfo.POWER_AMOUNT_IN_NEAR,
    }));
};

export const getDailyStackingVolumeInfo: () => Promise<
  IDailyStackingVolumeInfo[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/4505b5f7-09d9-4d86-8b8b-8458a9870e62/data/latest"
  );
  const fetchedData: IRawDailyStackingVolumeInfo[] = await res.json();
  return fetchedData
    .sort((a, b) => (moment(a.DATE).isAfter(moment(b.DATE)) ? 1 : -1))
    .map((dailyInfo) => ({
      Day: dailyInfo.DATE,
      "Staking Near": dailyInfo.STAKING_IN_NEAR,
      "Cumlulative Staking Near": dailyInfo.CUMULATIVE_STAKING_IN_NEAR,
      "unStaking Near": dailyInfo.UNSTAKING_IN_NEAR,
      "Cumlulative unStaking Near": dailyInfo.CUMULATIVE_UNSTAKING_IN_NEAR,
    }));
};

export const getDailyStackingInfo: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937/data/latest"
  );
  const rawData: IRawDailyStackingInfo[] = await res.json();
  const actionName = Array.from(
    new Set(
      rawData.map((item) => {
        return item["NAME"];
      })
    )
  );
  const dailyStackActionsCount = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    rawData,
    "DATE",
    "NAME",
    "count",
    actionName,
    0
  );

  const dailyStackActionsComulativeCount = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    rawData,
    "DATE",
    "NAME",
    "CUMULATIVE_COUNT",
    actionName,
    0
  );

  return {
    dailyStackActionsCount,
    dailyStackActionsComulativeCount,
    totalActionCount:
      dailyStackActionsComulativeCount[
        dailyStackActionsComulativeCount.length - 1
      ],
    actions: actionName,
  };
};

export const getDailyUniqueStackerInfo: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/2d7631b4-6846-46a6-9b63-cbe60562eab9/data/latest"
  );
  const rawData: IRawDailyUniqueStakersInfo[] = await res.json();
  const actionName = Array.from(
    new Set(
      rawData.map((item) => {
        return item["NAME"];
      })
    )
  );

  const dailyStackActionsUsers = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    rawData,
    "DATE",
    "NAME",
    "UNIQUE_USERS",
    actionName,
    0
  );

  const dailyStackActionsComulativeUsers = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    rawData,
    "DATE",
    "NAME",
    "CUMULATIVE_UNIQUE_USERS",
    actionName,
    0
  );

  return {
    dailyStackActionsUsers,
    dailyStackActionsComulativeUsers,
    totalActionCount:
      dailyStackActionsComulativeUsers[
        dailyStackActionsComulativeUsers.length - 1
      ],
    actions: actionName,
  };
};

function calculateDailyBridgeValue(
  dateFormat: string,
  USTBridgeValue: any[],
  dateKey: string,
  nameKey: string,
  valueKey: string,
  bridges: string[],
  minValue: number = 0
) {
  const dailyEachBridgeSum: { [key: string]: { [key: string]: number } } = {};
  USTBridgeValue.forEach((item) => {
    const date = moment(item[dateKey]).format(dateFormat);
    if (!Boolean(item[valueKey]) || item[valueKey] < minValue) {
    } else if (dailyEachBridgeSum[date] === undefined) {
      dailyEachBridgeSum[date] = {};
      dailyEachBridgeSum[date][item[nameKey]] = item[valueKey];
    } else if (dailyEachBridgeSum[date][item[nameKey]] === undefined) {
      dailyEachBridgeSum[date][item[nameKey]] = item[valueKey];
    } else {
      dailyEachBridgeSum[date][item[nameKey]] += item[valueKey];
    }
  });
  const dailyBridgeValue = Object.entries(dailyEachBridgeSum)
    .map((bc) => {
      const finalObject = { date: bc[0] };
      bridges.forEach((bridge) => {
        if (bc[1][bridge]) {
          // @ts-ignore
          finalObject[bridge] = bc[1][bridge];
        }
      });
      return finalObject;
    })
    .sort((a, b) => {
      return moment(a.date).isAfter(moment(b.date)) ? 1 : -1;
    });

  return dailyBridgeValue;
}
