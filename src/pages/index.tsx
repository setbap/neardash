import Home from "lib/pages/home";
import {
  getDailyNewWallet,
  getDailySuccessAndFailedRate,
  getTodayNewWallet,
  getTop100UsedContracts,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    todayNewWallet,
    dailyNewWallet,
    dailySuccessAndFailedRate,
    top100UsedContracts,
  ] = await Promise.all([
    // statics
    getTodayNewWallet(),
    // simple
    getDailyNewWallet(),
    getDailySuccessAndFailedRate(),
    getTop100UsedContracts(),
  ]);
  return {
    props: {
      todayNewWallet,
      dailyNewWallet,
      dailySuccessAndFailedRate,
      top100UsedContracts,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
