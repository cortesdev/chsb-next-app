import { FC } from "react";
import { Stack, Theme, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { FormattedNumber } from "react-intl";
import styled from "@emotion/styled";
import Typography from "../../atoms/Typography";

interface DashboardListProps {
  dashboard: any;
  theme?: Theme;
}

const StyledStack = styled(Stack)<{ theme?: Theme }>`
  border-bottom: 1px solid ${(props) => props.theme.colors.dark20};
  height: 80px;
  padding: 0.5rem 0;
`;

const StyledFormattedNumber = styled.h2<{ theme?: Theme }>`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.1rem;
  margin-top: 0;
  margin-left: 0.8rem;

  @media (min-width: 900px) {
    margin-bottom: 0.2rem;
    margin-top: inherit;
    font-size: 2rem;
  }
`;

const ImageStack = styled(Stack)`
  width: 3rem;
  height: 2.5rem;
  align-self: center;
`;

const StyledStackItem = styled(Stack)`
  width: 100%;
  height: 4.2rem;

  @media (min-width: 900px) {
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledTypography = styled(Typography)<{ theme?: Theme }>`
  margin-left: 0.8rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.dark80};

  @media (min-width: 1000px) {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.dark};
  }
`;

const StyledText = styled.span<{ theme?: Theme }>`
  font-size: .8rem;
  margin-left: .8rem;
  color: ${(props) => props.theme.colors.primary};
  
  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

const DashboardList: FC<DashboardListProps> = ({ dashboard }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const sum =
    dashboard?.chsbCirculatingSupplyTokens +
    dashboard?.chsbBurnedTokens +
    dashboard?.chsbStackedTokens -
    dashboard?.chsbYieldPledgedTokens;

  function per(num: number, amount: number) {
    return (num * amount) / 1000;
  }

  const dashboardItems = [
    {
      url: "/svg/img1.svg",
      alt: "item icon",
      headline: "Remaining circulating supply",
      number: dashboard?.chsbCirculatingSupplyTokens,
      text: "",
    },
    {
      url: "/svg/img2.svg",
      alt: "item icon",
      headline: "CHSB staked",
      number: dashboard?.chsbStackedTokens,
      text: "(10.75% of circulating supply)",
    },
    {
      url: "/svg/img3.svg",
      alt: "item icon",
      headline: "CHSB in Yield ",
      number: dashboard?.chsbYieldPledgedTokens,
      text: `(${dashboard?.chsbInYieldPercentage} % of circulating supply)`,
    },
    {
      url: "/svg/img4.svg",
      alt: "item icon",
      headline: "Circulating supply burned",
      number: dashboard?.chsbBurnedTokens,
      text: "",
    },
    {
      url: "/svg/img5.svg",
      alt: "item icon",
      headline: "CHSB in buyback pool",
      number: per(sum, dashboard?.totalSupplyBurnedPercentage),
      text: "",
    },
  ];

  return (
    <>
      {dashboardItems.map((item, index) => (
        <StyledStack direction="row" key={index}>
          <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
            <img src={item.url} alt={item.alt} width={60} height={45} />
          </ImageStack>

          <StyledStackItem direction={isTablet ? "column-reverse" : "row"}>
            <StyledTypography size={isTablet ? "h4" : "h3"}>
              {item.headline}
            </StyledTypography>

            <Stack textAlign={isTablet ? "left" : "right"}>
              <StyledFormattedNumber>
                <FormattedNumber value={item.number} />
              </StyledFormattedNumber>

              <StyledText>{item.text}</StyledText>
            </Stack>
          </StyledStackItem>
        </StyledStack>
      ))}
    </>
  );
};

export default DashboardList;
