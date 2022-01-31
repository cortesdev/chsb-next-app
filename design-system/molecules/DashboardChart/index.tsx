import {
  ResponsiveContainer,
  PieChart,
  Pie,
  LabelList,
  Cell,
  Legend,
} from "recharts";
import { useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import BulletPoint from "../../atoms/BulletPoint";

interface DashboardChartProps {
  dashboard: any;
}
interface IKeys {
  price: number;
  time: string;
}

const DashboardChart: FC<DashboardChartProps> = ({ dashboard }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
  const sum =
    dashboard?.chsbCirculatingSupplyTokens +
    dashboard?.chsbBurnedTokens +
    dashboard?.chsbStackedTokens -
    dashboard?.chsbYieldPledgedTokens;

  function per(num: any, amount: any) {
    return (num * amount) / 100;
  }

  const buybackPool = per(sum, dashboard?.totalSupplyBurnedPercentage);

  const chartData = [
    {
      name: "Staked",
      value: dashboard?.chsbStackedTokens,
      color: theme.colors.primary,
      fill: theme.colors.primaryGradient,
    },
    {
      name: "Burned",
      value: dashboard?.chsbBurnedTokens,
      color: theme.colors.dark,
      fill: theme.colors.darkGradient,
    },
    {
      name: "In Yield",
      value: dashboard?.chsbYieldPledgedTokens,
      color: theme.colors.purple,
      fill: theme.colors.purpleGradient,
    },
    {
      name: "In buyback pool",
      value: buybackPool,
      color: theme.colors.blue,
      fill: theme.colors.blueGradient,
    },
    {
      name: "Circulating supply",
      value: dashboard?.chsbCirculatingSupplyTokens,
      color: theme.colors.primaryTint8,
      fill: theme.colors.primaryTint8,
    },
  ];

  const CustomLegend = () => {
    return (
      <div className="customized-legend">
        {chartData.map((entry, index) => {
          return (
            <div
              style={{
                display: " flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <BulletPoint fill={entry.color} width="20" height="20" />
              <div style={{ marginLeft: 10 }}>{entry.name}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <ResponsiveContainer width={"100%"} height={isMobile ? 200 : 400}>
      <PieChart width={isMobile ? 100 : 517}>
        <Pie
          isAnimationActive={false}
          data={chartData}
          dataKey="value"
          // nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={isMobile ? 40 : 60}
          outerRadius={isMobile ? 70 : 100}
        >
          {isTablet ? (
            ""
          ) : (
            <LabelList
              dataKey="name"
              position="outside"
              type="circle"
              additive="sum"            
              style={{
                stroke: "none",
                fill: "rgb(142, 150, 161)",
              }}
            />
          )}

          {chartData.map((entry, index) => (
            <Cell key={`bar-${[index]}`} fill={chartData[index].color} />
          ))}
        </Pie>

        {isTablet && (
          <Legend
            content={<CustomLegend />}
            type="circle"
            align="right"
            layout="vertical"
            verticalAlign="middle"
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
