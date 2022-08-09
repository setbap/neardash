import Home from "lib/pages/home";
import {
  getDailyBlockAge,
  getDailyNewWallet,
  getDailySuccessAndFailedRate,
  getTodayNewWallet,
  getTop100UsedContracts,
  getTotalPerformanceInfo,
  getTPB,
  getTPS,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    todayNewWallet,
    totalPerformanceInfo,
    dailyNewWallet,
    dailySuccessAndFailedRate,
    top100UsedContracts,
    dailyBlockAgeInfo,
    tPSInfo,
    tPBInfo,
  ] = await Promise.all([
    // statics
    getTodayNewWallet(),
    getTotalPerformanceInfo(),
    // simple
    getDailyNewWallet(),
    getDailySuccessAndFailedRate(),
    getTop100UsedContracts(),
    getDailyBlockAge(),
    getTPS(),
    getTPB(),
  ]);
  return {
    props: {
      todayNewWallet,
      totalPerformanceInfo,
      dailyNewWallet,
      dailySuccessAndFailedRate,
      top100UsedContracts,
      dailyBlockAgeInfo,
      tPSInfo,
      tPBInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
