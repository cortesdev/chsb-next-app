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
import { useTheme } from "@mui/material";
import { FC } from "react";

interface HeroChartProps {
  chartData: any;
}
interface IKeys {
  price: number;
  time: string;
}

const HeroChart: FC<HeroChartProps> = ({ chartData }) => {
  const theme = useTheme();

  const data = chartData.map((val: IKeys) => ({
    value: val.price,
    date: val.time,
  }));

  return (
    <>
      <ResponsiveContainer width="101%" height={270}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={theme.colors.primaryShade2}
                stopOpacity={1}
              />
              <stop
                offset="75%"
                stopColor={theme.colors.dark}
                stopOpacity={0.5}
              />
            </linearGradient>
          </defs>

          <Area
            dataKey="value"
            strokeWidth="2"
            stroke={theme.colors.primary}
            fill="url(#color)"
          />

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
