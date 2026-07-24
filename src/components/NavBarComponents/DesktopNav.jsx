import { NavLink, useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import { navStyle } from "./navStyle";

export default function DesktopNav() {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex items-center gap-6 text-xl font-semibold uppercase">
      <NavLink to="/" className={navStyle}>
        Home
      </NavLink>

      <NavLink to="/about" className={navStyle}>
        About
      </NavLink>

      <NavLink to="/team" className={navStyle}>
        Team
      </NavLink>

      <NavLink to="/shop" className={navStyle}>
        Shop
      </NavLink>

      <NavLink to="/contact" className={navStyle}>
        Contact Us
      </NavLink>

      <CartButton onClick={() => navigate("/cart")} />
    </div>
  );
}
