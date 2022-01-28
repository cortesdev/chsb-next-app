import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface DashboardProps {
  dashboard: any;
}

const Dashboard: NextPage<DashboardProps> = ({ dashboard }) => {
  function per(num: number, amount: number) {
    return (num * amount) / 100;
  }

  return (
    <section>
      <div className="container">
        <h2>A breakdown of CHSB's circulating supply</h2>
        <div>
          <div>
            <h3>Remaining circulating supply </h3>
            <p>{dashboard?.chsbCirculatingSupplyTokens}.</p>
          </div>

          <div>
            <h3>CHSB staked</h3>
            <p>{per(dashboard?.chsbCirculatingSupplyTokens, .8925)}</p>
          </div>

          <div>
            <h3>CHSB in Yield Program </h3>
            <p>{per(dashboard?.chsbYieldPledgedTokens, .8925)}</p>

          </div>

          <div>
            <h3>Circulating supply burned </h3>
            <p>{dashboard?.chsbBurnedTokens}.</p>
          </div>

          <div>
            <h3>CHSB in buyback pool </h3>
            <p>{dashboard?.chsbYieldPledgedTokens}.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
