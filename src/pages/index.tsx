import Dapps from "lib/pages/dapps";
import {
  getDailyNewWalletOnRef,
  getMostDappsAndContractWithMostUSDTUSNUSDC,
  getMostPopularActionOnRef,
  getNumberOfSwapAndSwapperOnRefFi,
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
  ] = await Promise.all([
    // statics

    getTop100UsedContracts(),
    getNumberOfSwapAndSwapperOnRefFi(),
    getMostDappsAndContractWithMostUSDTUSNUSDC(),
    getMostPopularActionOnRef(),
    getTransactionFeeGenerated(),
    getDailyNewWalletOnRef(),
  ]);
  return {
    props: {
      top100UsedContracts,
      numberOfSwapAndSwapperOnRefFi,
      mostDappsAndContractWithMostUSDTUSNUSDC,
      mostPopularActionOnRef,
      transactionFeeGenerated,
      dailyNewWalletOnRef,
    },
    revalidate: 10 * 60,
  };
}
export default Dapps;
