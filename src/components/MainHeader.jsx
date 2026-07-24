import { Link } from "react-router-dom";
import NavBar from "./NavBarComponents/NavBar";

export default function MainHeader() {
  return (
    <div className="w-full flex justify-between border-b border-gray-900">
      <Link to="/" className="text-3xl font-extrabold font-oswald text-white">
        IRON<span className="text-red"> BEAST</span>
      </Link>
      <NavBar />
    </div>
  );
}
