import Home from "lib/pages/home";
import {
  getDailyStackingInfo,
  getDailyStackingVolumeInfo,
  getDailyUniqueStackerInfo,
  getMetaAndBinanceNodeInfo,
  getValidatorPowerInfo,
  getValidatorWithMostInteraction,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    // static

    // simple
    validatorWithMostInteraction,
    validatorPowerInfo,
    dailyStackingVolumeInfo,
    // seorate
    dailyStackingInfo,
    dailyUniqueStackerInfo,
    metaAndBinanceNodeInfo,
  ] = await Promise.all([
    // static

    // simple
    getValidatorWithMostInteraction(),
    getValidatorPowerInfo(),
    getDailyStackingVolumeInfo(),
    // seorate
    getDailyStackingInfo(),
    getDailyUniqueStackerInfo(),
    getMetaAndBinanceNodeInfo(),
  ]);
  return {
    props: {
      // static

      // simple
      validatorWithMostInteraction,
      validatorPowerInfo,
      dailyStackingVolumeInfo,
      // seorate
      dailyStackingInfo,
      dailyUniqueStackerInfo,
      metaAndBinanceNodeInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
