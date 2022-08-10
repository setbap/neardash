import {
  Box,
  useColorModeValue,
  GridItem,
  MenuList,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ResponsiveCalendar } from "@nivo/calendar";

import { useState } from "react";
import moment from "moment";
import millify from "millify";

import { GRID_ITEM_SIZE } from "./template";
import ChartSpanMenu from "../basic/ChartSpanMenu";
import ChartHeader from "../basic/ChartHeader";
import { FilterDayBarBox } from "../basic/FilterDayBar";
import { AnimatePresence } from "framer-motion";
import MotionBox from "../motion/Box";
import LinkToSourceMenuItem from "../basic/LinkToSourceMenuItem";
import TrendLine from "./TrendLine";

interface Props {
  modelInfo: string;
  xAxisDataKey: string;
  areaDataKey: string;
  title: string;
  tooltipTitle: string;
  data: any[];
  extraDecimal?: number;
  isNotDate?: boolean;
  domain?: [number, number];
  baseSpan?: number;
  defultSelectedRange?: number | string;
  defultDateView?: "month" | "day";
  queryLink?: string;
  additionalDumpTextToAddKeyToKeyBeUnique?: string;
  customColor?: string;
  years: number[];
  selectedYear: number;
}

const CalendarChart = ({
  years = [2021, 2022],
  selectedYear = 2022,
  baseSpan = 1,
  defultDateView = "day",
  queryLink,
  isNotDate = false,
  extraDecimal = 2,
  domain,
  areaDataKey,
  xAxisDataKey,
  data,
  title,
  modelInfo,
  additionalDumpTextToAddKeyToKeyBeUnique = "",
  defultSelectedRange = "all",
  customColor = "var(--chakra-colors-green-300)",
}: Props) => {
  const [spanItem, setSpanItem] = useState(GRID_ITEM_SIZE[baseSpan - 1]);
  const [defultViewSetting, setDefultViewSetting] = useState(defultDateView);
  const [selectedDate, setSelectedDate] = useState<number | string>(
    selectedYear
  );
  const [chartData, setChartData] = useState(
    data.filter((item) => {
      return moment(item[xAxisDataKey]).year() === selectedYear;
    })
  );
  const filterDateAccordingYear = (year: number) => {
    const newData = data.filter((item) => {
      return moment(item[xAxisDataKey]).year() === year;
    });
    setSelectedDate(year);
    setChartData(newData);
  };

  const bgTooltip = useColorModeValue("gray.300", "gray.700");
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const chartColor = customColor;

  return (
    <GridItem
      rowSpan={1}
      color={textColor}
      bgColor={bgCard}
      shadow="base"
      transition={"all 0.5s "}
      _hover={{ boxShadow: "var(--chakra-shadows-lg)" }}
      borderRadius={"2xl"}
      width="100%"
      colSpan={spanItem}
    >
      <Box
        px="6"
        pt="4"
        pb={"2"}
        _hover={{ boxShadow: `0px 0px 4px ${bgTooltip}` }}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        height={"480px"}
        // height={"400px"}
        id={title}
      >
        <ChartHeader
          chartMenu={
            <MenuList>
              {queryLink && (
                <>
                  <LinkToSourceMenuItem queryLink={queryLink} />
                  <MenuDivider />
                </>
              )}

              <ChartSpanMenu
                onChange={(span) =>
                  setSpanItem(GRID_ITEM_SIZE[Number(span) - 1])
                }
                baseSpan={baseSpan}
              />
            </MenuList>
          }
          modalInfo={modelInfo}
          title={title}
        />
        <Box p={"0"} />
        <ResponsiveCalendar
          data={chartData.map((d: any) => ({
            value: d[areaDataKey],
            day: moment(d[xAxisDataKey]).format("YYYY-MM-DD"),
          }))}
          from={`${selectedDate}-01-02`}
          to={`${+selectedDate + 1}-01-01`}
          emptyColor="#999"
          colors={[
            "#61ffbb",
            "#97e3d5",
            "#a7e3d5",
            "#f7e3d5",
            "#e8c1a0",
            "#a57560",
            "#b47560",
            "#c47560",
            "#e47560",
            "#f07560",
            "#ff7560",
          ]}
          yearSpacing={0}
          monthBorderColor="transparent"
          dayBorderWidth={0}
          monthSpacing={16}
          yearLegendOffset={9}
          minValue="auto"
          maxValue={"auto"}
          monthBorderWidth={0}
          daySpacing={4}
          dayBorderColor="transparent"
          theme={{
            background: "transparent",
            textColor: "white",
            axis: {
              legend: {
                text: {
                  fill: "black",
                },
              },
            },
            tooltip: {
              container: {
                background: "#232323",

                fontSize: 15,
              },
            },
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 2,
              itemWidth: 42,
              itemTextColor: "white",
              itemHeight: 36,

              itemsSpacing: 14,
              itemDirection: "right-to-left",
            },
          ]}
        />
        <AnimatePresence>
          {!isNotDate && defultViewSetting === "day" && (
            <MotionBox
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              height={"36px"}
            >
              <Box p={"1"} />
              <Box height={"36px"}>
                <ButtonGroup size={"xs"} variant="outline" spacing={1}>
                  {years.map((yaer) => (
                    <Button
                      variant={selectedDate === yaer ? "solid" : "outline"}
                      onClick={() => filterDateAccordingYear(yaer)}
                    >
                      {yaer}
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </GridItem>
  );
};

export default CalendarChart;
