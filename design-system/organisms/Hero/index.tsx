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
 

const StyledPageWrapper = styled(PageWrapper)<{ theme?: Theme }>`
  background: ${(props) =>
      `url(/images/background.png), ${props.theme.colors.secondaryGradient}`}
    no-repeat center center fixed;
  color: ${(props) => props.theme.colors.white};
  background-size: cover;
  height: 100%;
  overflow: hidden;

  h1 {
    font-size: 3rem;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

const Headline = styled(Stack)`
  padding: 3rem 0;

  @media (min-width: 600px) {
    padding: 4rem 0 3rem;
  }
`;

const StyledStack = styled(Stack)`
  background: #001c1b47;
  padding: 0;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
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
  padding: 1.5rem;

  h4,
  span {
    line-height: inherit;
    margin-left: 1.3rem;
  }

  span {
    color: red;
  }
`;

const StyledChartFooter = styled.div<{ theme?: Theme }>`
  background:  ${(props) => props.theme.colors.dark};
  margin-top: -.5rem;
  padding: 1rem 1.5rem;
  text-align: center;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.colors.dark20};
  }
`;

const Hero: FC<HeroProps> = ({ chartData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledPageWrapper style={{ padding: "3rem inherit " }}>
      <Headline sx={{ alignItems: "center" }}>
        <Typography weight="bold" size="h1">
          CHSB Performance Metrics
        </Typography>

        <Typography size="body">
          Deep-dive into the statistics of CHSB and understand the mechanics of
          the SwissBorg ecosystem.
        </Typography>
      </Headline>

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
            <Typography size="h4">CHSB 0.90</Typography>

            <Typography size="span" color={theme.colors.red}>
              -4.8% 24h
            </Typography>
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
