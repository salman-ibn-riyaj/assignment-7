import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white text-center pt-20 px-20">
      <div>
        <h2 className="text-3xl font-bold">KeenKeeper</h2>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="font-bold mb-2">Social Links</h2>
        <div className="flex items-center justify-center gap-5">
          <span className="bg-white p-1 rounded-full text-black">
            <FaInstagram />
          </span>
          <span className="bg-white p-1 rounded-full text-black">
            <FaFacebookF />
          </span>
          <span className="bg-white p-1 rounded-full text-black">
            <FaXTwitter />
          </span>
        </div>
        <hr className="text-gray-600 my-5 max-w-7xl mx-auto"/>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between w-full pb-4">
        <p>@2026 salman shah. All right reserved.</p>

        <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
            <li>Terms of Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
