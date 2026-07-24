import { NavLink, useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import { useAuth } from "../../store";
import { navStyle } from "./navStyle";

export default function MobileNav({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { jwt } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-4 w-56 sm:w-64 bg-black rounded-xl border border-gray-800 shadow-xl lg:hidden z-50">
      <div className="flex flex-col items-center gap-5 py-6 uppercase text-lg">
        <NavLink
          to="/"
          end
          className={navStyle}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={navStyle}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/team"
          className={navStyle}
          onClick={() => setIsOpen(false)}
        >
          Team
        </NavLink>

        <NavLink
          to="/shop"
          className={navStyle}
          onClick={() => setIsOpen(false)}
        >
          Shop
        </NavLink>

        <NavLink
          to="/contact"
          className={navStyle}
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </NavLink>

        <CartButton
          onClick={() => {
            navigate("/cart");
            setIsOpen(false);
          }}
        />
        <div className="flex flex-col space-y-4 md:hidden">
          {jwt ? (
            <UserMenu mobile />
          ) : (
            <AuthButtons mobile closeMenu={() => setIsOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
