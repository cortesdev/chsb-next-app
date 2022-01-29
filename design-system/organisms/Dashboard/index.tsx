import { FC } from "react";
import { Grid, Stack, Theme } from "@mui/material";
import Image from "next/image";
import { FormattedNumber } from "react-intl";
import type { Payload } from "recharts/types/component/DefaultLegendContent";
import styled from "@emotion/styled";
import DashboardChart from "../../molecules/DashboardChart";
import DashboardList from "./DashboardList";
import PageWrapper from "../../atoms/PageWrapper";

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
    <PageWrapper>
      <div className="container">
        <h2>A breakdown of CHSBs circulating supply</h2>
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
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
