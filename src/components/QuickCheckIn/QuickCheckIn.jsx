"use client";
import { useInteraction } from "@/context/InteractionContext";
import { useRouter } from "next/navigation";
import { FaPhone, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const icons = {
  call: <FaPhone size={20} />,
  text: <FaMessage size={20} />,
  video: <FaVideo size={20} />,
};

const QuickCheckIn = ({ friendName }) => {
  const { addInteraction } = useInteraction();
  const router = useRouter();

  const handleClick = (type) => {
    addInteraction(type, friendName);
    router.push("/timeline");
  };

  return (
    <div className="bg-base-200 rounded-xl p-4">
      <h3 className="font-semibold mb-3">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-3">
        {["call", "text", "video"].map((type) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            className="btn btn-outline flex flex-col gap-1 h-auto py-3"
          >
            {icons[type]}
            <span className="text-sm capitalize">{type}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickCheckIn;