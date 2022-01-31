import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Dashboard from "../design-system/organisms/Dashboard";
import Hero from "../design-system/organisms/Hero";
import { Stack, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../utils/theme";
import About from "../design-system/organisms/About";
import Seo from "./Seo";

const Loader = styled(Stack)`
  margin: 10rem auto;
  max-width: 4rem;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

const Home: NextPage = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [chatdData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const fetchData = () => {
    const dashboardApi = "https://chsb.my-test-domain.website/chsb-metrics";
    const chartApi = "https://chsb.my-test-domain.website/chsb-price-month";

    const getDashboardData = axios.get(dashboardApi);
    const getChartData = axios.get(chartApi);

    axios.all([getDashboardData, getChartData]).then(
      axios.spread((...allData) => {
        const allDataDashboard = allData[0].data;
        const allChart = allData[1].data;

        setDashboardData(allDataDashboard);
        setChartData(allChart);

        setIsLoading(false);
      })
    );
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Loader direction="column" color={theme.colors.primary}>
        Loading...
      </Loader>
    );
  }

  if (!dashboardData) {
    return (
      <Loader direction="column" color={theme.colors.primary}>
        No data to show
      </Loader>
    );
  }

  return (
    <>
      <Seo />
      <section className={styles.container}>
        <main>
          <Hero chartData={chatdData} isTablet={isTablet} isMobile={isMobile} />

          <Dashboard
            dashboard={dashboardData}
            isTablet={isTablet}
            isMobile={isMobile}
          />
          <About isTablet={isTablet} isMobile={isMobile} />
        </main>
      </section>
    </>
  );
};

export default Home;
