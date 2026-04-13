"use client";
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

  return (
  <div className="max-w-7xl mx-auto py-10 px-4 w-full">
    <h1 className="text-2xl font-bold mb-6">Timeline</h1>

    {interactions.length === 0 ? (
      <p className="text-gray-400">No call text or video history is available</p>
    ) : (
      <div className="flex flex-col gap-3">
        {interactions.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <span className="text-gray-600 text-3xl shrink-0">{icons[item.type]}</span>
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
