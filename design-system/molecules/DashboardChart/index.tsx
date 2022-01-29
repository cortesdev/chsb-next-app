import { useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import {
  Cell,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";
// import BulletPoint from "../../../public/images/bulletPoint.svg";

interface DashboardChartProps {
  dashboard: any;
}


// interface ICustomLegend {
//   active: any;
//   payload: any;
//   label: any;
// }


const DashboardChart: FC<DashboardChartProps> = ({ dashboard, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function per(num: number, amount: number) {
    return (num * amount) / 1000;
  }

  const data02 = [
    {
      name: "Remaining circulating supply",
      value: dashboard?.chsbCirculatingSupplyTokens,
      color: theme.colors.primaryTint8,
      fill: theme.colors.primaryTint8,
    },
    {
      name: "CHSB staked",
      value: dashboard?.chsbStackedTokens,
      color: theme.colors.primary,
      fill: theme.colors.primaryGradient,
    },
    {
      name: "CHSB in Yield Program",
      value: per(
        dashboard?.chsbCirculatingSupplyTokens,
        dashboard?.chsbInYieldPercentage
      ),
      color: theme.colors.purple,
      fill: theme.colors.purpleGradient,
    },
    {
      name: "Circulating supply burned",
      value: dashboard?.chsbBurnedTokens,
      color: theme.colors.dark,
      fill: theme.colors.darkGradient,
    },
    {
      name: "CHSB in buyback pool",
      value: dashboard?.chsbYieldPledgedTokens,
      color: theme.colors.blue,
      fill: theme.colors.blueGradient,
    },
  ];


  // TODO: fix recharts
  // const CustomLabel = (payload: any) => {
  //   const { x, y, name, fill } = payload;

  //   return (
  //     <g>
  //       <defs>
  //         <path
  //           fill={fill}
  //           transform="translate(16, 16)"
  //           d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
  //         />
  //       </defs>

  //       <text x={x} y={y} fill="#000" dy={-6} textAnchor="middle">
  //         <tspan fontSize="10">{name}</tspan>
  //       </text>
  //     </g>
  //   );
  // };


//   const CustomLegend = ({ active, payload, label }: ICustomLegend) => {
//     if (active) {
//         return (
//         <div className="custom-tooltip">
//             <p className="label">{`${label} : ${payload[0].value}`}</p>
//             <p className="desc">Anything you want can be displayed here.</p>
//         </div>
//         );
//     }

//     return null;
// }

  // const CustomLegend = () => (
  //   <ul style={{ display: "grid" }}>
  //     {data02.map((entry, index) => (
  //       <li className="" key={`item-${index}`}>
  //         <BulletPoint
  //           cx="16"
  //           cy="16"
  //           type="circle"
  //           className="recharts-symbols"
  //           fill={data02[index].color}
  //         />

  //         <span className="recharts-legend-item-text">{entry.name}</span>
  //       </li>
  //     ))}
  //   </ul>
  // );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={isMobile ? 250 : 517}  >
        <Pie
          data={data02}
          dataKey="value"
          // nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={isMobile ? 70 : 60}
          outerRadius={isMobile ? 150 : 100}
          fill="#000"
        >
          {isMobile ? (
            ""
          ) : (
            <LabelList
              dataKey="name"
              position="outside"
              type="circle"
              // content={<CustomLabel />}
              style={{
                stroke: "none",
                fill: "rgb(142, 150, 161)",
              }}
            />
          )}

          {data02.map((entry, index) => (
            <Cell key={`bar-${[index]}`} fill={data02[index].color} />
          ))}
        </Pie>
        
        {isMobile && (
          <Legend type="circle" fill="rgb(142, 150, 161)" />
        )}

      </PieChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
