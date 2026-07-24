import { Link } from "react-router-dom";

export default function AuthButtons({ mobile = false, closeMenu }) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-4 w-full px-5">
        <Link
          to="/login"
          onClick={closeMenu}
          className="btn text-center bg-red hover:bg-white hover:text-red transition"
        >
          LOGIN
        </Link>

        <Link
          to="/signup"
          onClick={closeMenu}
          className="btn text-center bg-white text-red hover:bg-red hover:text-white transition"
        >
          SIGN UP
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden sm:flex gap-3 lg:gap-5">
      <Link
        to="/login"
        className="btn bg-red hover:bg-white hover:text-red transition"
      >
        LOGIN
      </Link>

      <Link
        to="/signup"
        className="btn bg-white text-red hover:bg-red hover:text-white transition"
      >
        SIGN UP
      </Link>
    </div>
  );
}
