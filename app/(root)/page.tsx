import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Devarshi",
  };
  return (
    <section className="Home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access your banking information securely and conveniently."
          ></HeaderBox>
          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={1245.78}
          ></TotalBalanceBox>
        </header>
      </div>
    </section>
  );
};

export default Home;
