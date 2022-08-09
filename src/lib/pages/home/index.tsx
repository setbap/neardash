import { Box, Button, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StatsCard } from "lib/components/charts/StateCard";
import {
  IDailyNewWallet,
  IDailySuccessAndFailedRate,
  ITop100UsedContracts,
} from "lib/types/types/home";

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
  top100UsedContracts: ITop100UsedContracts[];
}

const Governance = ({
  dailyNewWallet,
  todayNewWallet,
  dailySuccessAndFailedRate,
  top100UsedContracts,
}: Props): JSX.Element => {
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
          <StatsCard
            stat={todayNewWallet}
            title="Today New Wallets"
            status="inc"
            link="https://app.flipsidecrypto.com/velocity/queries/c2f68189-0f79-4b9b-a41a-ae642c53921c"
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
          <BarGraph
            queryLink="https://app.flipsidecrypto.com/velocity/queries/3315b247-9f09-43c2-8533-f7dcf0f45722"
            modelInfo=""
            values={top100UsedContracts}
            title="Top 100 Contracts/Platforms who interacted on Near"
            dataKey="Name"
            baseSpan={3}
            isNotDate
            oyLabel="Number of TXs"
            oxLabel="Dapps Name"
            labels={[
              {
                key: "Counts",
                color: colors[0],
              },
            ]}
          />

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
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
