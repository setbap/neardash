import Home from "lib/pages/home";
import { getDailyStackingInfo, getDailyStackingVolumeInfo } from "lib/requests/home";
export async function getStaticProps() {
  const [
    // static

    // simple
    dailyStackingVolumeInfo,
    // seorate
    dailyStackingInfo,
  ] = await Promise.all([
    // static

    // simple
    getDailyStackingVolumeInfo(), 
    // seorate
    getDailyStackingInfo(),
  ]);
  return {
    props: {
      // static

      // simple
      dailyStackingVolumeInfo,
      // seorate
      dailyStackingInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
