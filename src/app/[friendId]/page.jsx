import Image from "next/image";
import { FaBoxArchive } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdDeleteForever, MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;
  console.log(friendId);

  const res = await fetch(
    "https://assignment-7-egtp.vercel.app/friendsData.json",
  );
  const friends = await res.json();
  console.log(friends);

  const friend = friends.find((findedFrnd) => findedFrnd.id == friendId);

  const statusStyles = {
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
    overdue: "bg-red-500 text-white",
  };

  return (
    <div className="max-w-7xl mx-auto my-20 flex flex-col md:flex-row p-2 gap-8">
      {/* left column  */}
      <div className="space-y-2">
        <div
          href={`/${friend.id}`}
          className="border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-2 bg-slate-200"
        >
          <Image
            width={60}
            height={60}
            src={friend.picture}
            alt={friend.name}
            className="w-18 h-18 rounded-full object-cover"
          />
          <p className="font-medium text-sm text-gray-800 text-center">
            {friend.name}
          </p>
          <p className="text-xs text-gray-400">
            {friend.days_since_contact}d ago
          </p>

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
          <div className="text-gray-500 text-center">
            <p>{friend.bio}</p>
            <p>{friend.email}</p>
          </div>
        </div>

        <div className="space-y-2">
          <button className="btn w-full">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn w-full">
            <FaBoxArchive />
            Archive
          </button>
          <button className="btn w-full text-red-500">
            <MdDeleteForever />
            Delete
          </button>
        </div>
      </div>

      {/* Right side div  */}

      <div className="parent-div">
        <div className="flex gap-5">
          <div className="text-center bg-slate-100 p-2 rounded-md">
            <h2 className="font-bold">{friend.days_since_contact}</h2>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
          <div className="text-center bg-slate-100 p-2 rounded-md">
            <h2 className="font-bold">{friend.goal}</h2>
            <p className="text-gray-500">Goal(Days)</p>
          </div>
          <div className="text-center bg-slate-100 p-2 rounded-md">
            <h2 className="font-bold">{friend.next_due_date}</h2>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>

        <div className="flex justify-between shadow p-4 rounded-md my-4">
          <div className="space-y-2">
            <h2 className="font-bold">Relationship Goal</h2>
            <p className="text-gray-500">
              Connect every{" "}
              <span className="font-bold text-black">30 days</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>

        <div className="shadow p-4 rounded-md my-4">
          <div className="space-y-2">
            <h2 className="font-bold mb-4">Quick Check In</h2>
          </div>


          <div className="space-x-2 flex flex-col md:flex-row gap-2">
            <button className="text-center mr-3 btn">
              <span>
                <IoIosCall />
              </span> <br />
              <p>Call</p>
            </button>

            <button className="text-center mr-3 btn">
              <span>
               <MdOutlineTextsms />
              </span> <br />
              <p>Text</p>
            </button>

            <button className="text-center mr-3 btn">
              <span>
                <PiVideoCamera />
              </span> <br />
              <p>Video</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
