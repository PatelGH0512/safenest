"use client";
import CountUp from "react-countup";

const AminatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="," prefix="$" end={amount}></CountUp>
    </div>
  );
};

export default AminatedCounter;
