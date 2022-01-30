import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Dashboard from "../design-system/organisms/Dashboard";
import Hero from "../design-system/organisms/Hero";

const Home: NextPage = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [chatdData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    return <p>Loading...</p>;
  }

  if (!dashboardData) {
    return <p>No data to show</p>;
  }

  return (
    <section className={styles.container}>
      <Head>
        <title>CHSB Dashboard</title>
        <title>CHSB Dashboard - Lorem ipsum dolor sit amet, consectetur adipiscing elit</title>
        <meta name="description" content="CHSB Dashboard App - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <meta property="og:title" content="CHSB Dashboard App - sample text" />
        <meta property="og:description" content="ALorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <meta property="og:url" content="https://chsb-next-app-cortesdev.vercel.app/"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/chsb.png" />
      </Head>

      <main>
        <Hero chartData={chatdData} />
        <Dashboard dashboard={dashboardData} />
      </main>
    </section>
  );
};

export default Home;
