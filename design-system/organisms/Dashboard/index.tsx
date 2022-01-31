import { FC } from "react";
import { Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import type { Payload } from "recharts/types/component/DefaultLegendContent";
import styled from "@emotion/styled";
import DashboardChart from "../../molecules/DashboardChart";
import DashboardList from "./DashboardList";
import PageWrapper from "../../atoms/PageWrapper";
import Typography from "../../atoms/Typography";

interface DashboardProps {
  dashboard: any;
  theme?: Theme;
}

const StyledPageWrapper = styled(PageWrapper)`
  margin: 3rem 0;

  @media (max-width: 900px) {
    margin: 6rem 0;
  }
`;

const StyledGrid = styled(Grid)`
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const StyledHeadline = styled(Typography)`
  margin: 4rem auto 2rem;
`;

const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledPageWrapper>
      <StyledHeadline weight="bold" size={isMobile ? 'h5' : 'h4'}>
        A breakdown of CHSB's circulating supply
      </StyledHeadline>

      <StyledGrid
        container
        rowSpacing={4}
        spacing={24}
        columnSpacing={{ sm: 2 }}
      >
        <Grid item sm={12} md={6}>
          <DashboardList dashboard={dashboard} />
        </Grid>

        <Grid item sm={12} md={6}>
          <DashboardChart dashboard={dashboard} />
        </Grid>
      </StyledGrid>
    </StyledPageWrapper>
  );
};

export default Dashboard;
