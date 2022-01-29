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
interface props {
  payload: Payload[];
}

const StyledGrid = styled(Grid)`
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
 
const Dashboard: FC<DashboardProps> = ({ dashboard }) => {
  return (
    <PageWrapper style={{ margin: '3rem 0'}}>
     
        <Typography weight="bold" size="h3">A breakdown of CHSBs circulating supply</Typography>
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
    </PageWrapper>
  );
};

export default Dashboard;
