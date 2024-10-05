"use client";
import { useEffect, useState } from "react";
import AnimatedBeam from "./components/animated-beam";
import StatusButton from "./components/status-button";
import CardWithForm from "./components/input";
import StatsGrid from "./components/infoabout";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("");

  console.log(input, country);
  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `https://api.zipcodestack.com/v1/search?codes=${input}&country=${country}&apikey=01J9AV43V731887R8MR3964F2S`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data2 = await res.json();
      setData(data2.results);
    } catch (err: any) {
      setError(err.message);
      console.error("Error:", err);
    }
  };

  return (
    <div>
      {/* <AnimatedBeam> */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
        <CardWithForm fun={fetchPosts} value={setInput} country={setCountry} />
        {/* Conditional rendering for StatsGrid */}
        <StatsGrid data={data} val={input} />
      </div>
      {/* </AnimatedBeam> */}
    </div>
  );
}
