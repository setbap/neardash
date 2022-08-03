import Home from "lib/pages/home";
import { getDailyStackingInfo } from "lib/requests/home";
export async function getStaticProps() {
  const [
    // static

    // simple
    // seorate
    dailyStackingInfo,
  ] = await Promise.all([
    // static

    // simple
    // seorate
    getDailyStackingInfo(),
  ]);
  return {
    props: {
      // static

      // simple
      // seorate
      dailyStackingInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
