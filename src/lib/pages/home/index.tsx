import BarGraph from "lib/components/charts/BarGraph";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import DonutChart from "lib/components/charts/DonutChart";
import ChartBox from "lib/components/charts/LineChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import MultiChartBox from "lib/components/charts/MultiLineChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
import { IDailyStackingInfo } from "lib/types/types/home";

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
  // simple
  dailyStackingInfo: any;
  // seorate
}

const Home = ({
  // static

  // simple
  dailyStackingInfo,
}: // seorate
Props) => {
  const bgCard = useColorModeValue("white", "#191919");

  return (
    <>
      <NextSeo
        title="NearDash | Business Intelligence Dashboard for Near"
        description="Track the latest stats and trends on Near"
        openGraph={{
          url: "https://NearDash.vercel.app/",
          title: "NearDash | Business Intelligence Dashboard for Near",
          description: "Track the latest stats and trends on Near",

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
          <StateCardRemoteData
            url="https://api.coingecko.com/api/v3/simple/price?ids=near&vs_currencies=usd"
            link="https://www.coingecko.com/en/coins/near"
            status="unchanged"
            title={"Current Near Price (USD)"}
            getStat={(data) => data.near.usd}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937"
            status="inc"
            title={"Number of Staking TX"}
            stat={dailyStackingInfo.totalActionCount.staking}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937"
            status="inc"
            title={"Number of Unstaking TX"}
            stat={dailyStackingInfo.totalActionCount.unstaking}
          />

          {/* <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/b7ecf5c5-87b8-4d5d-a7fb-8a04702c90a8"
            status="inc"
            title={"# Matic Holders"}
            stat={allTotalTokenInfo["HOLDERS"]}
          /> */}
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          {/* <ChartBox
            customColor="#8247e5"
            data={dailyStackingInfo}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937"
            tooltipTitle="Number of Holders"
            modelInfo="Number of Holders"
            title="Number of Holders"
            baseSpan={3}
            areaDataKey="Holders Count"
            xAxisDataKey="Day"
          /> */}

          {/* <LineChartWithBar
            customColor="#8247e5"
            barColor="#5effff60"
            data={tokenInfoData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/40f643c5-5d22-4395-bad6-c3969074e794"
            tooltipTitle="Price VS Circulating Supply"
            modelInfo="Price VS Circulating Supply"
            title="Price VS Circulating Supply"
            baseSpan={3}
            barDataKey="Curculating Supply"
            lineDataKey="Matic Price"
            xAxisDataKey="Day"
          /> */}

          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937"
            modelInfo="number of address make tx in Near"
            values={dailyStackingInfo.dailyStackActionsCount}
            title="Daily Staking and unStaking Transaction Count"
            dataKey="date"
            baseSpan={3}
            oyLabel="Number Transaction"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "staking",
              },
              {
                color: colors[0],
                key: "unstaking",
              },
            ]}
          />
          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937"
            modelInfo="number of address make tx in Near"
            values={dailyStackingInfo.dailyStackActionsComulativeCount}
            title="Daily Staking and unStaking Transaction Count"
            dataKey="date"
            baseSpan={3}
            oyLabel="Number Transaction"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "staking",
              },
              {
                color: colors[0],
                key: "unstaking",
              },
            ]}
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fc40ed57-d4a5-49a4-a80b-bbe861151937"
            data={[
              {
                Count: dailyStackingInfo.totalActionCount.staking,
                Action: "Staking",
              },
              {
                Count: dailyStackingInfo.totalActionCount.unstaking,
                Action: "unStaking",
              },
            ]}
            tooltipTitle="Number of Stake and UnStake Transaction"
            modelInfo="Number of Stake and UnStake Transaction"
            title="Number of Stake and UnStake Transaction"
            dataKey="Count"
            nameKey="Action"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
