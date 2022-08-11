import { Box, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StatsCard } from "lib/components/charts/StateCard";
import {
  IDailyBlockAge,
  IDailyNewWallet,
  IDailySuccessAndFailedRate,
  IDailyTPB,
  IDailyTPS,
  ITotalPerformanceInfo,
} from "lib/types/types/performance";

import { NextSeo } from "next-seo";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

interface Props {
  // statics
  todayNewWallet: number;
  // simple
  dailyNewWallet: IDailyNewWallet[];
  dailySuccessAndFailedRate: IDailySuccessAndFailedRate[];
  dailyBlockAgeInfo: IDailyBlockAge[];
  tPSInfo: IDailyTPS[];
  tPBInfo: IDailyTPB[];
  // not impelemented yet
  totalPerformanceInfo: ITotalPerformanceInfo;
}

const Governance = ({
  dailyNewWallet,
  totalPerformanceInfo,
  todayNewWallet,
  dailySuccessAndFailedRate,
  dailyBlockAgeInfo,
  tPSInfo,
  tPBInfo,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title="NearDash (Performance) | Business Intelligence Dashboard for Near"
        description="Track the latest stats and trends on Near"
        openGraph={{
          url: "https://NearDash.vercel.app/",
          title: "NearDash | Business Intelligence Dashboard for Near",
          description: "Track the latest stats and trends on Near",
          images: [
            {
              url: "https://neardash.vercel.app/og.png",
              alt: "NearDash by Flipside Crypto and Setbap",
            },
          ],
          site_name: "NearDash",
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 6, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={todayNewWallet}
            title="Today New Wallets"
            status="inc"
            link="https://app.flipsidecrypto.com/velocity/queries/c2f68189-0f79-4b9b-a41a-ae642c53921c"
          />
          <StatsCard
            stat={totalPerformanceInfo["Min Block Time"]}
            title="Min Block Time (sec)"
            status="inc"
            link="https://app.flipsidecrypto.com/velocity/queries/72629900-1d61-4094-8a4c-a83db0c32f40"
          />

          <StatsCard
            stat={totalPerformanceInfo["Average Block Time"]}
            title="Average Block Time (sec)"
            status="unchanged"
            link="https://app.flipsidecrypto.com/velocity/queries/72629900-1d61-4094-8a4c-a83db0c32f40"
          />

          <StatsCard
            stat={totalPerformanceInfo["Max Block Time"]}
            title="Max Block Time (sec)"
            status="dec"
            link="https://app.flipsidecrypto.com/velocity/queries/72629900-1d61-4094-8a4c-a83db0c32f40"
          />

          <StatsCard
            stat={totalPerformanceInfo["Min TX count per block"]}
            title="Min TX count per block"
            status="inc"
            link="https://app.flipsidecrypto.com/velocity/queries/72629900-1d61-4094-8a4c-a83db0c32f40"
          />

          <StatsCard
            stat={totalPerformanceInfo["Average TX count per block"]}
            title="Average TX count per block"
            status="unchanged"
            link="https://app.flipsidecrypto.com/velocity/queries/72629900-1d61-4094-8a4c-a83db0c32f40"
          />

          <StatsCard
            stat={totalPerformanceInfo["Max TX count per block"]}
            title="Max TX count per block"
            status="dec"
            link="https://app.flipsidecrypto.com/velocity/queries/72629900-1d61-4094-8a4c-a83db0c32f40"
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={dailyNewWallet}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/9ef59a78-7546-4776-900e-7f81b2604647"
            tooltipTitle=""
            modelInfo=""
            title="Daily new wallets"
            baseSpan={3}
            barDataKey="New Wallets"
            lineDataKey="Avg New Wallets"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={dailySuccessAndFailedRate}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/d75d23f1-26b7-4a9e-a2fa-3949fb183329"
            tooltipTitle=""
            modelInfo=""
            title="Daily Transactions Failed rate"
            baseSpan={3}
            barDataKey="Failed rate"
            lineDataKey="AVG Failed rate"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={dailySuccessAndFailedRate}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/d75d23f1-26b7-4a9e-a2fa-3949fb183329"
            tooltipTitle=""
            modelInfo=""
            title="Daily Transactions Success rate"
            baseSpan={3}
            barDataKey="Success rate"
            lineDataKey="AVG Success rate"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={tPBInfo}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/8bd1b806-58db-41a8-91b2-db4999189bb1"
            tooltipTitle=""
            modelInfo=""
            title="Daily transaction per block (TPB)"
            baseSpan={3}
            barDataKey="TX per Block"
            lineDataKey="Average TX in Block"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={tPSInfo}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/118ed14d-9a10-4b4d-a8ab-7ff2255c9ddf"
            tooltipTitle=""
            modelInfo=""
            title="Daily transaction per second (TPS)"
            baseSpan={3}
            barDataKey="TPS"
            lineDataKey="Average TPS"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={dailyBlockAgeInfo}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/2691bf2a-25a6-4b8f-839f-804b82405b03"
            tooltipTitle=""
            modelInfo=""
            title="Daily Block Age (sec)"
            baseSpan={3}
            barDataKey="Daily Block Age"
            lineDataKey="Average Block Time"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
