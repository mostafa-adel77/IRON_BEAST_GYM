import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MainFooter() {
  let styleLogo = "hover:text-red cursor-pointer transition duration-300";
  return (
    <div className="flex flex-col border-t-2 border-gray justify-center gap-6 py-15">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <h1 className="text-3xl font-extrabold font-oswald text-white">
          IRON<span className="text-red"> BEAST</span>
        </h1>
        <div className="flex gap-6 text-5xl text-white">
          <Link
            to="https://www.facebook.com/mostafa.adel.600833"
            target="_blank"
          >
            <FaFacebookSquare className={styleLogo} />
          </Link>
          <Link to="https://www.instagram.com/mostafaadel_77" target="_blank">
            <FaInstagramSquare className={styleLogo} />
          </Link>
          <Link to="https://github.com/mostafa-adel77" target="_blank">
            <FaSquareGithub className={styleLogo} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mostafa-adel-6551a3381"
            target="_blank"
          >
            <FaLinkedin className={styleLogo} />
          </Link>
        </div>
      </div>
      <p className="text-gray text-2xl text-center font-semibold capitalize">
        © 2026 IronBeast Gym. Train hard & Created By Mostafa Adel
      </p>
    </div>
  );
}
