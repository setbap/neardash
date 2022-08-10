import Home from "lib/pages/performance";
import {
  getDailyBlockAge,
  getDailyNewWallet,
  getDailySuccessAndFailedRate,
  getTodayNewWallet,
  getTotalPerformanceInfo,
  getTPB,
  getTPS,
} from "lib/requests/performance";
export async function getStaticProps() {
  const [
    todayNewWallet,
    totalPerformanceInfo,
    dailyNewWallet,
    dailySuccessAndFailedRate,
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
      dailyBlockAgeInfo,
      tPSInfo,
      tPBInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
