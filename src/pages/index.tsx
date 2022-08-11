import Dapps from "lib/pages/dapps";
import {
  getDailyNewWalletOnRef,
  getMostDappsAndContractWithMostUSDTUSNUSDC,
  getMostPopularActionOnRef,
  getMostPopularTokenSwapCount,
  getMostPopularTokenSwapVolume,
  getNumberOfSwapAndSwapperOnRefFi,
  getNumberOfTXAndUserOnRefFi,
  getRefSwappedVolumeIn2022,
  getSuccessAndFailRateOnRef,
  getSwapFromStablecoinsToOthers,
  getSwapToStablecoinsToOthers,
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
    refSwappedVolumeIn2022,
    swapFromStablecoinsToOthers,
    swapToStablecoinsToOthers,
    numberOfTXAndUserOnRefFi,
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
    getRefSwappedVolumeIn2022(),
    getSwapFromStablecoinsToOthers(),
    getSwapToStablecoinsToOthers(),
    getNumberOfTXAndUserOnRefFi(),
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
      refSwappedVolumeIn2022,
      swapFromStablecoinsToOthers,
      swapToStablecoinsToOthers,
      numberOfTXAndUserOnRefFi,
    },
    revalidate: 10 * 60,
  };
}
export default Dapps;
