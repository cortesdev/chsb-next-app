import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Stack,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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

const StyledStack = styled(Stack)<{ theme?: Theme }>`
background: ${(props) => props.theme.colors.dark50};
padding: 0;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const StyledImage = styled.img<{ theme?: Theme }>`
  background: ${(props) => props.theme.colors.dark20};
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
  align-self: center;
  z-index: 2;
`;

const StyledChartHeader = styled(Stack)<{ theme?: Theme }>`
  align-items: center;
  background: ${(props) => props.theme.colors.dark50};
  margin-bottom: 1rem;
  padding: 1.5rem;
  width: 50%;

  h4 {
    font-size: 20px;
    margin-top: 1rem;
  }

  span {
    font-size: 22px;
  }

  @media (min-width: 600px) {
    width: 100%;
    border-bottom: 1px solid white;

    h4,
    span {
      line-height: inherit;
      margin-left: 1.3rem;
    }

    h4 {
      font-size: inherit;
      margin-top: 0;
    }  
    
    span {
      font-size: inherit;
    }
  }
`;

const StyledChartFooter = styled.div<{ theme?: Theme }>`
  background: ${(props) => props.theme.colors.dark};
  margin-top: -0.5rem;
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
    <StyledPageWrapper style={{ padding: "3rem inherit" }}>
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
        <StyledChartHeader direction={isMobile ? "column" : "row"}>
          <Stack direction="row">
            <StyledImage
              alt="flag"
              src="/images/usa.png"
              style={{ minWidth: "34px", maxWidth: "2.1rem", height: '2rem', marginTop: '.2rem' }}
            />

            <StyledArrowForwardIcon />

            <Avatar
              alt="flag"
              src="/images/chsb.png"
              style={{ width: "2rem" }}
            />
          </Stack>

          <Stack direction="column">
            <Typography size="h4">CHSB 0.90</Typography>

            {isMobile ? (
              <Typography size="span" color={theme.colors.primary}>
                +4.8% 24h
              </Typography>
            ) : (
              <Typography size="span" color={theme.colors.red}>
                -4.8% 24h
              </Typography>
            )}

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
