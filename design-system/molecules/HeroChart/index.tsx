import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO } from "date-fns";
import styled from "@emotion/styled";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { theme } from "../../../utils/theme";

interface HeroChartProps {
  chartData: any;
}

const StyledStack = styled(Stack)`
  background: #001c1b47;
  padding: 3rem 1rem 1rem 0;
  border-radius: 1rem;
`;
interface IKeys {
  price: number;
  time: string;
}

const HeroChart: FC<HeroChartProps> = ({ chartData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = chartData.map((val: IKeys) => ({
    value: val.price,
    date: val.time,
  }));

  // const data = [];
  // for (let i = 0; i < chartData.length; i++) {
  //   data.push({
  //     date: chartData[i].time,
  //     value: chartData[i].price
  //   });
  // }

  // console.log(data);

  return (
    <>
      <ResponsiveContainer width="101%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={theme.colors.primaryShade2} stopOpacity={1} />
              <stop offset="75%" stopColor={theme.colors.dark} stopOpacity={.5} />
            </linearGradient>
          </defs>

          <Area dataKey="value" strokeWidth="2" stroke={theme.colors.primary} fill="url(#color)" />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            stroke="white"
            mirror={true}
            fontSize={13}
            tickMargin={10}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d");
              }
              return "";
            }}
          />

          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            orientation="right"
            mirror={true}
            fontSize={13}
            tickMargin={10}
            stroke="white"
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />

          <Tooltip />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default HeroChart;
