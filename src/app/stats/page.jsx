"use client";
import { useInteraction } from "@/context/InteractionContext";
import { Pie, PieChart, Legend, Tooltip } from "recharts";
import { useEffect, useState } from "react";

const StatsPage = () => {
  const { interactions } = useInteraction();
  const [chartSize, setChartSize] = useState({ width: 600, height: 400 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setChartSize({ width: w - 40, height: 280 });
      } else if (w < 768) {
        setChartSize({ width: w - 60, height: 350 });
      } else {
        setChartSize({ width: Math.min(w - 100, 900), height: 450 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const counts = { call: 0, text: 0, video: 0 };
  interactions.forEach((item) => {
    if (counts[item.type] !== undefined) counts[item.type]++;
  });

  const data = [
    { name: "Call", value: counts.call, fill: "#1a1a2e" },
    { name: "Text", value: counts.text, fill: "#7c3aed" },
    { name: "Video", value: counts.video, fill: "#16a34a" },
  ].filter((d) => d.value > 0);

  const radius = Math.min(chartSize.width, chartSize.height) * 0.28;

  return (
    <div className="w-full px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Friendship Analytics</h1>

        <div className="w-full shadow-sm rounded-xl p-4 border border-gray-100 flex flex-col items-center">
          <p className="text-gray-500 mb-2 self-start">By Interaction Type</p>

          {data.length === 0 ? (
            <p className="text-gray-400">No call text or video history found!</p>
          ) : (
            <PieChart width={chartSize.width} height={chartSize.height}>
              <Pie
                data={data}
                cx="50%"
                cy="30%"
                innerRadius={radius * 0.8}
                outerRadius={radius}
                cornerRadius={10}
                paddingAngle={5}
                dataKey="value"
              />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;