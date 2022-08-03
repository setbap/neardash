import {
  IDailyStackingInfo,
  IRawDailyStackingInfo,
} from "lib/types/types/home";
import moment from "moment";

// export const getTotalTokenInfo = async (): Promise<IRawTotalTokenInfo> => {
//   const res = await fetch(
//     "https://node-api.flipsidecrypto.com/api/v2/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8/data/latest"
//   );
//   const data: IRawTotalTokenInfo = (await res.json())[0];
//   return data;
// };

// export const getDailyStackingInfo: () => Promise<
//   IDailyStackingInfo[]
// > = async () => {
//   const res = await fetch(
//     "https://node-api.flipsidecrypto.com/api/v2/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937/data/latest"
//   );
//   const fetchedData: IRawDailyStackingInfo[] = await res.json();
//   return fetchedData
//     .sort((a, b) => (moment(a.DATE).isAfter(moment(b.DATE)) ? 1 : -1))
//     .map((dailyInfo) => ({
//       Count: dailyInfo.count,
//       "Cumulative Count": dailyInfo.CUMULATIVE_COUNT,
//       Day: dailyInfo.DATE,
//       Name: dailyInfo.NAME,
//     }));
// };

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
