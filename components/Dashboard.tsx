import { Grid, Stack } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { Pie, PieChart } from "recharts";
interface DashboardProps {
  dashboard: any;
}

const Dashboard: NextPage<DashboardProps> = ({ dashboard }) => {
  function per(num: number, amount: number) {
    return (num * amount) / 100;
  }

  const data02 = [
    {
      name: "Remaining circulating supply",
      value: dashboard?.chsbCirculatingSupplyTokens,
    },
    {
      name: "CHSB staked",
      value: per(dashboard?.chsbCirculatingSupplyTokens, 0.8925),
    },
    {
      name: "CHSB in Yield Program",
      value: per(dashboard?.chsbYieldPledgedTokens, 0.8925),
    },
    {
      name: "Circulating supply burned",
      value: dashboard?.chsbBurnedTokens,
    },
    {
      name: "CHSB in buyback pool",
      value: dashboard?.chsbYieldPledgedTokens,
    },
  ];

  return (
    <section>
      <div className="container">
        <h2>A breakdown of CHSBs circulating supply</h2>
        <Grid container>
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
                <p>{dashboard?.chsbCirculatingSupplyTokens}.</p>
              </Stack>
            </Stack>

            <Stack direction="row">
              <img
                src="/images/icon2.png"
                alt="Picture of the author"               
              />
              <Stack direction="column">
                <h3>CHSB staked</h3>
                <p>{per(dashboard?.chsbCirculatingSupplyTokens, 0.8925)}</p>
                <span>10.75% </span>
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
                <p>{per(dashboard?.chsbYieldPledgedTokens, 0.8925)}</p>
                <span>10.75% </span>
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
                <p>{dashboard?.chsbBurnedTokens}.</p>
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
                <p>{dashboard?.chsbYieldPledgedTokens}.</p>
              </Stack>
            </Stack>
          </Grid>

          <Grid item>
            <PieChart width={730} height={250}>
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Dashboard;
