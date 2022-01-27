import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";


//  const data = {
//    "chsbCirculatingSupplyTokens":227885076,
//    "chsbStackedTokens":139665000,
//    "chsbStackedPercentage":19.83,
//    "chsbYieldPledgedTokens":331754774,
//    "chsbInYieldPercentage":47.11,
//    "chsbBurnedTokens":4898917.07,
//    "totalSupplyBurnedPercentage":0.6956675457607038
//   }

const Dashboard: NextPage = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('https://chsb.my-test-domain.website/chsb-metrics')
      const data = await response.json()
      setDashboardData(data)    
      setIsLoading(false)  
    }

    fetchDashboardData()      
  }, [])

  if (isLoading) {
    return <h2>Sorry still loading</h2>
  }

  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
       Circulating supply
        <p className={styles.code}>
          Circ. {dashboardData.chsbCirculatingSupplyTokens}
        </p>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </>
  );
};

export default Dashboard;
