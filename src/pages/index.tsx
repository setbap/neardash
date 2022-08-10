import Dapps from "lib/pages/dapps";
import {
  getDailyMostPopularTokenSwapVolume,
  getDailyNewWalletOnRef,
  getMostDappsAndContractWithMostUSDTUSNUSDC,
  getMostPopularActionOnRef,
  getMostPopularTokenSwapCount,
  getMostPopularTokenSwapVolume,
  getNumberOfSwapAndSwapperOnRefFi,
  getRefSwappedVolumeIn2022,
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
    dailyMostPopularTokenSwapVolume,
    refSwappedVolumeIn2022,
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
    getDailyMostPopularTokenSwapVolume(),
    getRefSwappedVolumeIn2022(),
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
      dailyMostPopularTokenSwapVolume,
      refSwappedVolumeIn2022,
    },
    revalidate: 10 * 60,
  };
}
export default Dapps;
