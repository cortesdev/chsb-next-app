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
  isMobile: any;
  isTablet: any;
}

const StyledSection = styled.section<{ theme?: Theme }>`
  background: ${(props) =>
      `url(/images/background.png), ${props.theme.colors.secondaryGradient}`}
    no-repeat center center fixed;
  color: ${(props) => props.theme.colors.white};
  background-size: cover;
  height: 100%;
  overflow: hidden;

  h1 {
    font-size: 3rem;
    text-align: left;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
      text-align: center;
    }
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 5.6rem;
    }
  }
`;

const Headline = styled(Stack)`
  padding: 3rem 0;

  @media (min-width: 600px) {
    padding: 4rem 0 2rem;
  }
`;

const StyledHeadline = styled(Typography)`
  @media (min-width: 600px) {
    margin-bottom: 2rem;
  }
`;

const StyledText = styled(Typography)`
  @media (min-width: 900px) {
    font-size: 1.6rem;
    font-family: chsb light;
  }
`;

const StyledStack = styled(Stack)<{ theme?: Theme }>`
  background: ${(props) => props.theme.colors.dark80};
  padding: 0;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.33);

  @media (min-width: 900px) {
    margin-bottom: 6rem;
  }
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
  background: #30353e;
  margin-bottom: 1rem;
  padding: 1.5rem;
  width: 10rem;

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
      font-size: 2rem;
      margin-top: 0;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;

const StyledChartFooter = styled.div<{ theme?: Theme }>`
  display: flex;
  background: ${(props) => props.theme.colors.dark50};
  color: ${(props) => props.theme.colors.dark};
  margin-top: -0.5rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.colors.dark};
  }
`;

const Hero: FC<HeroProps> = ({ chartData, isMobile }) => {
  const theme = useTheme();

  return (
    <StyledSection style={{ padding: "3rem inherit" }}>
      <PageWrapper>
        <Headline sx={{ alignItems: "center" }}>
          <StyledHeadline weight="bold" size="h1">
            CHSB Performance Metrics
          </StyledHeadline>

          <StyledText size="body">
            Deep-dive into the statistics of CHSB and understand the mechanics
            of the SwissBorg ecosystem.
          </StyledText>
        </Headline>

        <StyledStack>
          <StyledChartHeader direction={isMobile ? "column" : "row"}>
            <Stack direction="row">
              <StyledImage
                alt="flag"
                src={isMobile ? '/images/usa.png' : '/svg/addCountry.svg'}
                style={{
                  minWidth: "34px",
                  maxWidth: "2.1rem",
                  height: "2.1rem",
                  marginTop: ".21rem",
                }}
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

          <StyledChartFooter>
            <Typography
              size="h5"
              sx={{ margin: "0 auto" }}
              color={theme.colors.white30}
            >
              ALL
            </Typography>
          </StyledChartFooter>
        </StyledStack>

        {isMobile && (
          <Stack mb={5}>
            <ArrowDownwardIcon
              sx={{ alignSelf: "center", color: theme.colors.primary }}
            />
          </Stack>
        )}
      </PageWrapper>
    </StyledSection>
  );
};

export default Hero;
