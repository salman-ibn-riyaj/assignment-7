"use client";
import { useInteraction } from "@/context/InteractionContext";
import { Pie, PieChart, Legend, Tooltip } from "recharts";

const StatsPage = () => {
  const { interactions } = useInteraction();


  const counts = { call: 0, text: 0, video: 0 };
  interactions.forEach((item) => {
    if (counts[item.type] !== undefined) counts[item.type]++;
  });

  const data = [
    { name: "Call", value: counts.call, fill: "#1a1a2e" },
    { name: "Text", value: counts.text, fill: "#7c3aed" },
    { name: "Video", value: counts.video, fill: "#16a34a" },
  ].filter((d) => d.value > 0);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Friendship Analytics</h1>

      <div className="shadow-sm rounded-xl p-6">
        <p className="text-gray-500 mb-4">By Interaction Type</p>

        {data.length === 0 ? (
          <p className="text-gray-400">No call text or video history found!</p>
        ) : (
          <PieChart
    width={1000}
    height={400}
    style={{ margin: "0 auto" }}
  >
    <Pie
      data={data}
      cx={300}
      cy={180}
      innerRadius={130}
      outerRadius={180}
      cornerRadius={10}
      paddingAngle={5}
      dataKey="value"
    />
    <Tooltip />
    <Legend />
  </PieChart>
        )}
      </div>
    </div>
  );
};

export default StatsPage;