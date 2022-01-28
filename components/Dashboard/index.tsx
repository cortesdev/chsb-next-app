import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import { Cell, LabelList,  Pie, PieChart } from "recharts";
import { FormattedNumber } from "react-intl";
import type { Payload } from "recharts/types/component/DefaultLegendContent";
import { FC } from "react";

interface DashboardProps {
  dashboard: any;
}
interface props {
  payload: Payload[];
}

const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  function per(num: number, amount: number) {
    return (num * amount) / 1000;
  }

  const data02 = [
    {
      name: "Remaining circulating supply",
      value: dashboard?.chsbCirculatingSupplyTokens,
      color: "#ccf3e8"
    },
    {
      name: "CHSB staked",
      value: dashboard?.chsbStackedTokens,
      color: "#14e4bf"
    },
    {
      name: "CHSB in Yield Program",
      value: per(
        dashboard?.chsbCirculatingSupplyTokens,
        dashboard?.chsbInYieldPercentage
      ),
      color: "#9373ff"
    },
    {
      name: "Circulating supply burned",
      value: dashboard?.chsbBurnedTokens,
      color: "#364053",
    },
    {
      name: "CHSB in buyback pool",
      value: dashboard?.chsbYieldPledgedTokens,
      color: "#3d9cff"
    },
  ];
 
  const CustomLegend = () => (
    <>
      {data02.map((key, index) => (
        <div key={`item-${index}`}>
          <span>{key.name}</span>
        </div>
      ))}
    </>
  );

  return (
    <section>
      <div className="container">
        <h2>A breakdown of CHSBs circulating supply</h2>
        <Grid
          container
          md={6}
          rowSpacing={4}
          spacing={24}
          columnSpacing={{ sm: 4 }}
        >
          <Grid item>
            <Stack direction="row">
              <Image
                src="/images/icon1.png"
                alt="Picture of the author"
                width={72}
                height={30}
              />
              <Stack>
                <h3>Remaining circulating supply </h3>
                <FormattedNumber
                  value={dashboard?.chsbCirculatingSupplyTokens}
                />
              </Stack>
            </Stack>

            <Stack direction="row">
              <Image
                src="/images/icon2.png"
                alt="Picture of the author"
                width={72}
                height={30}
              />
              <Stack direction="column">
                <h3>CHSB staked</h3>

                <FormattedNumber value={dashboard?.chsbStackedTokens} />

                <span>(10.75% of circulating supply)</span>
              </Stack>
            </Stack>

            <Stack direction="row">
              <Image
                src="/images/icon3.png"
                alt="Picture of the author"
                width={70}
                height={30}
              />

              <Stack direction="column">
                <h3>CHSB in Yield Program </h3>
                <FormattedNumber value={dashboard?.chsbYieldPledgedTokens} />

                <span>
                  ({dashboard?.chsbInYieldPercentage} % of circulating supply)
                </span>
              </Stack>
            </Stack>

            <Stack direction="row">
              <Image
                src="/images/icon4.png"
                alt="Picture of the author"
                width={70}
                height={30}
              />
              <Stack direction="column">
                <h3>Circulating supply burned </h3>
                <FormattedNumber value={dashboard?.chsbBurnedTokens} />
              </Stack>
            </Stack>

            <Stack direction="row">
              <Image
                src="/images/icon5.png"
                alt="Picture of the author"
                width={72}
                height={30}
              />
              <Stack direction="column">
                <h3>CHSB in buyback pool </h3>
                <FormattedNumber
                  value={dashboard?.totalSupplyBurnedPercentage}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item>
            <PieChart width={730} height={250}>
              <Pie
                data={data02}
                dataKey="value"
                // nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#82ca9d"
              >
                <LabelList
                  dataKey="name"
                  color="#000"
                  position="outside"
                  style={{ fontSize: '80%', fill: '#000' }}
                />
                {data02.map((entry, index) => (
                  <Cell key={`bar-${[index]}`} fill={data02[index].color} />
                ))}
              </Pie>
            </PieChart>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Dashboard;
