import { FC } from "react";
import {
  Grid,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { FormattedNumber } from "react-intl";
import type { Payload } from "recharts/types/component/DefaultLegendContent";
import styled from "@emotion/styled";
import DashboardChart from "../DashboardChart";

interface DashboardListProps {
  dashboard: any;
  theme?: Theme;
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
  @media (min-width: 900px) {
    align-items: center;
  }
  
  justify-content: space-between;
  width: 100%;
  padding: 0 0.9rem;
`;

const StyledText = styled.span`
  font-size: 0.7rem;
`;

const DashboardList: FC<DashboardListProps> = ({ dashboard }) => {
  const dashboardItems = [
    {
      url: "/images/icon1.png",
      alt: "item icon",
      headline: "Remaining circulating supply",
      number: dashboard?.chsbCirculatingSupplyTokens,
      text: "",
    },
    {
      url: "/images/icon2.png",
      alt: "item icon",
      headline: "CHSB staked",
      number: dashboard?.chsbStackedTokens,
      text: "(10.75% of circulating supply)",
    },
    {
      url: "/images/icon3.png",
      alt: "item icon",
      headline: "CHSB in Yield ",
      number: dashboard?.chsbYieldPledgedTokens,
      text: `(${dashboard?.chsbInYieldPercentage} % of circulating supply)`,
    },
    {
      url: "/images/icon4.png",
      alt: "item icon",
      headline: "Circulating supply burned",
      number: dashboard?.chsbBurnedTokens,
      text: "",
    },
    {
      url: "/images/icon5.png",
      alt: "item icon",
      headline: "CHSB in buyback pool",
      number: dashboard?.totalSupplyBurnedPercentage,
      text: "",
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log(dashboardItems)
  return (
    <>
      {dashboardItems.map((item, index) => (
        <StyledStack direction="row" key={index}>
          <ImageStack direction="row" sx={{ width: 80, height: 50 }}>
            <Image src={item.url} alt={item.alt} width={60} height={20} />
          </ImageStack>

          <StyledStackItem direction={isMobile ? "column" : "row"}>

            {isMobile ? (
              <Typography>{item.headline}</Typography>
            ) : (
              <h4>{item.headline}</h4>
            )}

            <Stack textAlign={isMobile ? "left" : "right"}>
              <FormattedNumber value={item.number} />
              <StyledText>{item.text}</StyledText>
            </Stack>
          </StyledStackItem>
        </StyledStack>
      ))}
    </>
  );
};

export default DashboardList;
