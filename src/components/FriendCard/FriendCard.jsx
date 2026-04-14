import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  const statusStyles = {
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
    overdue: "bg-red-500 text-white",
  };
  return (
    <Link href={`/${friend.id}`} className="border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-2 bg-slate-200">
      <Image
        width={60}
        height={60}
        src={friend.picture}
        alt={friend.name}
        className="w-18 h-18 rounded-full object-cover"
      />
      <p className="text-xl font-bold text-gray-800 text-center">
        {friend.name}
      </p>
      <p className="text-xs text-gray-400">{friend.days_since_contact}d ago</p>

      <div className="flex flex-wrap justify-center gap-1">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full uppercase font-medium tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          statusStyles[friend.status] || "bg-gray-400 text-white"
        }`}
      >
        {friend.status.replace("_", "")}
      </div>
    </Link>
  );
};

export default FriendCard;
