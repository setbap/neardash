import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
import {
  IDailyStackingVolumeInfo,
  IValidatorPower,
  IValidatorWithMostInteraction,
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
  // simple
  validatorWithMostInteraction: IValidatorWithMostInteraction[];
  validatorPowerInfo: IValidatorPower[];
  dailyStackingVolumeInfo: IDailyStackingVolumeInfo[];
  // seorate
  dailyStackingInfo: any;
  dailyUniqueStackerInfo: any;
  metaAndBinanceNodeInfo: any;
}

const Home = ({
  // static
  validatorWithMostInteraction,
  validatorPowerInfo,
  dailyStackingVolumeInfo,
  // simple
  dailyStackingInfo,
  dailyUniqueStackerInfo,
  metaAndBinanceNodeInfo,
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
            status="dec"
            title={"Number of Unstaking TX"}
            stat={dailyStackingInfo.totalActionCount.unstaking}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/4505b5f7-09d9-4d86-8b8b-8458a9870e62"
            status="inc"
            title={"Amount of Staked Near"}
            stat={
              dailyStackingVolumeInfo[dailyStackingVolumeInfo.length - 1][
                "Cumlulative Staking Near"
              ]
            }
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/4505b5f7-09d9-4d86-8b8b-8458a9870e62"
            status="dec"
            title={"Amount of unStaked Near"}
            stat={
              dailyStackingVolumeInfo[dailyStackingVolumeInfo.length - 1][
                "Cumlulative unStaking Near"
              ]
            }
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/2d7631b4-6846-46a6-9b63-cbe60562eab9"
            status="inc"
            title={"Number User of doing Staking TX"}
            stat={dailyUniqueStackerInfo.totalActionCount.staking}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/2d7631b4-6846-46a6-9b63-cbe60562eab9"
            status="dec"
            title={"Number User of doing unStaking TX"}
            stat={dailyUniqueStackerInfo.totalActionCount.unstaking}
          />

          <StateCardRemoteData
            url="https://node-api.flipsidecrypto.com/api/v2/queries/9e67ab55-f965-4bcd-a33d-d5c1668b51a1/data/latest"
            link="https://app.flipsidecrypto.com/velocity/queries/9e67ab55-f965-4bcd-a33d-d5c1668b51a1"
            status="inc"
            title={"Number of Staked Validator"}
            getStat={(data) => data[0].STAKE_VALIDATOR}
          />

          <StateCardRemoteData
            url="https://node-api.flipsidecrypto.com/api/v2/queries/9ed7d532-7280-4492-9848-88ef766b3f5b/data/latest"
            link="https://app.flipsidecrypto.com/velocity/queries/9ed7d532-7280-4492-9848-88ef766b3f5b"
            status="dec"
            title={"Number of unStaked Validator"}
            getStat={(data) => data[0].UNSTAKE_VALIDATOR}
          />
          <StateCardRemoteData
            url="https://node-api.flipsidecrypto.com/api/v2/queries/9e67ab55-f965-4bcd-a33d-d5c1668b51a1/data/latest"
            link="https://app.flipsidecrypto.com/velocity/queries/9e67ab55-f965-4bcd-a33d-d5c1668b51a1"
            status="inc"
            title={"Average Amount Near Staked in TXs"}
            getStat={(data) => data[0].AVG_NEAR_STAKE}
          />
          <StateCardRemoteData
            url="https://node-api.flipsidecrypto.com/api/v2/queries/9ed7d532-7280-4492-9848-88ef766b3f5b/data/latest"
            link="https://app.flipsidecrypto.com/velocity/queries/9ed7d532-7280-4492-9848-88ef766b3f5b"
            status="dec"
            title={"Average Amount Near unStaked in TXs"}
            getStat={(data) => data[0].AVG_NEAR_UNSTAKE}
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
          <BarGraph
            queryLink="https://app.flipsidecrypto.com/velocity/queries/eeff7566-ea73-4115-b1d4-cf9a29adab5f"
            extraInfoToTooltip=""
            modelInfo=""
            values={validatorWithMostInteraction.sort(
              (a, b) => b["Interaction Count"] - a["Interaction Count"]
            )}
            title="Distribution Interaction(stake and unstake) of Near Validators"
            dataKey="Validator"
            oyLabel="Number of Interaction"
            oxLabel="name"
            isNotDate
            baseSpan={2}
            labels={[{ key: "Interaction Count", color: colors[2] }]}
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/eeff7566-ea73-4115-b1d4-cf9a29adab5f"
            data={validatorWithMostInteraction
              .sort((a, b) => b["Interaction Count"] - a["Interaction Count"])
              .slice(0, 10)}
            tooltipTitle=""
            modelInfo=""
            title="Top 10 Validator with most Interaction"
            dataKey="Interaction Count"
            nameKey="Validator"
          />

          <BarGraph
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fe3320f4-051a-4cd9-b946-77112fc882b6"
            extraInfoToTooltip=""
            modelInfo=""
            values={validatorPowerInfo
              .sort((a, b) => b.Power - a.Power)
              .filter((item) => item.Power > 0)}
            title="Distribution of Power of Near Validators"
            dataKey="Validator"
            oyLabel="Power of Validator"
            oxLabel="name"
            isNotDate
            baseSpan={2}
            labels={[{ key: "Power", color: colors[2] }]}
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/fe3320f4-051a-4cd9-b946-77112fc882b6"
            data={validatorPowerInfo
              .sort((a, b) => b["Amount NEAR"] - a["Amount NEAR"])
              .slice(0, 10)}
            tooltipTitle=""
            modelInfo=""
            title="Top 10 Validator with most NEAR Staked"
            dataKey="Amount NEAR"
            nameKey="Validator"
          />

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
            tooltipTitle=""
            modelInfo=""
            title="Staked vs unStaked TX Count"
            dataKey="Count"
            nameKey="Action"
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4505b5f7-09d9-4d86-8b8b-8458a9870e62"
            data={[
              {
                Count:
                  dailyStackingVolumeInfo[dailyStackingVolumeInfo.length - 1][
                    "Cumlulative Staking Near"
                  ],
                Action: "Staking",
              },
              {
                Count:
                  dailyStackingVolumeInfo[dailyStackingVolumeInfo.length - 1][
                    "Cumlulative unStaking Near"
                  ],
                Action: "unStaking",
              },
            ]}
            tooltipTitle=""
            modelInfo=""
            title="Staked vs unStaked Volume(NEAR)"
            dataKey="Count"
            nameKey="Action"
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/2d7631b4-6846-46a6-9b63-cbe60562eab9"
            data={[
              {
                Count: dailyUniqueStackerInfo.totalActionCount.staking,
                Action: "Staking",
              },
              {
                Count: dailyUniqueStackerInfo.totalActionCount.unstaking,
                Action: "unStaking",
              },
            ]}
            tooltipTitle=""
            modelInfo=""
            title="Staked vs unStaked Unique Users"
            dataKey="Count"
            nameKey="Action"
          />

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
            title="Daily Cumulative Staking and unStaking Transaction Count"
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
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4505b5f7-09d9-4d86-8b8b-8458a9870e62"
            modelInfo="number of address make tx in Near"
            values={dailyStackingVolumeInfo}
            title="Daily Staking and unStaking Near Volume"
            dataKey="Day"
            baseSpan={3}
            oyLabel="Amount($NEAR)"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "Staking Near",
              },
              {
                color: colors[0],
                key: "unStaking Near",
              },
            ]}
          />
          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4505b5f7-09d9-4d86-8b8b-8458a9870e62"
            modelInfo=""
            values={dailyStackingVolumeInfo}
            title="Cumulative Volume Stake and unStake Near"
            dataKey="Day"
            baseSpan={3}
            oyLabel="Amount($NEAR)"
            oxLabel="name"
            labels={[
              {
                color: colors[1],
                key: "Cumlulative Staking Near",
              },
              {
                color: colors[0],
                key: "Cumlulative unStaking Near",
              },
            ]}
          />
          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/2d7631b4-6846-46a6-9b63-cbe60562eab9"
            modelInfo="number of address make tx in Near"
            values={dailyUniqueStackerInfo.dailyStackActionsUsers}
            title="Daily Staking and unStaking Unique User"
            dataKey="date"
            baseSpan={3}
            oyLabel="Number Users"
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
            queryLink="https://app.flipsidecrypto.com/velocity/queries/2d7631b4-6846-46a6-9b63-cbe60562eab9"
            modelInfo="number of address make tx in Near"
            values={dailyUniqueStackerInfo.dailyStackActionsComulativeUsers}
            title="Daily Staking and unStaking Cumulative Unique User"
            dataKey="date"
            baseSpan={3}
            oyLabel="Number Users"
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

          <BarGraph
            queryLink="https://app.flipsidecrypto.com/velocity/queries/75f10f69-b345-4d65-9b0a-91cce02cbe0e"
            extraInfoToTooltip=""
            modelInfo=""
            values={metaAndBinanceNodeInfo.dailyPowerAmount}
            title="meta-pool and astro-stakers.poolv1 activity"
            dataKey="date"
            oyLabel="$Near"
            oxLabel="Day"
            baseSpan={3}
            labels={[
              {
                color: colors[1],
                key: "binancenode1.poolv1.near",
              },
              {
                color: colors[0],
                key: "meta-pool.near",
              },
            ]}
          />
          <StackedAreaChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/75f10f69-b345-4d65-9b0a-91cce02cbe0e"
            modelInfo=""
            values={metaAndBinanceNodeInfo.cumulativePowerAmount}
            title="Comparison meta-pool and astro-stakers.poolv1 activity"
            dataKey="date"
            baseSpan={3}
            oyLabel="$Near"
            oxLabel="Day"
            labels={[
              {
                color: colors[2],
                key: "binancenode1.poolv1.near",
              },
              {
                color: colors[8],
                key: "meta-pool.near",
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
