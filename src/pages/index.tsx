import Dapps from "lib/pages/dapps";
import {
  getDailyNewWalletOnRef,
  getMostDappsAndContractWithMostUSDTUSNUSDC,
  getMostPopularActionOnRef,
  getMostPopularTokenSwapCount,
  getMostPopularTokenSwapVolume,
  getNumberOfSwapAndSwapperOnRefFi,
  getSuccessAndFailRateOnRef,
  getTop100UsedContracts,
  getTransactionFeeGenerated,
} from "lib/requests/dapps";
export async function getStaticProps() {
  const [
    top100UsedContracts,
    numberOfSwapAndSwapperOnRefFi,
    mostDappsAndContractWithMostUSDTUSNUSDC,
    mostPopularActionOnRef,
    transactionFeeGenerated,
    dailyNewWalletOnRef,
    successAndFailRateOnRef,
    mostPopularTokenSwapVolume,
    mostPopularTokenSwapCount,
  ] = await Promise.all([
    // statics

    getTop100UsedContracts(),
    getNumberOfSwapAndSwapperOnRefFi(),
    getMostDappsAndContractWithMostUSDTUSNUSDC(),
    getMostPopularActionOnRef(),
    getTransactionFeeGenerated(),
    getDailyNewWalletOnRef(),
    getSuccessAndFailRateOnRef(),
    getMostPopularTokenSwapVolume(),
    getMostPopularTokenSwapCount(),
  ]);
  return {
    props: {
      top100UsedContracts,
      numberOfSwapAndSwapperOnRefFi,
      mostDappsAndContractWithMostUSDTUSNUSDC,
      mostPopularActionOnRef,
      transactionFeeGenerated,
      dailyNewWalletOnRef,
      successAndFailRateOnRef,
      mostPopularTokenSwapVolume,
      mostPopularTokenSwapCount,
    },
    revalidate: 10 * 60,
  };
}
export default Dapps;
