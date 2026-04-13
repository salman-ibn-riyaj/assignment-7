import { RiHome2Line } from "react-icons/ri";
import MyLinks from "./MyLinks/MyLinks";
import { WiTime4 } from "react-icons/wi";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const links = [
    { id: 1, icon: <RiHome2Line />, href: "/", text: "Home" },
    { id: 2, icon: <WiTime4 />, href: "/timeline", text: "Timeline" },
    { id: 3, icon: <TfiStatsUp />, href: "/stats", text: "Stats" },
  ];

  return (
    <nav className="flex justify-between items-center gap-5 shadow p-3">
      <div>
        <p className="font-bold">
          <span className="text-[#1F2937]">Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </p>
      </div>

      <div>
        <ul className="flex gap-4">
          {links.map((link) => (
            <MyLinks key={link.id} link={link}></MyLinks>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
