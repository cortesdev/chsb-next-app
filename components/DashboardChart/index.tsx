import { FC } from "react";
import { Cell, LabelList, Pie, PieChart, ResponsiveContainer } from "recharts";

interface DashboardChartProps {
  dashboard: any;
}

const DashboardChart: FC<DashboardChartProps> = ({ dashboard }) => {
  function per(num: number, amount: number) {
    return (num * amount) / 1000;
  }

  const data02 = [
    {
      name: "Remaining circulating supply",
      value: dashboard?.chsbCirculatingSupplyTokens,
      color: "#ccf3e8",
    },
    {
      name: "CHSB staked",
      value: dashboard?.chsbStackedTokens,
      color: "#14e4bf",
    },
    {
      name: "CHSB in Yield Program",
      value: per(
        dashboard?.chsbCirculatingSupplyTokens,
        dashboard?.chsbInYieldPercentage
      ),
      color: "#9373ff",
    },
    {
      name: "Circulating supply burned",
      value: dashboard?.chsbBurnedTokens,
      color: "#364053",
    },
    {
      name: "CHSB in buyback pool",
      value: dashboard?.chsbYieldPledgedTokens,
      color: "#3d9cff",
    },
  ];

  const CustomLabel = (payload: any) => {
    const { x, y, name, fill } = payload;

    return (
      <g>
        <defs>
          <path
            fill={fill}
            transform="translate(16, 16)"
            d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
          />
        </defs>

        <text x={x} y={y} fill="#000" dy={-6} textAnchor="middle">
          <tspan fontSize="10">{name}</tspan>
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart style={{ margin: "0 auto" }}>
        <Pie
          data={data02}
          dataKey="value"
          // nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#000"
        >
          <LabelList
            dataKey="name"
            position="outside"
            // content={<CustomLabel />}
            style={{
              stroke: "none",
              fill: "rgb(142, 150, 161)",
            }}
          />
          {data02.map((entry, index) => (
            <Cell key={`bar-${[index]}`} fill={data02[index].color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
