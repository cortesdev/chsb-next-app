import { FC } from "react";
import { Grid, Theme } from "@mui/material";
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
  margin: 0.8em auto;
`;

const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  return (
    <StyledPageWrapper>
      <StyledHeadline weight="bold" size="h3">
        A breakdown of CHSBs circulating supply
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
