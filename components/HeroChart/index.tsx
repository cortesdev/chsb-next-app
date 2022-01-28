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
import { Stack } from "@mui/material";
import { FC } from "react";

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
      <ResponsiveContainer width="106%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B081" stopOpacity={1} />
              <stop offset="75%" stopColor="#0f3230" stopOpacity={1} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#06B081" fill="url(#color)" />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            stroke="white"
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
            tickMargin={-50}
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
