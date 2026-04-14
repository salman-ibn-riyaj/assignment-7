"use client";
import { useState } from "react";
import { useInteraction } from "@/context/InteractionContext";
import { IoIosCall } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";

const icons = {
  call: <IoIosCall size={22} />,
  text: <MdOutlineTextsms size={22} />,
  video: <PiVideoCamera size={22} />,
};

const TimelinePage = () => {
  const { interactions } = useInteraction();
  const [filterType, setFilterType] = useState("all");

  const filtered =
    filterType === "all"
      ? interactions
      : interactions.filter((item) => item.type === filterType);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 w-full">
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="mb-6 border-2 border-gray-500 rounded-md px-3 py-2 text-sm font-bold text-gray-700 bg-white focus:outline-none focus:ring-gray-400 w-48"
      >
        <option className="font-semibold" value="all">Filter timeline</option>
        <option className="font-semibold" value="text">Text</option>
        <option className="font-semibold" value="call">Call</option>
        <option className="font-semibold" value="video">Video</option>
      </select>

      {filtered.length === 0 ? (
        <p className="text-gray-400">
          No call text or video history is available
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border border-gray-200 rounded-md p-4 shadow-sm"
            >
              <span className="text-gray-600 text-3xl">{icons[item.type]}</span>
              <div>
                <p>
                  <strong className="capitalize">{item.type}</strong> with{" "}
                  {item.friendName}
                </p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
