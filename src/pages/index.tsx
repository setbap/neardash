import Dapps from "lib/pages/dapps";
import {
  getMostDappsAndContractWithMostUSDTUSNUSDC,
  getNumberOfSwapAndSwapperOnRefFi,
  getTop100UsedContracts,
} from "lib/requests/dapps";
export async function getStaticProps() {
  const [
    top100UsedContracts,
    numberOfSwapAndSwapperOnRefFi,
    mostDappsAndContractWithMostUSDTUSNUSDC,
  ] = await Promise.all([
    // statics

    getTop100UsedContracts(),
    getNumberOfSwapAndSwapperOnRefFi(),
    getMostDappsAndContractWithMostUSDTUSNUSDC(),
  ]);
  return {
    props: {
      top100UsedContracts,
      numberOfSwapAndSwapperOnRefFi,
      mostDappsAndContractWithMostUSDTUSNUSDC,
    },
    revalidate: 10 * 60,
  };
}
export default Dapps;
