import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaBarsStaggered } from "react-icons/fa6";
import { domainLogin, useAuth } from "../../store";
import DesktopNav from "./DesktopNav";
import UserMenu from "./UserMenu";
import AuthButtons from "./AuthButtons";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { jwt, setUser } = useAuth();

  useEffect(() => {
    if (!jwt) return;
    axios
      .get(domainLogin + "/api/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        setUser(res.data.username, res.data.email === "adminmostafa@gmail.com");
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.error?.message || "Something went wrong 👎",
        );
      });
  }, [jwt, setUser]);

  return (
    <div className="relative flex items-center gap-2 md:gap-6 lg:gap-10">
      <DesktopNav />

      {jwt ? <UserMenu /> : <AuthButtons />}

      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
        <FaBarsStaggered className="text-white text-2xl cursor-pointer" />
      </button>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
