import { Box, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StatsCard } from "lib/components/charts/StateCard";
import {
  IDappsAndUSNAmount,
  INumberOfSwapAndSwapperOnRefFi,
  ITop100UsedContracts,
} from "lib/types/types/dapps";

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
  top100UsedContracts: ITop100UsedContracts[];

  numberOfSwapAndSwapperOnRefFi: INumberOfSwapAndSwapperOnRefFi[];
  mostDappsAndContractWithMostUSDTUSNUSDC: {
    usn: IDappsAndUSNAmount[];
    usdc: IDappsAndUSNAmount[];
    usdt: IDappsAndUSNAmount[];
  };
}

const Governance = ({
  top100UsedContracts,

  numberOfSwapAndSwapperOnRefFi,
  mostDappsAndContractWithMostUSDTUSNUSDC,
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
        ></SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/6fa15eba-c264-4b97-8557-f1cf103f801e"
            data={mostDappsAndContractWithMostUSDTUSNUSDC.usn}
            tooltipTitle=""
            modelInfo=""
            title="which dapps and addresses hold the majority of USN?"
            nameKey="Contract"
            dataKey="USN amount"
          />

          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/5cc44617-4012-4713-844c-8a6588606df4"
            data={mostDappsAndContractWithMostUSDTUSNUSDC.usdc}
            tooltipTitle=""
            modelInfo=""
            title="which dapps and addresses hold the majority of USDC?"
            nameKey="Contract"
            dataKey="USDC amount"
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/29feb570-2f6a-4a22-a732-126688ec3d55"
            data={mostDappsAndContractWithMostUSDTUSNUSDC.usdt}
            tooltipTitle=""
            modelInfo=""
            title="which dapps and addresses hold the majority of USDT?"
            nameKey="Contract"
            dataKey="USDT amount"
          />
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
            barColor={colors[3]}
            data={numberOfSwapAndSwapperOnRefFi}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/9f832aea-5120-4f40-a992-52c408d08694"
            tooltipTitle=""
            modelInfo=""
            title="Number of unique swapper on Ref finance"
            baseSpan={3}
            barDataKey="Unique Swpper"
            lineDataKey="AVG Unique Swpper"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={numberOfSwapAndSwapperOnRefFi}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/9f832aea-5120-4f40-a992-52c408d08694"
            tooltipTitle=""
            modelInfo=""
            title="Number of Swap transactions on Ref finance"
            baseSpan={3}
            barDataKey="TX Count"
            lineDataKey="AVG TX Count"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
