import Home from "lib/pages/home";
import {
  getDailyStackingInfo,
  getDailyStackingVolumeInfo,
  getDailyUniqueStackerInfo,
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
  ] = await Promise.all([
    // static

    // simple
    getValidatorWithMostInteraction(),
    getValidatorPowerInfo(),
    getDailyStackingVolumeInfo(),
    // seorate
    getDailyStackingInfo(),
    getDailyUniqueStackerInfo(),
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
    },
    revalidate: 10 * 60,
  };
}
export default Home;
