import { FC } from "react";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import { FormattedNumber } from "react-intl";
import type { Payload } from "recharts/types/component/DefaultLegendContent";
import styled from "@emotion/styled";
import DashboardChart from "../DashboardChart";

interface DashboardProps {
  dashboard: any;
}
interface props {
  payload: Payload[];
}

const StyledStack = styled(Stack)`
  border-bottom: 1px solid #c7cacf;
  height: 80px;
  padding: 0.5rem 0;
`;

const ImageStack = styled(Stack)`
  width: 3rem;
  height: 2.5rem;
  align-self: center;
`;

const StyledStackItem = styled(Stack)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.9rem;
`;

const StyledSpan = styled.span`
  font-size: 0.7rem;
`;

const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  return (
    <section>
      <div className="container">
        <h2>A breakdown of CHSBs circulating supply</h2>
        <Grid container rowSpacing={4} spacing={24} columnSpacing={{ sm: 2 }}>
          <Grid item sm={12} md={6}>
            <StyledStack direction="row">
              <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
                <Image
                  src="/images/icon1.png"
                  alt="Picture of the author"
                  width={60}
                  height={20}
                />
              </ImageStack>
              <StyledStackItem direction="row">
                <h4>Remaining circulating supply </h4>
                <FormattedNumber
                  value={dashboard?.chsbCirculatingSupplyTokens}
                />
              </StyledStackItem>
            </StyledStack>

            <StyledStack direction="row">
              <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
                <Image
                  src="/images/icon2.png"
                  alt="Picture of the author"
                  width={59}
                  height={20}
                />
              </ImageStack>
              <StyledStackItem direction="row">
                <h4>CHSB staked</h4>
                <Stack sx={{ textAlign: "right" }}>
                  <FormattedNumber value={dashboard?.chsbStackedTokens} />

                  <StyledSpan>(10.75% of circulating supply)</StyledSpan>
                </Stack>
              </StyledStackItem>
            </StyledStack>

            <StyledStack direction="row">
              <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
                <Image
                  src="/images/icon3.png"
                  alt="Picture of the author"
                  width={55}
                  height={20}
                />
              </ImageStack>
              <StyledStackItem direction="row">
                <h4>CHSB in Yield </h4>

                <Stack sx={{ textAlign: "right" }}>
                  <FormattedNumber value={dashboard?.chsbYieldPledgedTokens} />

                  <StyledSpan>
                    ({dashboard?.chsbInYieldPercentage} % of circulating supply)
                  </StyledSpan>
                </Stack>
              </StyledStackItem>
            </StyledStack>

            <StyledStack direction="row">
              <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
                <Image
                  src="/images/icon4.png"
                  alt="Picture of the author"
                  width={58}
                  height={20}
                />
              </ImageStack>

              <StyledStackItem direction="row">
                <h4>Circulating supply burned </h4>
                <span>
                  <FormattedNumber value={dashboard?.chsbBurnedTokens} />
                </span>
              </StyledStackItem>
            </StyledStack>

            <StyledStack direction="row">
              <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
                <Image
                  src="/images/icon5.png"
                  alt="Picture of the author"
                  width={58}
                  height={20}
                />
              </ImageStack>
              <StyledStackItem direction="row">
                <h4>CHSB in buyback pool </h4>
                <FormattedNumber
                  value={dashboard?.totalSupplyBurnedPercentage}
                />
              </StyledStackItem>
            </StyledStack>
          </Grid>

          <Grid item sm={12} md={6}>
            <DashboardChart dashboard={dashboard} />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Dashboard;
