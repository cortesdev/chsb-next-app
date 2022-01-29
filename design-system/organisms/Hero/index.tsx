import styled from "@emotion/styled";
import { Avatar, Stack, Theme, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import HeroChart from "../../molecules/HeroChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PageWrapper from "../../atoms/PageWrapper";
import Typography from "../../atoms/Typography";

interface HeroProps {
  chartData: any;
}

interface StyledPageWrapperProps {
  theme?: Theme;
}

const StyledPageWrapper = styled(PageWrapper)<StyledPageWrapperProps>`
  background: ${(props) =>
      `url(/images/background.png), ${props.theme.colors.secondaryGradient}`}
    no-repeat center center fixed;
  color: ${(props) => props.theme.colors.white};
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const StyledStack = styled(Stack)`
  background: #001c1b47;
  padding: 0;
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledImage = styled.img`
  background: #001c1b47;
  padding: 0;
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  background: #333;
  border-radius: 50px;
  font-size: 0.9rem;
  padding: 0.1rem;
  margin: 0 -0.3rem;
  z-index: 2;
`;

const StyledChartHeader = styled(Stack)`
  align-items: center;
  background: #001c1b47;
  margin-bottom: 1rem;
  padding: 2rem;

  h3,
  span {
    line-height: inherit;
    margin-left: 1.3rem;
  }

  span {
    color: red;
  }
`;

const StyledChartFooter = styled.div`
  background: #001c1b47;
  margin-top: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  cursor: pointer;

  :hover {
    background: #00000012;
  }
`;

interface IKeys {
  price: number;
  time: string;
}

const Hero: FC<HeroProps> = ({ chartData }) => {
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

  return (
    <StyledPageWrapper style={{ padding: "3rem inherit " }}>
      <Stack sx={{ alignItems: "center" }}>
        <Typography weight="bold" size="h1">
          CHSB Performance Metrics
        </Typography>
        <Typography weight="regular" size="body">
          Deep-dive into the statistics of CHSB and understand the mechanics of
          the SwissBorg ecosystem.
        </Typography>
      </Stack>

      <StyledStack>
        <StyledChartHeader direction="row">
          <StyledImage
            alt="flag"
            src="/images/usa.png"
            style={{ maxWidth: "2.1rem" }}
          />
          <StyledArrowForwardIcon />
          <Avatar alt="flag" src="/images/chsb.png" style={{ width: "2rem" }} />

          <Stack direction="column">
            <h3>CHSB 0.90</h3>
            <span>-4.8% 24h</span>
          </Stack>
        </StyledChartHeader>
        <HeroChart chartData={chartData} />

        <StyledChartFooter>All</StyledChartFooter>
      </StyledStack>

      {isMobile && (
        <Stack mb={5}>
          <ArrowDownwardIcon
            sx={{ alignSelf: "center", color: theme.colors.primary }}
          />
        </Stack>
      )}
    </StyledPageWrapper>
  );
};

export default Hero;
