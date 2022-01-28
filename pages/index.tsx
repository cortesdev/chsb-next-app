import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dashboardData } from "../interfaces/dashboardProps";
import styles from "../styles/Home.module.css";
import Dashboard from "../components/Dashboard";
import Hero from "../components/Hero";

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

  console.log(dashboardData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!dashboardData) {
    return <p>No data to show</p>;
  }

  return (
    <section className={styles.container}>
      <Head>
        <title>Dashboard app</title>
        <meta property="og:description" content="Generated by create next app"  key="description"/>
        <meta property="og:title" content="My newer title" key="title" />
        <meta property="og:image" content="/cover.png"  key="image" />
        <link rel="icon" href="/favicon.ico" />
        
        <link
          rel="preload"
          href="/fonts/TTCommons-ExtraLight.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/TTCommons-Light.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/TTCommons-Thin.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/TTCommons-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/TTCommons-DemiBold.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main>
        <Hero chartData={chatdData} />
        <Dashboard dashboard={dashboardData} />
      </main>
    </section>
  );
};

export default Home;
