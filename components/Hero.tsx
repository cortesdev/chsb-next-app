import type { NextPage } from "next";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

interface HeroProps {
  chartData: any;
}

const Hero: NextPage<HeroProps> = ({chartData}) => {


const data = [];

for (let num = 700; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

 
  return (
    <div className="hero dark">
      <div className="container">
        <h2>CHSB Performance Metrics</h2>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={1} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={1} />
              </linearGradient>
            </defs>

            <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
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
              tickCount={8}
              tickFormatter={(number) => `$${number.toFixed(2)}`}
            />

            <Tooltip />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Hero;
