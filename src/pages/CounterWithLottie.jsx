// CounterWithLottie.jsx
import React from "react";
import CountUp from "react-countup";
import { Player } from "@lottiefiles/react-lottie-player";
import "./CounterWithLottie.css"; // Optional for custom styles

const stats = [
  { number: 800, label: "Project Completed" },
  { number: 8, label: "Years Of Experience" },
  { number: 895, label: "Activated Clients" },
];

export default function CounterWithLottie() {
  return (
  <div className="container18 py-5">
<div
  className="d-flex flex-row align-items-center flex-wrap gap-4"
  style={{
    alignItems: "center",
    justifyContent: "center",
  }}
>


    
    {/* Left: Text + Counters */}
    <div style={{ minWidth: "300px" }}>
      <h2 className="fw-bold text-start">
        Creating Outstanding Website Designs <br /> Driven by User Satisfaction
      </h2>

      <div className="d-flex gap-4 mt-4 flex-wrap">
        {stats.map((item, i) => (
          <div
            key={i}
            className="text-center border rounded-circle p-4"
            style={{ width: 170, height: 170 }}
          >
            <h3 className="fw-bold">
              <CountUp end={item.number} duration={2.5} /> +
            </h3>
            <p className="mb-0">{item.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right: Lottie Animation */}
    <div style={{ flexShrink: 0 }}>
      <Player
        autoplay
        loop
        src="https://lottie.host/a090c1e3-ca9d-4b07-8c82-c83e5e280726/nwi76vcccG.json"
        style={{ height: "400px", width: "600px", marginLeft:"150px" }}
      />
    </div>
    
  </div>
</div>

  );
}

